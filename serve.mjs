// Local preview only:  node serve.mjs  ->  http://localhost:4173
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "dist");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain" };
const port = process.env.PORT || 4173;

createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  const base = process.env.BASE_PATH || "";
  if (base && p.startsWith(base)) p = p.slice(base.length) || "/";
  if (p.endsWith("/")) p += "index.html";
  try {
    const data = await readFile(join(dist, p));
    res.writeHead(200, { "Content-Type": types[extname(p)] || "application/octet-stream" }).end(data);
  } catch {
    res.writeHead(404, { "Content-Type": types[".html"] }).end(await readFile(join(dist, "404.html")).catch(() => "Not found"));
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}`));
