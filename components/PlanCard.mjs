import { esc } from "../utils/html.mjs";
import { icon } from "../utils/icons.mjs";
import { ELIGIBILITY_NOTE } from "../data/plans.mjs";

export function PlanCard(plan, { detailed = false } = {}) {
  return `<article class="card plan-card">
  <span class="icon-badge">${icon(plan.icon)}</span>
  <h3>${esc(plan.name)}</h3>
  <p>${esc(detailed ? plan.detail : plan.short)}</p>
  <a class="btn btn-ghost" href="${plan.href}">View ${esc(plan.name)}</a>
</article>`;
}

export function PlanGrid(plans, { title = "What type of medical insurance do you need?", detailed = false, id = "plans", alt = false } = {}) {
  return `<section class="section${alt ? " alt" : ""}" id="${id}">
  <div class="wrap">
    <h2>${esc(title)}</h2>
    <div class="grid grid-${Math.min(plans.length, 4)}">${plans.map((p) => PlanCard(p, { detailed })).join("")}</div>
    <p class="note">${esc(ELIGIBILITY_NOTE)}</p>
  </div>
</section>`;
}
