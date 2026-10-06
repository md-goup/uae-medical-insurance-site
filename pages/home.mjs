import { Hero } from "../components/Hero.mjs";
import { PlanGrid } from "../components/PlanCard.mjs";
import { EligibilityChecker } from "../components/EligibilityChecker.mjs";
import { DocumentChecklist } from "../components/DocumentChecklist.mjs";
import { ProcessSteps } from "../components/ProcessSteps.mjs";
import { NetworkSection } from "../components/NetworkSection.mjs";
import { FAQAccordion, faqJsonLd } from "../components/FAQAccordion.mjs";
import { ContactSection } from "../components/ContactSection.mjs";
import { TrustSection } from "../components/TrustSection.mjs";
import { PremiumTable } from "../components/PremiumTable.mjs";
import { LocationSection } from "../components/LocationSection.mjs";
import { LeadForm } from "../components/LeadForm.mjs";
import { ApplyCTA, FinalCTA } from "../components/FinalCTA.mjs";
import { plans } from "../data/plans.mjs";
import { faqs } from "../data/faq.mjs";

export const home = {
  path: "/",
  title: "Medical Insurance UAE | Apply Online",
  description:
    "Medical insurance in the UAE made simple. Explore options for employees, dependents, investors and Northern Emirates visa holders, check your plan and apply online.",
  jsonLd: [faqJsonLd(faqs)],
  body: () => [
    Hero({
      h1: "Medical Insurance in the UAE Made Simple",
      lead: "Explore eligible medical insurance options for employees, dependents, investors and Northern Emirates visa holders. Check your plan and apply online.",
    }),
    PlanGrid(plans),
    EligibilityChecker(),
    ProcessSteps(),
    DocumentChecklist({ alt: true }),
    PlanGrid(plans, { title: "Plan information", detailed: true, id: "plan-details" }),
    PremiumTable({ alt: true }),
    ApplyCTA(),
    NetworkSection(),
    TrustSection({ alt: true }),
    FAQAccordion(faqs),
    LocationSection({ alt: true }),
    ContactSection(),
    LeadForm({ alt: true }),
    FinalCTA(),
  ].join("\n"),
};
