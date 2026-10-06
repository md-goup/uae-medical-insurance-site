import { esc } from "../utils/html.mjs";
import { applyUrl, whatsappUrl, phoneUrl, emailUrl, isExternal } from "../utils/links.mjs";

// kind: apply | check | whatsapp | phone | email | link
// variant: primary | secondary | ghost | whatsapp
export function CTAButton({ kind = "link", label, href, variant = "primary", checkerHref = "/#checker", block = false, location = "" }) {
  const map = {
    apply: { href: applyUrl(), track: "apply_online_click" },
    check: { href: checkerHref, track: "check_plan_click" },
    whatsapp: { href: whatsappUrl(), track: "whatsapp_click" },
    phone: { href: phoneUrl(), track: "phone_click" },
    email: { href: emailUrl(), track: "email_click" },
    link: { href, track: "" },
  };
  const m = map[kind];
  const ext = isExternal(m.href);
  const attrs = [
    `class="btn btn-${variant}${block ? " btn-block" : ""}"`,
    `href="${esc(m.href)}"`,
    m.track ? `data-track="${m.track}"` : "",
    location ? `data-location="${esc(location)}"` : "",
    ext ? `target="_blank" rel="noopener noreferrer"` : "",
  ].filter(Boolean).join(" ");
  return `<a ${attrs}>${esc(label)}${ext ? '<span class="sr-only"> (opens in a new tab)</span>' : ""}</a>`;
}
