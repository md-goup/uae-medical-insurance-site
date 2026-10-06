import { CTAButton } from "./CTAButton.mjs";

export function ApplyCTA() {
  return `<section class="section cta-band" id="apply">
  <div class="wrap narrow center">
    <h2>Ready to apply?</h2>
    <p>Complete your medical insurance application online.</p>
    <div class="btn-row center">${CTAButton({ kind: "apply", label: "Apply Online", variant: "light", location: "apply_section" })}</div>
    <p class="note">You will be redirected to the applicable Orient Insurance online application process to complete your application.</p>
  </div>
</section>`;
}

export function FinalCTA({ checkerHref = "#checker" } = {}) {
  return `<section class="section cta-band">
  <div class="wrap narrow center">
    <h2>Ready to explore your medical insurance options?</h2>
    <p>Check your plan and continue with the online application.</p>
    <div class="btn-row center">
      ${CTAButton({ kind: "check", label: "Check Your Plan", variant: "light", checkerHref, location: "final_cta" })}
      ${CTAButton({ kind: "apply", label: "Apply Online", variant: "outline-light", location: "final_cta" })}
    </div>
    <p class="note">Eligibility and policy issuance are subject to applicable provider requirements and policy terms.</p>
  </div>
</section>`;
}
