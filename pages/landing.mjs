import { esc } from "../utils/html.mjs";
import { Hero } from "../components/Hero.mjs";
import { PlanGrid } from "../components/PlanCard.mjs";
import { EligibilityChecker } from "../components/EligibilityChecker.mjs";
import { DocumentChecklist } from "../components/DocumentChecklist.mjs";
import { ProcessSteps } from "../components/ProcessSteps.mjs";
import { NetworkSection } from "../components/NetworkSection.mjs";
import { FAQAccordion, faqJsonLd } from "../components/FAQAccordion.mjs";
import { ContactSection } from "../components/ContactSection.mjs";
import { PremiumTable } from "../components/PremiumTable.mjs";
import { LocationSection } from "../components/LocationSection.mjs";
import { FinalCTA } from "../components/FinalCTA.mjs";
import { planById } from "../data/plans.mjs";
import { faqByIds } from "../data/faq.mjs";
import { landingPages } from "../data/pages.mjs";

const prose = (sections) => `<section class="section">
  <div class="wrap narrow prose">${sections.map((s) => `
    <h2>${esc(s.h2)}</h2>
    ${(s.list && !s.p?.length ? [] : s.p || []).slice(0, s.list ? 1 : undefined).map((p) => `<p>${esc(p)}</p>`).join("")}
    ${s.list ? `<ul>${s.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : ""}
    ${s.list ? (s.p || []).slice(1).map((p) => `<p>${esc(p)}</p>`).join("") : ""}
    ${s.links ? `<ul class="chip-list">${s.links.map(([l, h]) => `<li><a class="chip" href="${h}">${esc(l)}</a></li>`).join("")}</ul>` : ""}`).join("")}
  </div>
</section>`;

export const landingRoutes = landingPages.map((pg) => {
  const pagePlans = pg.plans.map(planById);
  const faq = faqByIds(pg.faq);
  return {
    path: `/${pg.slug}/`,
    title: pg.metaTitle,
    description: pg.metaDescription,
    jsonLd: [faqJsonLd(faq)],
    body: () => [
      Hero({ h1: pg.h1, lead: pg.lead, eyebrow: pg.location ? "Northern Emirates" : "" }),
      prose(pg.sections),
      PlanGrid(pagePlans, {
        title: pagePlans.length > 1 ? "Applicable insurance categories" : "Applicable insurance category",
        detailed: true, alt: true,
      }),
      EligibilityChecker({ alt: false }),
      DocumentChecklist({ alt: true }),
      ProcessSteps(),
      PremiumTable({ alt: true, products: pagePlans.map((p) => p.name) }),
      NetworkSection(),
      FAQAccordion(faq, { alt: true }),
      LocationSection({ current: pg.location || (pg.slug === "medical-insurance-dubai" ? "Dubai" : "") }),
      ContactSection({ alt: true }),
      FinalCTA(),
    ].join("\n"),
  };
});
