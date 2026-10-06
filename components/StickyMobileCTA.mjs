import { CTAButton } from "./CTAButton.mjs";

export function StickyMobileCTA() {
  return `<div class="sticky-cta" role="region" aria-label="Quick actions">
  ${CTAButton({ kind: "whatsapp", label: "WhatsApp", variant: "whatsapp", location: "sticky" })}
  ${CTAButton({ kind: "apply", label: "Apply Online", location: "sticky" })}
</div>`;
}
