// ============================================================
//  PREMIUM TABLE DATA
//  Leave `rows` empty until you have a VERIFIED rate chart from
//  the provider. While empty, the site shows the fallback text.
//
//  Example row (do not publish unverified figures):
//  { product: "E-Med", applicantType: "Employee", eligibility: "…",
//    premium: "AED …", taxesFees: "…", notes: "…" }
// ============================================================
export const premiums = {
  lastVerified: "", // e.g. "October 2026" — shown under the table
  rows: [],
};
export const PREMIUM_FALLBACK =
  "Premium depends on the applicable plan and customer eligibility. Check the current rate before applying.";
