import { icon } from "../utils/icons.mjs";
import { networkUrl, isExternal } from "../utils/links.mjs";

export function NetworkSection({ alt = false } = {}) {
  const href = networkUrl();
  const ext = isExternal(href);
  return `<section class="section${alt ? " alt" : ""}" id="network">
  <div class="wrap split">
    <div>
      <h2>Healthcare Network</h2>
      <p>Eligible customers can access healthcare services through the applicable Nextcare network associated with their policy.</p>
      <p>Check the applicable network before visiting a healthcare provider.</p>
      <p class="note">Network availability depends on the applicable policy and network.</p>
    </div>
    <div class="card network-card">
      <span class="icon-badge">${icon("network")}</span>
      <p><strong>Not every hospital or clinic is included.</strong> Confirm your provider is in the network for your policy first.</p>
      <a class="btn btn-secondary" href="${href}" data-track="network_check_click"${ext ? ' target="_blank" rel="noopener noreferrer"' : ""}>Check Network${ext ? '<span class="sr-only"> (opens in a new tab)</span>' : ""}</a>
      ${ext ? "" : '<p class="note">Ask us for the current network list for your plan.</p>'}
    </div>
  </div>
</section>`;
}
