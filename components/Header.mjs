import { esc } from "../utils/html.mjs";
import { config } from "../config/site.config.mjs";
import { CTAButton } from "./CTAButton.mjs";

export const NAV = [
  ["Home", "/"],
  ["Medical Insurance", "/medical-insurance-uae/"],
  ["Plans", "/#plans"],
  ["How It Works", "/#how-it-works"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact/"],
];

export function Header(path) {
  const links = NAV.map(([l, h]) =>
    `<li><a href="${h}"${h === path ? ' aria-current="page"' : ""}>${esc(l)}</a></li>`).join("");
  const logo = config.PROVIDER_LOGO_PATH
    ? `<img src="${esc(config.PROVIDER_LOGO_PATH)}" alt="${esc(config.INSURANCE_PROVIDER)}" height="28" class="provider-logo">` : "";
  return `<a class="skip" href="#main">Skip to main content</a>
<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="/" aria-label="${esc(config.SITE_NAME)} — home">
      <span class="brand-mark" aria-hidden="true">+</span><span>${esc(config.SITE_NAME)}</span>${logo}
    </a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="sr-only">Menu</span><span class="menu-bars" aria-hidden="true"></span>
    </button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${links}</ul>
      ${CTAButton({ kind: "apply", label: "Apply Online", location: "header" })}
    </nav>
  </div>
</header>`;
}
