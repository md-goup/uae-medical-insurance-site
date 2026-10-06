import { icon } from "../utils/icons.mjs";

const DOCS = [
  ["passport", "Passport", "Clear copy of passport."],
  ["visa", "Residence Visa", "Valid residence visa copy."],
  ["id", "Emirates ID", "Clear Emirates ID copy."],
];

export function DocumentChecklist({ alt = false } = {}) {
  return `<section class="section${alt ? " alt" : ""}" id="documents">
  <div class="wrap">
    <h2>Keep these documents ready</h2>
    <div class="grid grid-3">${DOCS.map(([i, t, d]) =>
      `<div class="card doc-card"><span class="icon-badge">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}</div>
    <p class="note">Please upload clear and readable documents when completing your application. Make sure the entire document is visible and not cropped. Documents are uploaded in the authorized Orient application portal — not on this website.</p>
  </div>
</section>`;
}
