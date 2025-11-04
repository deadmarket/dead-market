import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://deadmarket.com.ar/sitemap.xml
`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
