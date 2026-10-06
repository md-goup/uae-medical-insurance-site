import { esc } from "../utils/html.mjs";
import { checkerRules, plans } from "../data/plans.mjs";

const opts = (list) => `<option value="">Select…</option>` + list.map((o) => `<option>${esc(o)}</option>`).join("");

// No passport number, Emirates ID number or medical information is requested.
// Submits only when LEAD_FORM_ENDPOINT is configured (see public/assets/app.js).
export function LeadForm({ alt = false } = {}) {
  const f = (id, label, input) =>
    `<div class="field"><label for="lead-${id}">${label}</label>${input}<p class="field-error" id="lead-${id}-err"></p></div>`;
  return `<section class="section${alt ? " alt" : ""}" id="enquiry">
  <div class="wrap narrow">
    <h2>Get help choosing your plan</h2>
    <p class="section-lead">Leave your details and we will contact you about your insurance enquiry.</p>
    <form class="card lead-form" data-lead-form novalidate>
      ${f("name", "Name", `<input id="lead-name" name="name" type="text" autocomplete="name" required aria-describedby="lead-name-err">`)}
      ${f("mobile", "Mobile Number", `<input id="lead-mobile" name="mobile" type="tel" inputmode="tel" autocomplete="tel" placeholder="+971 5X XXX XXXX" required aria-describedby="lead-mobile-err">`)}
      ${f("email", "Email", `<input id="lead-email" name="email" type="email" autocomplete="email" required aria-describedby="lead-email-err">`)}
      ${f("emirate", "Visa Emirate", `<select id="lead-emirate" name="visaEmirate" required aria-describedby="lead-emirate-err">${opts(checkerRules.emirates)}</select>`)}
      ${f("type", "Insurance Type", `<select id="lead-type" name="insuranceType" required aria-describedby="lead-type-err">${opts([...plans.map((p) => p.name), "Not sure"])}</select>`)}
      <div class="hp" aria-hidden="true"><label>Leave this field empty<input type="text" name="company_website" tabindex="-1" autocomplete="off"></label></div>
      <div class="field">
        <label class="check"><input id="lead-consent" name="consent" type="checkbox" required aria-describedby="lead-consent-err"><span>I agree to be contacted regarding my insurance enquiry.</span></label>
        <p class="field-error" id="lead-consent-err"></p>
      </div>
      <button class="btn btn-primary btn-block" type="submit">Get Help</button>
      <p class="form-status" data-status role="status" aria-live="polite"></p>
      <p class="note">See our <a href="/privacy-policy/">Privacy Policy</a>. Please do not send passport, Emirates ID or medical details through this form.</p>
    </form>
  </div>
</section>`;
}
