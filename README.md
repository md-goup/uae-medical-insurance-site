# UAE Medical Insurance — Lead-Generation Website

Flow: **Google Search → Landing page → Check plan → Apply Online → Orient issuance portal**

A fast static website with **zero dependencies**. Node.js 18+ builds plain HTML/CSS/JS into `dist/`, which can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, cPanel, S3…).

## Commands
    npm run build     # generate ./dist  (also checks links, anchors and one-H1-per-page)
    npm start         # build + preview at http://localhost:4173

Upload the contents of `dist/` to your host. No server code is required.

## Before going live — edit ONE file: `config/site.config.mjs`
| Setting | What to do |
|---|---|
| `ORIENT_APPLICATION_URL` | Already set to the current issuance link. Replace here if Orient changes it — every Apply button updates. |
| `SITE_URL` | Your domain. Enables canonical tags and `sitemap.xml`. |
| `WHATSAPP_NUMBER`, `PHONE_NUMBER`, `EMAIL_ADDRESS` | Until set, these buttons lead to the Contact page and cards show "Details coming soon". |
| `NEXTCARE_NETWORK_URL` | Official network search page. Until set, "Check Network" leads to Contact. |
| `LEAD_FORM_ENDPOINT` | HTTPS endpoint accepting a JSON POST (CRM, Formspree, Make/Zapier webhook…). Until set, the form validates but sends nothing. |
| `GA4_MEASUREMENT_ID`, `GOOGLE_ADS_ID`, `GOOGLE_ADS_CONVERSION_LABEL` | Tracking scripts load only when real IDs are present. |
| `PROVIDER_LOGO_PATH`, `PROVIDER_RELATIONSHIP_TEXT` | Only with formal authorisation to use Orient branding / approved wording. |

`npm run build` prints every setting still using a placeholder.

## Where things live
    config/      site.config.mjs — all URLs, contacts, tracking IDs
    data/        plans.mjs (products + checker rules), pages.mjs (landing page copy),
                 faq.mjs, premiums.mjs (rate table — empty until verified rates are supplied)
    components/  Header, Hero, CTAButton, PlanCard, EligibilityChecker, DocumentChecklist,
                 ProcessSteps, NetworkSection, FAQAccordion, ContactSection, TrustSection,
                 LocationSection, PremiumTable, LeadForm, DisclaimerBox, FinalCTA, Footer,
                 StickyMobileCTA, Layout
    pages/       home, landing template, FAQ/contact/legal routes
    styles/      main.css (design tokens at the top)
    public/      assets/app.js (menu, checker, form, analytics), favicon
    docs/        GOOGLE_ADS.md (tracking, KPI and negative keywords)

## Common updates
- **Add verified premiums:** add rows to `data/premiums.mjs`; the table appears automatically on the relevant pages.
- **Change checker logic / add a salary limit:** `checkerRules` in `data/plans.mjs`. No thresholds are invented; `eMedSalaryLimitAED` is `null` until you have the verified figure.
- **Add a landing page:** add an entry to `data/pages.mjs`.

## Privacy & security by design
- No document uploads, no payment data, no passport/Emirates ID numbers are collected. Those happen in the Orient portal, opened in a new tab (never in an iframe).
- Plan checker answers stay in the browser; analytics records only the suggested plan, visa emirate and applicant type — never salary or age.
- Enquiry form: honeypot + time check, HTTPS-only endpoint. Add server-side spam filtering/rate-limiting at your endpoint as well.

## Before launch checklist
- Have the Privacy Policy, Terms and Disclaimer reviewed by a qualified adviser.
- Confirm with Orient that your arrangement permits online advertising of these plans, and the wording/branding you may use.
- Confirm plan descriptions and the checker mapping (Dubai → E/D/I-Med by applicant; Northern Emirates → NE-Med) against current Orient criteria.
- If you enable analytics/ads cookies, consider whether you need a consent notice.
