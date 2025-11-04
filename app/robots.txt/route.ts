import { NextResponse } from "next/server";
mkdir -p "app/robots.txt" "app/sitemap.xml"

cat > "app/robots.txt/route.ts" << 'EOF'
import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://deadmarket.com.ar/sitemap.xml
`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
