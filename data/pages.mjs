// ============================================================
//  LANDING PAGE CONTENT — one entry per SEO / Google Ads page.
//  Every page has its own copy; shared blocks (documents, steps,
//  network, FAQ, CTA) are added by the landing template.
// ============================================================
const VISA_NOTE =
  "Your plan category generally follows the emirate that issued your residence visa, not the emirate where you live or work.";

export const landingPages = [
  {
    slug: "medical-insurance-uae",
    metaTitle: "Medical Insurance UAE | Apply Online",
    metaDescription:
      "Explore medical insurance options in the UAE for employees, dependents, investors and Northern Emirates visa holders. Check your plan and apply online.",
    h1: "Medical Insurance in the UAE",
    lead: "Health insurance options for employees, dependents, investors and Northern Emirates visa holders — with a simple online application.",
    plans: ["e-med", "d-med", "i-med", "ne-med"],
    sections: [
      { h2: "Which UAE medical insurance plan applies to you?",
        p: ["Two things usually decide the plan category: where your residence visa is issued, and who the cover is for — an employee, a dependent, a parent or an investor.",
            VISA_NOTE,
            "Use the plan checker below to see the likely category in under a minute, then continue to the online application."] },
      { h2: "UAE visa medical insurance",
        p: ["Medical insurance is commonly needed when a UAE residence visa is issued or renewed. Requirements differ between emirates and can change, so confirm the current rules with the relevant authority for your visa."] },
    ],
    faq: ["who", "documents", "online", "hospital"],
  },
  {
    slug: "medical-insurance-dubai",
    metaTitle: "Medical Insurance Dubai | Apply Online",
    metaDescription:
      "Medical insurance for Dubai visa holders: options for employees, dependents, parents and investors. Check the likely plan and apply online.",
    h1: "Medical Insurance in Dubai",
    lead: "Health insurance options for Dubai visa holders — employees, domestic workers, dependents, parents and investors.",
    plans: ["e-med", "d-med", "i-med"],
    sections: [
      { h2: "Who may need medical insurance in Dubai",
        p: ["Health insurance is a requirement for Dubai residence visa holders, so most people look for cover when a visa is being issued or renewed — for themselves, a family member they sponsor, or a worker they employ."],
        list: ["Employees and domestic workers on a Dubai visa", "Spouses, children and parents sponsored by a Dubai resident", "Investors and partners holding a Dubai visa"] },
      { h2: "Health insurance Dubai: applicable categories",
        p: ["For Dubai-issued visas the category generally depends on the applicant: E-Med for eligible employees and domestic workers, D-Med for eligible dependents and parents, and I-Med for eligible investors and partners."] },
    ],
    faq: ["who", "documents", "pay", "card"],
  },
  {
    slug: "dubai-visa-medical-insurance",
    metaTitle: "Dubai Visa Medical Insurance | Apply Online",
    metaDescription:
      "Need medical insurance for a Dubai visa? See the likely plan for your visa type, prepare your documents and apply online.",
    h1: "Medical Insurance for Your Dubai Visa",
    lead: "Issuing or renewing a Dubai residence visa? Find the likely plan category, get your documents ready and apply online.",
    plans: ["e-med", "d-med", "i-med"],
    sections: [
      { h2: "Medical insurance for Dubai visa issuance and renewal",
        p: ["Health cover is part of holding a Dubai residence visa. If you are applying for a new visa or renewing one, arranging medical insurance early helps avoid delays later in the process.",
            "This page is for applicants whose visa is issued in Dubai. If your visa is issued in Sharjah, Ajman, Ras Al Khaimah, Fujairah or Umm Al Quwain, see Northern Emirates medical insurance instead."] },
      { h2: "Match your visa type to a plan",
        list: ["Employment or domestic worker visa — E-Med may apply", "Family (dependent or parent) visa — D-Med may apply", "Investor or partner visa — I-Med may apply"],
        p: ["Your visa type usually points to the plan category:", "Policy issuance timing depends on the provider's process and whether an application is referred for review, so allow time before any visa deadline."] },
    ],
    faq: ["documents", "online", "referred", "email"],
  },
  {
    slug: "employee-medical-insurance",
    metaTitle: "Employee Medical Insurance UAE | E-Med",
    metaDescription:
      "E-Med employee medical insurance for eligible employees and domestic workers. Check eligibility criteria, prepare documents and apply online.",
    h1: "Employee Medical Insurance — E-Med",
    lead: "For eligible employees and domestic workers. Check whether E-Med may apply, then complete the application online.",
    plans: ["e-med"],
    sections: [
      { h2: "Who E-Med is for",
        p: ["E-Med is for eligible employees and domestic workers according to the applicable Orient plan criteria. Where applicable, salary eligibility may apply.",
            "It is typically arranged by an employer for a member of staff, or by a household sponsor for a domestic worker."] },
      { h2: "Arranging cover for a worker",
        p: ["If you are applying on behalf of an employee or domestic worker, have their passport, residence visa and Emirates ID copies ready, and enter the insured person's own mobile number and email address where the application asks for customer contact details."] },
    ],
    faq: ["who", "documents", "referred", "card"],
  },
  {
    slug: "dependent-medical-insurance",
    metaTitle: "Dependent Medical Insurance UAE | D-Med",
    metaDescription:
      "D-Med dependent medical insurance for eligible non-working dependents and parents. See what you need and apply online.",
    h1: "Dependent Medical Insurance — D-Med",
    lead: "For eligible non-working dependents and parents. Check whether D-Med may apply and continue online.",
    plans: ["d-med"],
    sections: [
      { h2: "Who D-Med is for",
        p: ["D-Med is for eligible non-working dependents and parents according to applicable plan terms — for example a spouse, child or parent sponsored by a UAE resident."] },
      { h2: "Parent medical insurance",
        p: ["Applications for parents and older applicants may be assessed individually. Some applications are referred to the provider's medical/underwriting team for review before a decision is made.",
            "Prepare a separate set of documents for each family member you are applying for."] },
    ],
    faq: ["who", "documents", "referred", "hospital"],
  },
  {
    slug: "investor-medical-insurance",
    metaTitle: "Investor Medical Insurance UAE | I-Med",
    metaDescription:
      "I-Med investor medical insurance for eligible investors, partners and qualifying applicants. Check your plan and apply online.",
    h1: "Investor Medical Insurance — I-Med",
    lead: "For eligible investors, partners and qualifying applicants. Check whether I-Med may apply and continue online.",
    plans: ["i-med"],
    sections: [
      { h2: "Who I-Med is for",
        p: ["I-Med is for eligible investors, partners and qualifying applicants according to applicable plan terms — typically people whose residence visa is based on a company they own or are a partner in."] },
      { h2: "Cover for your family and staff",
        p: ["An investor's own cover is separate from cover for family members and employees. Dependents and parents may fall under D-Med, and employees under E-Med. Use the plan checker for each person."] },
    ],
    faq: ["who", "documents", "pay", "email"],
  },
  {
    slug: "northern-emirates-medical-insurance",
    metaTitle: "Northern Emirates Medical Insurance | NE-Med",
    metaDescription:
      "NE-Med medical insurance for eligible visa holders in Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Check your plan and apply online.",
    h1: "Northern Emirates Medical Insurance — NE-Med",
    lead: "For eligible visa holders in Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who NE-Med is for",
        p: ["NE-Med is for eligible Northern Emirates visa holders. " + "Eligibility is subject to the applicable insurance plan and provider requirements.",
            "Health insurance has been linked to residence permits for private-sector employees and domestic workers in the Northern Emirates since 2025. Confirm the current requirement for your visa with the relevant authority."] },
      { h2: "Medical insurance by emirate",
        p: ["Choose your visa emirate for local information:"],
        links: [["Sharjah medical insurance", "/medical-insurance-sharjah/"], ["Ajman medical insurance", "/medical-insurance-ajman/"], ["Ras Al Khaimah medical insurance", "/medical-insurance-ras-al-khaimah/"], ["Fujairah medical insurance", "/medical-insurance-fujairah/"], ["Umm Al Quwain medical insurance", "/medical-insurance-umm-al-quwain/"]] },
    ],
    faq: ["who", "documents", "hospital", "card"],
  },
  // ---------------- Location pages (Dubai is covered above) ----------------
  {
    slug: "medical-insurance-sharjah",
    location: "Sharjah",
    metaTitle: "Sharjah Medical Insurance | Apply Online",
    metaDescription:
      "Medical insurance for Sharjah visa holders. See whether NE-Med may apply, what documents to prepare and how to apply online.",
    h1: "Medical Insurance in Sharjah",
    lead: "Health insurance information for Sharjah visa holders, with an online application.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who may need medical insurance in Sharjah",
        p: ["Employees and domestic workers with a Sharjah-issued residence visa, their sponsors, and families arranging cover around a visa issuance or renewal.",
            "Many people live in Sharjah and work in Dubai, or the other way round. " + VISA_NOTE + " If you live in Sharjah but hold a Dubai visa, see medical insurance in Dubai."] },
      { h2: "Applicable insurance category",
        p: ["For Sharjah-issued visas, NE-Med is the category for eligible Northern Emirates visa holders. " + "Eligibility is subject to the applicable insurance plan and provider requirements."] },
      { h2: "Using your cover around Sharjah",
        p: ["If you commute between emirates, check which network providers are available both near home and near work before you need them."] },
    ],
    faq: ["who", "documents", "online", "hospital"],
  },
  {
    slug: "medical-insurance-ajman",
    location: "Ajman",
    metaTitle: "Ajman Medical Insurance | Apply Online",
    metaDescription:
      "Medical insurance for Ajman visa holders, including employees and domestic workers. Check the likely plan, prepare documents and apply online.",
    h1: "Medical Insurance in Ajman",
    lead: "Health insurance information for Ajman visa holders, with an online application.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who may need medical insurance in Ajman",
        p: ["Small-business owners arranging cover for their staff, households sponsoring a domestic worker, and employees whose residence visa is issued in Ajman."],
        list: ["Employees of Ajman-registered companies", "Domestic workers sponsored by Ajman residents", "Sponsors preparing for a visa issuance or renewal"] },
      { h2: "Applicable insurance category",
        p: ["NE-Med is the category for eligible Northern Emirates visa holders, including Ajman. The plan checker asks four short questions and shows the likely category before you start the application."] },
      { h2: "Applying for several people",
        p: ["If you are arranging cover for more than one worker, each person needs their own application details and their own set of clear document copies."] },
    ],
    faq: ["who", "documents", "pay", "email"],
  },
  {
    slug: "medical-insurance-ras-al-khaimah",
    location: "Ras Al Khaimah",
    metaTitle: "Ras Al Khaimah Medical Insurance | Apply Online",
    metaDescription:
      "Medical insurance for Ras Al Khaimah (RAK) visa holders. Check whether NE-Med may apply and complete your application online.",
    h1: "Medical Insurance in Ras Al Khaimah",
    lead: "Health insurance information for Ras Al Khaimah (RAK) visa holders, with an online application.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who may need medical insurance in Ras Al Khaimah",
        p: ["Employees, domestic workers and business owners whose residence visa is issued in Ras Al Khaimah — including people working for mainland and free zone companies in the emirate."] },
      { h2: "Applicable insurance category",
        p: ["For RAK-issued visas, NE-Med is the category for eligible Northern Emirates visa holders. If you hold an investor or partner visa, tell us when you enquire so the correct applicant type is selected in the application."] },
      { h2: "Apply without travelling",
        p: ["The application, document upload and payment are completed online, so there is no need to travel to another emirate to arrange cover."] },
    ],
    faq: ["who", "documents", "online", "referred"],
  },
  {
    slug: "medical-insurance-fujairah",
    location: "Fujairah",
    metaTitle: "Fujairah Medical Insurance | Apply Online",
    metaDescription:
      "Medical insurance for Fujairah visa holders. See the likely plan, check the healthcare network and apply online.",
    h1: "Medical Insurance in Fujairah",
    lead: "Health insurance information for Fujairah visa holders, with an online application.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who may need medical insurance in Fujairah",
        p: ["Employees and domestic workers with a Fujairah-issued residence visa, and employers or sponsors arranging cover on their behalf."] },
      { h2: "Applicable insurance category",
        p: ["NE-Med is the category for eligible Northern Emirates visa holders, including Fujairah. " + "Eligibility is subject to the applicable insurance plan and provider requirements."] },
      { h2: "Check the network on the east coast",
        p: ["Before you apply, look up which network clinics, hospitals and pharmacies are convenient to where you live and work on the east coast. Network availability depends on the applicable policy and network."] },
    ],
    faq: ["who", "documents", "hospital", "card"],
  },
  {
    slug: "medical-insurance-umm-al-quwain",
    location: "Umm Al Quwain",
    metaTitle: "Umm Al Quwain Medical Insurance | Apply Online",
    metaDescription:
      "Medical insurance for Umm Al Quwain (UAQ) visa holders. Check the likely plan, prepare three documents and apply online.",
    h1: "Medical Insurance in Umm Al Quwain",
    lead: "Health insurance information for Umm Al Quwain (UAQ) visa holders, with an online application.",
    plans: ["ne-med"],
    sections: [
      { h2: "Who may need medical insurance in Umm Al Quwain",
        p: ["Employees, domestic workers and their sponsors where the residence visa is issued in Umm Al Quwain, typically at visa issuance or renewal."] },
      { h2: "Applicable insurance category",
        p: ["For UAQ-issued visas, NE-Med is the category for eligible Northern Emirates visa holders. Use the plan checker to confirm the likely category for your situation."] },
      { h2: "Care in neighbouring emirates",
        p: ["Residents of Umm Al Quwain often visit healthcare providers in neighbouring emirates. Check the applicable network in each area you are likely to use before visiting a provider."] },
    ],
    faq: ["who", "documents", "online", "email"],
  },
];
