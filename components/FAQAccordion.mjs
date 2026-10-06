import { esc } from "../utils/html.mjs";

// Native <details> — keyboard accessible and works without JavaScript.
export function FAQAccordion(items, { title = "Frequently asked questions", alt = false, showAllLink = true, heading = "h2" } = {}) {
  return `<section class="section${alt ? " alt" : ""}" id="faq">
  <div class="wrap narrow">
    ${title ? `<${heading}>${esc(title)}</${heading}>` : ""}
    <div class="faq">${items.map((f) =>
      `<details data-faq="${f.id}"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div>
    ${showAllLink ? '<p class="note"><a href="/faq/">See all questions</a></p>' : ""}
  </div>
</section>`;
}

export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
