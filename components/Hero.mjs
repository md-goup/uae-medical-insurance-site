import { esc } from "../utils/html.mjs";
import { CTAButton } from "./CTAButton.mjs";

export function Hero({ h1, lead, checkerHref = "#checker", eyebrow = "" }) {
  return `<section class="hero">
  <div class="wrap">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <h1>${esc(h1)}</h1>
    <p class="lead">${esc(lead)}</p>
    <div class="btn-row">
      ${CTAButton({ kind: "check", label: "Check Your Plan", checkerHref, location: "hero" })}
      ${CTAButton({ kind: "apply", label: "Apply Online", variant: "secondary", location: "hero" })}
    </div>
    <p class="trust-line">Online Application <span aria-hidden="true">•</span> Secure Payment <span aria-hidden="true">•</span> Digital Policy Documents</p>
  </div>
</section>`;
}
