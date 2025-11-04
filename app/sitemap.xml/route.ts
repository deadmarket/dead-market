import { NextResponse } from "next/server";

export async function GET() {
  const urls = [
    "https://deadmarket.com.ar/",
    "https://deadmarket.com.ar/shop",
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u}</loc><changefreq>weekly</changefreq></url>`).join("")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
