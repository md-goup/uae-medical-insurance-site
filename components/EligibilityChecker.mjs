import { esc } from "../utils/html.mjs";
import { checkerRules } from "../data/plans.mjs";

const radios = (name, options) => options.map((o, i) =>
  `<label class="choice"><input type="radio" name="${name}" value="${esc(o)}"${i === 0 ? " required" : ""}><span>${esc(o)}</span></label>`).join("");

// Runs entirely in the visitor's browser (see public/assets/app.js).
// Answers are never sent or stored.
export function EligibilityChecker({ alt = true } = {}) {
  return `<section class="section${alt ? " alt" : ""}" id="checker">
  <div class="wrap narrow">
    <h2>Find the right medical insurance option</h2>
    <p class="section-lead">Answer a few quick questions to see the likely plan category. Your answers stay on your device.</p>
    <form class="card checker" data-checker novalidate>
      <p class="checker-progress" data-progress aria-live="polite"></p>
      <fieldset data-step="emirate">
        <legend tabindex="-1">Where is your visa issued?</legend>
        <div class="choices">${radios("emirate", checkerRules.emirates)}</div>
      </fieldset>
      <fieldset data-step="who" hidden>
        <legend tabindex="-1">Who needs insurance?</legend>
        <div class="choices">${radios("who", checkerRules.applicants)}</div>
      </fieldset>
      <fieldset data-step="salary" hidden>
        <legend tabindex="-1">Monthly salary</legend>
        <label class="field" for="chk-salary">Monthly salary in AED
          <input id="chk-salary" name="salary" type="number" inputmode="numeric" min="0" step="1" autocomplete="off">
        </label>
      </fieldset>
      <fieldset data-step="age" hidden>
        <legend tabindex="-1">Age</legend>
        <label class="field" for="chk-age">Age of the person to be insured (years)
          <input id="chk-age" name="age" type="number" inputmode="numeric" min="0" max="120" step="1" autocomplete="off">
        </label>
      </fieldset>
      <div data-step="result" hidden>
        <div data-result tabindex="-1"></div>
      </div>
      <p class="form-error" data-error role="alert"></p>
      <div class="btn-row checker-nav">
        <button type="button" class="btn btn-ghost" data-back hidden>Back</button>
        <button type="submit" class="btn btn-primary" data-next>Next</button>
        <button type="button" class="btn btn-ghost" data-restart hidden>Start again</button>
      </div>
      <noscript><p class="note">The plan checker needs JavaScript. You can also view the plans above or contact us for help.</p></noscript>
    </form>
  </div>
</section>`;
}
