// Zero-dependency static build:  node build.mjs  ->  ./dist
import { mkdirSync, writeFileSync, rmSync, cpSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config, isSet } from "./config/site.config.mjs";
import { routes } from "./pages/index.mjs";
import { Layout } from "./components/Layout.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, "public"), dist, { recursive: true });
writeFileSync(join(dist, "assets", "main.css"), readFileSync(join(root, "styles", "main.css")));

const paths = new Set(routes.map((r) => r.path));
const problems = [];

for (const r of routes) {
  const html = Layout({ ...r, body: r.body() });
  const base = (config.BASE_PATH || "").replace(/\/$/, "");
  const outHtml = base ? html.replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`) : html;
  const file = r.path.endsWith("/") ? join(dist, r.path, "index.html") : join(dist, r.path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, outHtml);

  // --- build-time checks: one H1, internal links + anchors resolve ---
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${r.path}: expected exactly one <h1>, found ${h1s}`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    if (href.startsWith("/assets/")) continue;
    const [p, hash] = href.split("#");
    const target = p || r.path;
    if (!paths.has(target)) { problems.push(`${r.path}: broken link ${href}`); continue; }
    if (hash) {
      const t = routes.find((x) => x.path === target);
      const tHtml = target === r.path ? html : Layout({ ...t, body: t.body() });
      if (!tHtml.includes(`id="${hash}"`)) problems.push(`${r.path}: missing anchor ${href}`);
    }
  }
}

const indexable = routes.filter((r) => !r.noindex);
if (isSet(config.SITE_URL)) {
  writeFileSync(join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
      .map((r) => `  <url><loc>${config.SITE_URL}${r.path}</loc></url>`).join("\n")}\n</urlset>\n`);
}
writeFileSync(join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n${isSet(config.SITE_URL) ? `Sitemap: ${config.SITE_URL}/sitemap.xml\n` : ""}`);

writeFileSync(join(dist, ".nojekyll"), "");
console.log(`Built ${routes.length} pages -> dist/`);
const unset = Object.entries(config).filter(([, v]) => typeof v === "string" && /^\[.*\]$/.test(v)).map(([k]) => k);
if (unset.length) console.log(`\nStill using placeholders (edit config/site.config.mjs):\n  - ${unset.join("\n  - ")}`);
if (!/^https:\/\//.test(config.ORIENT_APPLICATION_URL)) problems.push("ORIENT_APPLICATION_URL must be an https:// URL");
if (problems.length) { console.error(`\nProblems:\n  - ${problems.join("\n  - ")}`); process.exit(1); }
