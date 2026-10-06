import { CustomerDetailsNotice } from "./DisclaimerBox.mjs";

const STEPS = [
  ["Choose your plan", "Select the insurance category that matches your situation."],
  ["Enter customer details", "Use the customer's own contact information."],
  ["Upload documents", "Upload the required passport, visa and Emirates ID documents through the authorized application portal."],
  ["Pay online", "Payment is completed through the available online payment gateway."],
  ["Receive your policy documents", "For standard applications, policy-related documents are sent electronically according to the provider's process."],
];

export function ProcessSteps({ alt = false } = {}) {
  return `<section class="section${alt ? " alt" : ""}" id="how-it-works">
  <div class="wrap">
    <h2>How it works</h2>
    <ol class="steps">${STEPS.map(([t, d], i) =>
      `<li><span class="step-num" aria-hidden="true">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join("")}</ol>
    ${CustomerDetailsNotice()}
  </div>
</section>`;
}
