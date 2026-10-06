import { NORTHERN_EMIRATES } from "../data/plans.mjs";

const slug = (n) => "/medical-insurance-" + n.toLowerCase().replace(/ /g, "-") + "/";

export function LocationSection({ alt = false, current = "" } = {}) {
  const all = ["Dubai", ...NORTHERN_EMIRATES].filter((n) => n !== current);
  return `<section class="section${alt ? " alt" : ""}" id="locations">
  <div class="wrap">
    <h2>Medical insurance by emirate</h2>
    <p class="section-lead">Your plan category generally follows the emirate that issued your residence visa.</p>
    <ul class="chip-list">${all.map((n) => `<li><a class="chip" href="${slug(n)}">${n}</a></li>`).join("")}</ul>
  </div>
</section>`;
}
