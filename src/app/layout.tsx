import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

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
  title: "Mag. Romina Lauzensky | Psychotherapie Wien & Mödling",
  description:
    "Psychotherapie bei Mag. Romina Lauzensky in Wien und Mödling. Einzeltherapie, Paartherapie, Familientherapie und Traumapsychotherapie. Kontakt und Standorte.",
  openGraph: {
    title: "Mag. Romina Lauzensky | Psychotherapie Wien & Mödling",
    description: "Raum für Begegnung. Psychotherapie in Wien und Mödling.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-AT" className={`${inter.variable} ${playfair.variable}`}>
      <body><SiteHeader />{children}</body>
    </html>
  );
}
