// ============================================================
//  INSURANCE PRODUCT DATA — single source for plan wording.
//  Nothing here states premiums, coverage limits or eligibility
//  thresholds: add those only from verified provider material.
// ============================================================
export const ELIGIBILITY_NOTE =
  "Eligibility is subject to the applicable insurance plan and provider requirements.";

export const NORTHERN_EMIRATES = ["Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

export const plans = [
  {
    id: "e-med",
    name: "E-Med",
    icon: "employee",
    href: "/employee-medical-insurance/",
    short: "For eligible employees / domestic workers",
    detail:
      "For eligible employees and domestic workers according to the applicable Orient plan criteria. Where applicable, salary eligibility may apply.",
  },
  {
    id: "d-med",
    name: "D-Med",
    icon: "family",
    href: "/dependent-medical-insurance/",
    short: "For eligible dependents and parents",
    detail: "For eligible non-working dependents and parents according to applicable plan terms.",
  },
  {
    id: "i-med",
    name: "I-Med",
    icon: "investor",
    href: "/investor-medical-insurance/",
    short: "For eligible investors, partners and qualifying applicants",
    detail: "For eligible investors, partners and qualifying applicants according to applicable plan terms.",
  },
  {
    id: "ne-med",
    name: "NE-Med",
    icon: "pin",
    href: "/northern-emirates-medical-insurance/",
    short: "For eligible Northern Emirates visa holders",
    detail:
      "For eligible Northern Emirates visa holders — Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  },
];

export const planById = (id) => plans.find((p) => p.id === id);

// ---- Eligibility checker rules (used in the browser) --------------------
// The checker only suggests a likely category. Adjust the mapping here if
// the provider's criteria change.
export const checkerRules = {
  emirates: ["Dubai", ...NORTHERN_EMIRATES, "Other"],
  applicants: ["Employee", "Dependent", "Parent", "Investor / Partner", "Other"],
  northernEmirates: NORTHERN_EMIRATES,
  // Northern Emirates visas -> this plan
  northernPlan: "ne-med",
  // Dubai visas -> plan by applicant type
  applicantPlan: {
    Employee: "e-med",
    Dependent: "d-med",
    Parent: "d-med",
    "Investor / Partner": "i-med",
  },
  // Applicant types that are asked for monthly salary
  salaryApplicants: ["Employee"],
  // Set ONLY from verified provider criteria (number in AED). While null,
  // the checker simply notes that salary eligibility may apply.
  eMedSalaryLimitAED: null,
};
