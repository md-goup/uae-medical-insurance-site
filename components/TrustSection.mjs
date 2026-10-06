import { icon } from "../utils/icons.mjs";

const ITEMS = [
  ["online", "Simple online application", "Complete the application process online."],
  ["doc", "Clear document requirements", "Know what documents to prepare before starting."],
  ["mail", "Digital policy documents", "Receive applicable documents electronically according to the provider process."],
  ["network", "Healthcare network", "Check the applicable Nextcare network for your policy."],
];

export function TrustSection({ alt = false } = {}) {
  return `<section class="section${alt ? " alt" : ""}">
  <div class="wrap">
    <h2 class="sr-only">Why apply here</h2>
    <div class="grid grid-4 trust">${ITEMS.map(([i, t, d]) =>
      `<div class="trust-item"><span class="icon-badge ok">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}</div>
  </div>
</section>`;
}
