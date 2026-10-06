export const faqs = [
  { id: "who", q: "Who can apply for medical insurance?",
    a: "Eligibility depends on the selected plan and applicable provider requirements." },
  { id: "documents", q: "What documents are required?",
    a: "Passport copy, residence visa and Emirates ID are among the documents requested during the online application process." },
  { id: "online", q: "Can I apply online?",
    a: "Yes. Eligible applicants can proceed through the online application process." },
  { id: "pay", q: "How do I pay?",
    a: "Payment can be completed through the available online payment gateway using an accepted card." },
  { id: "email", q: "Will I receive policy documents by email?",
    a: "For standard applications, policy-related documents are sent electronically according to the provider's process." },
  { id: "referred", q: "What happens if my application is referred?",
    a: "Some applications may require further assessment. In such cases, the application may be referred for review by the provider's medical/underwriting team." },
  { id: "hospital", q: "Can I use any hospital?",
    a: "No. Healthcare access depends on the network and benefits applicable to your policy. Customers should check the applicable network before visiting a provider." },
  { id: "card", q: "Is the insurance card physical?",
    a: "The applicable plan may use Emirates ID for identification instead of a physical medical card. Exact activation and access depend on the policy/provider process." },
];
export const faqByIds = (ids) => ids.map((id) => faqs.find((f) => f.id === id)).filter(Boolean);
