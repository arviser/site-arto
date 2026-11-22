// Rakentaa public/sitemap.xml. Sivusto itse on käsin tehty staattinen HTML (public/index.html).
// lastmod = index.html:n viimeisin commit-päivä (git), muuten tämä päivä.
import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://artoremes.fi";

let lastmod = new Date().toISOString().slice(0, 10);
try {
  const d = execSync("git log -1 --format=%cs -- public/index.html", { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] })
    .toString().trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) lastmod = d;
} catch {}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;
writeFileSync(join(ROOT, "public", "sitemap.xml"), xml);
console.log(`sitemap.xml kirjoitettu (lastmod ${lastmod})`);
