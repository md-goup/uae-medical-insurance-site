# Google Ads & Measurement Notes

## The KPI that matters
Optimise for **cost per issued policy**, not cost per click.

    Ad spend ÷ issued policies = cost per issued policy

A click on "Apply Online" only shows intent — the policy is issued inside the Orient portal, which this website cannot see. Until an authorised confirmation exists:
1. Track `orient_portal_click` as the primary Google Ads conversion (proxy).
2. Each week, compare issued policies reported under your Orient account with ad spend, by campaign.
3. Record which keywords/landing pages precede issued policies and shift budget accordingly.

**If Orient later provides a confirmation mechanism** (a thank-you redirect URL, a postback/webhook, or a policy report with timestamps), add it as follows:
- Redirect back to this site: create a `/thank-you/` page in `pages/info.mjs` that fires a `policy_issued` event, and make that the primary conversion.
- Report/CSV only: use Google Ads *offline conversion import*. To support this, capture the `gclid` URL parameter on landing and pass it with the lead or application reference.

## Events sent to `dataLayer` (GTM-compatible) and gtag
| Event | When |
|---|---|
| `apply_online_click` | Any Apply Online / Continue Application button (`location`, `plan` params) |
| `orient_portal_click` | Outbound click to the Orient portal; also fires the Google Ads conversion when ID + label are set |
| `check_plan_click` | "Check Your Plan" buttons |
| `eligibility_start` / `eligibility_complete` | Plan checker started / result shown (`plan`, `visa_emirate`, `applicant_type`) |
| `whatsapp_click`, `phone_click`, `email_click` | Contact actions |
| `form_complete` | Enquiry form sent successfully |
| `faq_interaction` | FAQ question opened |
| `network_check_click` | Check Network button |

Set `GA4_MEASUREMENT_ID`, `GOOGLE_ADS_ID`, `GOOGLE_ADS_CONVERSION_LABEL` in `config/site.config.mjs`. In GA4, mark `orient_portal_click`, `whatsapp_click`, `phone_click` and `form_complete` as key events.

## Suggested ad group → landing page mapping
| Search theme | Landing page |
|---|---|
| medical / health insurance UAE | `/medical-insurance-uae/` |
| medical / health insurance Dubai | `/medical-insurance-dubai/` |
| Dubai visa medical insurance | `/dubai-visa-medical-insurance/` |
| employee / domestic worker insurance, Orient E-Med | `/employee-medical-insurance/` |
| dependent / parent insurance, Orient D-Med | `/dependent-medical-insurance/` |
| investor / partner insurance, Orient I-Med | `/investor-medical-insurance/` |
| Northern Emirates insurance, Orient NE-Med | `/northern-emirates-medical-insurance/` |
| Sharjah / Ajman / RAK / Fujairah / UAQ medical insurance | `/medical-insurance-<emirate>/` |

Check Google Ads policy on using the "Orient" brand name in ad text; bidding on it as a keyword is a separate matter from using it in copy.

## Suggested negative keywords (campaign setup — not used on the website)
jobs, job, career, careers, vacancy, hiring, salary, recruitment, internship, free, pdf, definition, meaning, course, training, complaint, claims jobs, insurance jobs, login, claim form, claim status, customer care number, car, motor, vehicle, travel, life insurance, pet, home insurance, what is, how to become, agent license, exam, template, sample, wikipedia, reviews

Review the search-terms report weekly for the first month and extend this list. Add other emirates (e.g. Abu Dhabi) as negatives if you cannot serve those visas.
