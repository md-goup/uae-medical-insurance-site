import { esc } from "../utils/html.mjs";
import { config } from "../config/site.config.mjs";
import { whatsappUrl, phoneUrl, emailUrl, isExternal } from "../utils/links.mjs";

const col = (title, links) => `<div><h2>${title}</h2><ul>${links.map(([l, h, track]) =>
  `<li><a href="${esc(h)}"${track ? ` data-track="${track}"` : ""}${isExternal(h) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${l}</a></li>`).join("")}</ul></div>`;

export function Footer() {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      ${col("Medical Insurance", [["UAE", "/medical-insurance-uae/"], ["Dubai", "/medical-insurance-dubai/"], ["Dubai Visa", "/dubai-visa-medical-insurance/"], ["Employee", "/employee-medical-insurance/"], ["Dependents", "/dependent-medical-insurance/"], ["Investors", "/investor-medical-insurance/"], ["Northern Emirates", "/northern-emirates-medical-insurance/"]])}
      ${col("Information", [["How It Works", "/#how-it-works"], ["Documents", "/#documents"], ["FAQ", "/faq/"], ["Network", "/#network"]])}
      ${col("Legal", [["Privacy Policy", "/privacy-policy/"], ["Terms &amp; Conditions", "/terms/"], ["Insurance Disclaimer", "/insurance-disclaimer/"]])}
      ${col("Contact", [["WhatsApp", whatsappUrl(), "whatsapp_click"], ["Phone", phoneUrl(), "phone_click"], ["Email", emailUrl(), "email_click"]])}
    </div>
    <p class="footer-disclaimer">Insurance subject to eligibility, underwriting, policy terms and applicable provider requirements.</p>
    <p class="footer-small">${esc(config.PROVIDER_RELATIONSHIP_TEXT)} for plans issued by ${esc(config.INSURANCE_PROVIDER)}. This is not the official ${esc(config.INSURANCE_PROVIDER)} website. Operated by ${esc(config.BUSINESS_NAME)}.</p>
  </div>
</footer>`;
}
