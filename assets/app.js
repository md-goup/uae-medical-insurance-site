/* Site behaviour: menu, analytics events, plan checker, enquiry form.
   All settings come from window.SITE (generated from config/site.config.mjs). */
(function () {
  "use strict";
  var S = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- Analytics (GTM-compatible dataLayer events) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  function track(event, params) {
    var data = Object.assign({ event: event, page_path: location.pathname }, params || {});
    window.dataLayer.push(data);
    if (S.ga4 || S.adsId) gtag("event", event, params || {});
  }
  window.trackEvent = track;

  // gtag.js loads only when a real ID is configured.
  var tagId = S.ga4 || S.adsId;
  if (tagId) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(tagId);
    document.head.appendChild(s);
    gtag("js", new Date());
    if (S.ga4) gtag("config", S.ga4);
    if (S.adsId) gtag("config", S.adsId);
  }

  function isPortalLink(a) { return S.applyUrl && a.href === S.applyUrl; }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-track], button[data-track]");
    if (!a) return;
    var params = { location: a.getAttribute("data-location") || "", plan: a.getAttribute("data-plan") || "" };
    track(a.getAttribute("data-track"), params);
    if (a.tagName === "A" && isPortalLink(a)) {
      track("orient_portal_click", params);
      if (S.adsId && S.adsLabel) gtag("event", "conversion", { send_to: S.adsId + "/" + S.adsLabel });
    }
  });

  $$("details[data-faq]").forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) track("faq_interaction", { question: d.getAttribute("data-faq") });
    });
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $(".menu-btn"), nav = $("#site-nav");
  if (menuBtn && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- Plan checker ---------- */
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function recommend(a) {
    var R = S.rules;
    if (a.emirate === "Other" || a.who === "Other") return null;
    if (R.northernEmirates.indexOf(a.emirate) > -1) return R.northernPlan;
    return R.applicantPlan[a.who] || null;
  }

  $$("[data-checker]").forEach(function (form) {
    var R = S.rules, answers = {}, current = 0;
    var steps = $$("[data-step]", form);
    var err = $("[data-error]", form), progress = $("[data-progress]", form);
    var back = $("[data-back]", form), next = $("[data-next]", form), restart = $("[data-restart]", form);
    var started = false;

    function active() {
      return steps.filter(function (st) {
        return st.getAttribute("data-step") !== "salary" || R.salaryApplicants.indexOf(answers.who) > -1;
      });
    }
    function show(i, focus) {
      var list = active(); current = i;
      steps.forEach(function (st) { st.hidden = st !== list[i]; });
      var isResult = list[i].getAttribute("data-step") === "result";
      back.hidden = i === 0 || isResult; next.hidden = isResult; restart.hidden = !isResult;
      next.textContent = i === list.length - 2 ? "See my result" : "Next";
      progress.textContent = isResult ? "Your result" : "Step " + (i + 1) + " of " + (list.length - 1);
      err.textContent = "";
      if (focus) { var t = $("legend, [data-result]", list[i]); if (t) t.focus(); }
    }
    function validate(step) {
      var name = step.getAttribute("data-step");
      if (name === "emirate" || name === "who") {
        var c = $("input:checked", step);
        if (!c) return "Please choose an option to continue.";
        answers[name] = c.value; return "";
      }
      var input = $("input", step), v = input.value.trim(), n = Number(v);
      var bad = v === "" || !isFinite(n) || n < 0 || (name === "age" && (n > 120 || Math.floor(n) !== n));
      input.setAttribute("aria-invalid", String(bad));
      if (bad) return name === "age" ? "Please enter the age in years (0–120)." : "Please enter the monthly salary in AED.";
      answers[name] = n; return "";
    }
    function renderResult() {
      var id = recommend(answers), plan = (S.plans || []).filter(function (p) { return p.id === id; })[0];
      var out = $("[data-result]", form), html;
      if (!plan) {
        html = '<h3>Let us help you find the right option</h3><p>We could not suggest a plan category from these answers. Contact us and we will help you check which option may apply.</p>' +
          '<div class="btn-row"><a class="btn btn-primary" href="' + (S.base || "") + '/contact/" data-track="checker_contact_click">Contact us</a></div>';
      } else {
        var notes = [];
        if (R.northernEmirates.indexOf(answers.emirate) > -1 && answers.who !== "Employee")
          notes.push("You selected “" + esc(answers.who) + "”. Confirm the applicant type during the application or contact us first.");
        if (answers.salary !== undefined) {
          if (R.eMedSalaryLimitAED != null && id === "e-med" && answers.salary > R.eMedSalaryLimitAED)
            notes.push("The salary you entered may be above the eligibility limit for this plan. Please contact us before applying.");
          else notes.push("Salary eligibility may apply and is confirmed during the application.");
        }
        notes.push("Age can affect premium and whether an application is referred for review.");
        html = '<p class="result-label">You may be suitable for:</p>' +
          '<div class="result-plan"><h3>' + esc(plan.name) + "</h3><p>" + esc(plan.short) + "</p></div>" +
          '<ul class="result-notes">' + notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") + "</ul>" +
          "<p>Based on the information provided, this may be the applicable plan. Final eligibility is subject to provider requirements and policy terms.</p>" +
          '<div class="btn-row"><a class="btn btn-primary" href="' + esc(S.applyUrl) + '" target="_blank" rel="noopener noreferrer" data-track="apply_online_click" data-location="checker_result" data-plan="' + plan.id + '">Continue Application<span class="sr-only"> (opens in a new tab)</span></a>' +
          '<a class="btn btn-ghost" href="' + (S.base || "") + plan.href + '">View ' + esc(plan.name) + " details</a></div>";
      }
      out.innerHTML = html;
      // Only the outcome is tracked — never salary or age.
      track("eligibility_complete", { plan: id || "no_match", visa_emirate: answers.emirate, applicant_type: answers.who });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var list = active(), msg = validate(list[current]);
      if (msg) { err.textContent = msg; return; }
      if (!started) { started = true; track("eligibility_start"); }
      list = active(); // salary step may have appeared/disappeared
      var i = list.indexOf(steps.filter(function (s) { return !s.hidden; })[0]) + 1;
      if (list[i].getAttribute("data-step") === "result") renderResult();
      show(i, true);
    });
    back.addEventListener("click", function () { show(Math.max(0, current - 1), true); });
    restart.addEventListener("click", function () {
      form.reset(); answers = {}; started = false;
      $$("[aria-invalid]", form).forEach(function (el) { el.removeAttribute("aria-invalid"); });
      show(0, true);
    });
    show(0, false);
  });

  /* ---------- Enquiry form ---------- */
  $$("[data-lead-form]").forEach(function (form) {
    var status = $("[data-status]", form), loadedAt = Date.now();
    var rules = {
      name: function (v) { return v.length >= 2 ? "" : "Please enter your name."; },
      mobile: function (v) { return /^\+?[\d\s()-]{7,20}$/.test(v) && v.replace(/\D/g, "").length >= 7 ? "" : "Please enter a valid mobile number."; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Please enter a valid email address."; },
      visaEmirate: function (v) { return v ? "" : "Please select your visa emirate."; },
      insuranceType: function (v) { return v ? "" : "Please select an insurance type."; },
    };
    function setError(el, msg) {
      var box = document.getElementById(el.getAttribute("aria-describedby"));
      if (box) box.textContent = msg ? "Error: " + msg : "";
      el.setAttribute("aria-invalid", String(!!msg));
    }
    function setStatus(msg, ok) { status.textContent = msg; status.classList.toggle("ok", !!ok); }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null, data = {};
      Object.keys(rules).forEach(function (name) {
        var el = form.elements[name], v = el.value.trim(), msg = rules[name](v);
        setError(el, msg); data[name] = v;
        if (msg && !firstBad) firstBad = el;
      });
      var consent = form.elements.consent;
      setError(consent, consent.checked ? "" : "Please tick the box so we can contact you.");
      if (!consent.checked && !firstBad) firstBad = consent;
      if (firstBad) { setStatus(""); firstBad.focus(); return; }

      // Spam protection: honeypot + minimum time on page.
      if (form.elements.company_website.value || Date.now() - loadedAt < 2500) { setStatus("Thank you. We will be in touch.", true); return; }

      if (!S.leadEndpoint) {
        // No backend configured: nothing is sent anywhere.
        setStatus("Online enquiries are not available yet. Please contact us by WhatsApp, phone or email instead.");
        return;
      }
      if (!/^https:\/\//.test(S.leadEndpoint)) { setStatus("Sorry, the enquiry form is unavailable. Please contact us directly."); return; }
      var btn = $("button[type=submit]", form); btn.disabled = true; setStatus("Sending…");
      data.consent = true; data.page = location.pathname;
      fetch(S.leadEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); })
        .then(function () {
          form.reset(); setStatus("Thank you. We have received your enquiry and will contact you.", true);
          track("form_complete", { form: "lead_enquiry", insurance_type: data.insuranceType });
        })
        .catch(function () { setStatus("Sorry, your enquiry could not be sent. Please try again or contact us by WhatsApp or phone."); })
        .then(function () { btn.disabled = false; });
    });
  });
})();
