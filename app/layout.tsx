import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deadmarket.com.ar"),
  title: "DEAD MARKET — Gothic Minimalism",
  description: "Monochrome silhouettes. Architectural lines. Limited drops.",
  openGraph: {
    title: "DEAD MARKET — Gothic Minimalism",
    description: "Monochrome silhouettes. Architectural lines. Limited drops.",
    url: "https://deadmarket.com.ar",
    siteName: "DEAD MARKET",
    images: [
      {
        url: "/og.jpg", // poné un og luego; por ahora dejará 404 sin romper nada
        width: 1200,
        height: 630,
        alt: "DEAD MARKET",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEAD MARKET — Gothic Minimalism",
    description: "Monochrome silhouettes. Architectural lines. Limited drops.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
