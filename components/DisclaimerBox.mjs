import { esc } from "../utils/html.mjs";
import { icon } from "../utils/icons.mjs";

export function DisclaimerBox({ title, paragraphs, tone = "info" }) {
  return `<aside class="notice notice-${tone}" role="note">
  <span class="notice-icon">${icon("info")}</span>
  <div><h3>${esc(title)}</h3>${paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
</aside>`;
}

export const CustomerDetailsNotice = () =>
  DisclaimerBox({
    title: "Important when completing the application",
    paragraphs: [
      "Always enter the customer's own email address and mobile number for policy generation.",
      "Do not use the agent's email address or phone number in place of the customer's contact details.",
    ],
    tone: "important",
  });
