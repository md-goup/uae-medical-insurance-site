import { esc } from "../utils/html.mjs";
import { icon } from "../utils/icons.mjs";
import { config, isSet } from "../config/site.config.mjs";
import { whatsappUrl, phoneUrl, emailUrl } from "../utils/links.mjs";

export function ContactSection({ alt = false, heading = "h2" } = {}) {
  const items = [
    ["whatsapp", "WhatsApp", "Chat with us", config.WHATSAPP_NUMBER, whatsappUrl(), "whatsapp_click", true],
    ["phone", "Phone", "Call us", config.PHONE_NUMBER, phoneUrl(), "phone_click", false],
    ["mail", "Email", "Send an enquiry", config.EMAIL_ADDRESS, emailUrl(), "email_click", false],
  ];
  return `<section class="section${alt ? " alt" : ""}" id="contact-options">
  <div class="wrap">
    <${heading}>Need help?</${heading}>
    <div class="grid grid-3">${items.map(([i, t, action, value, href, track, newTab]) => {
      const ok = isSet(value);
      const inner = `<span class="icon-badge">${icon(i)}</span><h3>${t}</h3><p>${action}</p><p class="contact-value">${ok ? esc(value) : "Details coming soon"}</p>`;
      return ok
        ? `<a class="card contact-card" href="${esc(href)}" data-track="${track}"${newTab ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`
        : `<div class="card contact-card is-unset">${inner}</div>`;
    }).join("")}</div>
  </div>
</section>`;
}
