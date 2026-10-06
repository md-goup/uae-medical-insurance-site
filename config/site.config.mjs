// ============================================================
//  CENTRAL SITE CONFIGURATION — the ONLY place to change URLs,
//  contact details and tracking IDs. Values in [BRACKETS] are
//  placeholders: the site still works, and `npm run build`
//  lists everything that is still unset.
// ============================================================
export const config = {
  SITE_NAME: "Medical Insurance UAE",
  // Full public address, no trailing slash, e.g. "https://www.example.ae"
  SITE_URL: "[ADD SITE URL]",
  // Folder the site is served from. GitHub Pages project address
  // (md-goup.github.io/uae-medical-insurance-site/) needs the repo name here.
  // Set to "" when the site moves to its own domain.
  BASE_PATH: "/uae-medical-insurance-site",

  // Business operating this website (shown in footer + legal pages)
  BUSINESS_NAME: "MD PRETTY LIFE HOME CLEANING SERVICES L.L.C",
  // Reference / account number with the provider. Kept for your records;
  // it is NOT displayed on the website.
  REFERENCE_NUMBER: "1753290",

  INSURANCE_PROVIDER: "Orient Insurance",
  // Every "Apply Online" / "Continue Application" button uses this one value.
  ORIENT_APPLICATION_URL:
    "https://orientonline.ae/PORTALS/GuestLogin.aspx?MasterId=feQnJ5WqcI0ZLouKOOQc0rwlcmXUr6rHIhiwGbtyGkNuovyENXe3ggAdKphokvqP",

  // Contact — international format, e.g. "+9715XXXXXXXX"
  WHATSAPP_NUMBER: "[ADD NUMBER]",
  WHATSAPP_MESSAGE:
    "Hello, I would like to know which UAE medical insurance plan may be suitable for me.",
  PHONE_NUMBER: "[ADD NUMBER]",
  EMAIL_ADDRESS: "[ADD EMAIL]",

  // Tracking — leave as placeholders until you have real IDs
  GA4_MEASUREMENT_ID: "[ADD GA4 ID]",            // e.g. G-XXXXXXXXXX
  GOOGLE_ADS_ID: "[ADD GOOGLE ADS ID]",          // e.g. AW-XXXXXXXXXX
  GOOGLE_ADS_CONVERSION_LABEL: "[ADD CONVERSION LABEL]",

  // Official Nextcare network / provider search page (do not guess)
  NEXTCARE_NETWORK_URL: "[ADD NEXTCARE URL]",

  // HTTPS endpoint (CRM / form backend) that accepts a JSON POST.
  // While unset, the enquiry form validates but does not send anything.
  LEAD_FORM_ENDPOINT: "[ADD ENDPOINT]",

  // Only if formally authorised: path to the approved provider logo
  // (place the file in /public/assets) and approved wording.
  PROVIDER_LOGO_PATH: "",
  PROVIDER_RELATIONSHIP_TEXT: "Online medical insurance application assistance",
};

export const isSet = (v) =>
  typeof v === "string" && v.trim() !== "" && !/^\[.*\]$/.test(v.trim());
