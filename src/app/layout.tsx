import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";

const practitioner = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mag. Romina Lauzensky",
  jobTitle: "Psychotherapeutin",
  url: siteUrl.toString(),
  email: "praxis@psychotherapie-lauzensky.at",
  telephone: "+4368184087022",
  workLocation: [
    { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "Mollardgasse 34/2/40-41", postalCode: "1060", addressLocality: "Wien", addressCountry: "AT" } },
    { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "Klostergasse 19/5", postalCode: "2340", addressLocality: "Mödling", addressCountry: "AT" } },
  ],
};

const inter = localFont({
  src: [
    { path: "./fonts/inter-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/inter-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/playfair-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Mag. Romina Lauzensky | Psychotherapie Wien & Mödling",
  description:
    "Psychotherapie bei Mag. Romina Lauzensky in Wien und Mödling. Einzeltherapie, Paartherapie, Familientherapie und Traumapsychotherapie. Kontakt und Standorte.",
  openGraph: {
    title: "Mag. Romina Lauzensky | Psychotherapie Wien & Mödling",
    description: "Raum für Begegnung. Psychotherapie in Wien und Mödling.",
    locale: "de_AT",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-AT" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practitioner).replace(/</g, "\\u003c") }} /><SiteHeader />{children}</body>
    </html>
  );
}
