import { esc } from "../utils/html.mjs";
import { config } from "../config/site.config.mjs";
import { FAQAccordion, faqJsonLd } from "../components/FAQAccordion.mjs";
import { ContactSection } from "../components/ContactSection.mjs";
import { LeadForm } from "../components/LeadForm.mjs";
import { FinalCTA } from "../components/FinalCTA.mjs";
import { CTAButton } from "../components/CTAButton.mjs";
import { faqs } from "../data/faq.mjs";

const pageHead = (h1, lead = "") => `<section class="page-head"><div class="wrap narrow"><h1>${esc(h1)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div></section>`;
const legal = (h1, sections) => `${pageHead(h1)}
<section class="section"><div class="wrap narrow prose">${sections.map(([h, ...ps]) =>
  `${h ? `<h2>${esc(h)}</h2>` : ""}${ps.map((p) => Array.isArray(p) ? `<ul>${p.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : `<p>${esc(p)}</p>`).join("")}`).join("")}
</div></section>`;

const B = config.BUSINESS_NAME, P = config.INSURANCE_PROVIDER;
const cta = FinalCTA({ checkerHref: "/#checker" });

export const infoRoutes = [
  {
    path: "/faq/",
    title: "Medical Insurance FAQ | UAE",
    description: "Answers to common questions about applying for medical insurance in the UAE: eligibility, documents, payment, policy documents and the healthcare network.",
    jsonLd: [faqJsonLd(faqs)],
    body: () => pageHead("Medical Insurance FAQ", "Common questions about eligibility, documents, payment and using your cover.")
      + FAQAccordion(faqs, { title: "", showAllLink: false }) + ContactSection({ alt: true }) + cta,
  },
  {
    path: "/contact/",
    title: "Contact Us | Medical Insurance UAE",
    description: "Get help choosing a UAE medical insurance plan. Contact us by WhatsApp, phone or email, or send a short enquiry.",
    body: () => pageHead("Contact", "Questions about which medical insurance plan may suit you? We are happy to help.")
      + ContactSection() + LeadForm({ alt: true }) + cta,
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | Medical Insurance UAE",
    description: "How this website handles personal information, enquiries and analytics.",
    body: () => legal("Privacy Policy", [
      ["", `This website is operated by ${B} ("we", "us"). This policy explains what information we handle when you use this website.`],
      ["Information we collect",
        ["Enquiry form: your name, mobile number, email address, visa emirate and the insurance type you are interested in, together with your consent to be contacted.",
         "Messages you choose to send us by WhatsApp, phone or email.",
         "Usage information such as pages visited and buttons clicked, collected through analytics and advertising tools where these are enabled."]],
      ["Information we do not collect on this website",
        "We do not ask you to upload passports, residence visas, Emirates IDs or medical documents to this website, and we do not take payments here. Documents and payment are provided by you directly in the insurance provider's online application portal.",
        "Answers you enter in the plan checker are processed in your browser to show a result and are not sent to us."],
      ["How we use information", ["To respond to your enquiry and help you identify a suitable plan category.", "To operate, measure and improve this website and our advertising.", "To meet legal or regulatory obligations."]],
      ["Sharing", `We share information only where needed to handle your enquiry (for example with ${P} or its authorised partners when you ask us to assist with an application), with service providers who support this website, or where required by law. We do not sell personal information.`],
      ["Third-party websites", `Links to the ${P} application portal, the healthcare network directory, WhatsApp and other third-party services take you to websites that we do not control. Their own privacy policies apply to information you provide there.`],
      ["Cookies and analytics", "Where enabled, Google Analytics and Google Ads use cookies or similar technologies to measure visits and advertising performance. You can control cookies through your browser settings."],
      ["Retention and security", "We keep enquiry information only for as long as needed for the purposes above and take reasonable steps to protect it."],
      ["Your choices", "You may ask us to access, correct or delete your enquiry information, or to stop contacting you, using the details on our Contact page. We handle personal data in line with applicable UAE data protection law."],
      ["Changes", "We may update this policy from time to time. The current version is always published on this page."],
    ]),
  },
  {
    path: "/terms/",
    title: "Terms & Conditions | Medical Insurance UAE",
    description: "Terms and conditions for using this medical insurance information website.",
    body: () => legal("Terms & Conditions", [
      ["", `These terms apply to your use of this website, operated by ${B}. By using the website you agree to them.`],
      ["Purpose of this website", `This website provides general information about medical insurance options and directs you to the applicable ${P} online application process. It is not the official ${P} website, and it does not issue insurance policies.`],
      ["No advice or guarantee", "Content on this website is general information, not insurance, legal, medical or financial advice. The plan checker gives an indication only. Nothing on this website guarantees eligibility, approval, premium, coverage or claim settlement."],
      ["Applications and policies", `Applications, document uploads and payments are completed in the insurance provider's portal and are subject to its terms. Any insurance contract is between the policyholder and the insurer, and is governed by the policy terms and conditions.`],
      ["Your responsibilities", ["Provide accurate and complete information in any enquiry or application.", "Use the customer's own email address and mobile number for policy generation.", "Read the policy wording, benefits, exclusions and network details before purchasing."]],
      ["Third-party links", "We are not responsible for the content, availability or practices of third-party websites linked from this website."],
      ["Liability", "To the extent permitted by law, we are not liable for loss arising from reliance on general information on this website or from the unavailability of the website or third-party services."],
      ["Governing law", "These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai."],
      ["Changes", "We may update these terms from time to time. The current version is always published on this page."],
    ]),
  },
  {
    path: "/insurance-disclaimer/",
    title: "Insurance Disclaimer | Medical Insurance UAE",
    description: "Important information about eligibility, premium, coverage, network availability and policy issuance.",
    body: () => legal("Insurance Disclaimer", [
      ["", "This website provides information about available medical insurance options and facilitates access to the applicable online application process. Insurance eligibility, premium, benefits, exclusions, coverage, network availability and policy issuance are subject to the applicable insurance plan, provider requirements, underwriting and policy terms and conditions.",
        "Information displayed on this website should not be interpreted as a guarantee of eligibility, approval, coverage or claim settlement."],
      ["Plan checker", "Based on the information provided, the plan checker shows the plan that may be applicable. Final eligibility is subject to provider requirements and policy terms."],
      ["Healthcare network", "Network availability depends on the applicable policy and network. Check the applicable network before visiting a healthcare provider."],
      ["Relationship with the insurer", `${config.PROVIDER_RELATIONSHIP_TEXT} for plans issued by ${P}. This is not the official ${P} website.`],
    ]) + `<div class="wrap narrow center pad-b">${CTAButton({ kind: "link", href: "/contact/", label: "Contact us", variant: "secondary" })}</div>`,
  },
  {
    path: "/404.html",
    title: "Page not found | Medical Insurance UAE",
    description: "The page you are looking for could not be found.",
    noindex: true,
    body: () => pageHead("Page not found", "The page you are looking for may have moved.")
      + `<div class="wrap narrow pad-b">${CTAButton({ kind: "link", href: "/", label: "Go to homepage" })}</div>`,
  },
];
