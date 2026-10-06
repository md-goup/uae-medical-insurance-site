import { esc } from "../utils/html.mjs";
import { premiums, PREMIUM_FALLBACK } from "../data/premiums.mjs";

const COLS = [["product", "Product"], ["applicantType", "Applicant type"], ["eligibility", "Eligibility"],
  ["premium", "Premium"], ["taxesFees", "Applicable taxes/fees"], ["notes", "Important notes"]];

export function PremiumTable({ products = null, alt = false } = {}) {
  const rows = premiums.rows.filter((r) => !products || products.includes(r.product));
  const body = rows.length
    ? `<div class="table-scroll" tabindex="0" role="region" aria-label="Premium table"><table>
        <thead><tr>${COLS.map(([, l]) => `<th scope="col">${l}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((r) => `<tr>${COLS.map(([k]) => `<td>${esc(r[k] ?? "—")}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>${premiums.lastVerified ? `<p class="note">Rates last verified: ${esc(premiums.lastVerified)}.</p>` : ""}`
    : `<p class="card premium-fallback">${esc(PREMIUM_FALLBACK)}</p>`;
  return `<section class="section${alt ? " alt" : ""}" id="premium">
  <div class="wrap narrow"><h2>Premium</h2>${body}</div>
</section>`;
}
