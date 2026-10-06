import { esc } from "../utils/html.mjs";
import { config, isSet } from "../config/site.config.mjs";
import { checkerRules, plans } from "../data/plans.mjs";
import { Header } from "./Header.mjs";
import { Footer } from "./Footer.mjs";
import { StickyMobileCTA } from "./StickyMobileCTA.mjs";

// Only non-secret, browser-needed values are exposed to the page.
const clientConfig = () => ({
  base: (config.BASE_PATH || "").replace(/\/$/, ""),
  applyUrl: config.ORIENT_APPLICATION_URL,
  ga4: isSet(config.GA4_MEASUREMENT_ID) ? config.GA4_MEASUREMENT_ID : "",
  adsId: isSet(config.GOOGLE_ADS_ID) ? config.GOOGLE_ADS_ID : "",
  adsLabel: isSet(config.GOOGLE_ADS_CONVERSION_LABEL) ? config.GOOGLE_ADS_CONVERSION_LABEL : "",
  leadEndpoint: isSet(config.LEAD_FORM_ENDPOINT) ? config.LEAD_FORM_ENDPOINT : "",
  rules: checkerRules,
  plans: plans.map(({ id, name, short, href }) => ({ id, name, short, href })),
});

export function Layout({ path, title, description, body, jsonLd = [], noindex = false }) {
  const canonical = isSet(config.SITE_URL) ? `${config.SITE_URL}${config.BASE_PATH || ""}${path}` : "";
  const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : ""}
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ""}
<meta property="og:site_name" content="${esc(config.SITE_NAME)}">
<meta property="og:locale" content="en_AE">
<meta name="theme-color" content="#0f2a43">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/main.css">
${jsonLd.map((o) => `<script type="application/ld+json">${json(o)}</script>`).join("\n")}
<script>window.SITE=${json(clientConfig())};window.dataLayer=window.dataLayer||[];</script>
<script src="/assets/app.js" defer></script>
</head>
<body>
${Header(path)}
<main id="main">
${body}
</main>
${Footer()}
${StickyMobileCTA()}
</body>
</html>`;
}
