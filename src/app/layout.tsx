import "../styles/globals.css";
import type { ReactNode } from "react";
import { PageMotion } from "../components/PortfolioInteractions";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import localFont from "next/font/local";
import { metadata, viewport } from "./metadata";

export { metadata, viewport };

const geist = localFont({
  src: "./fonts/Geist-Bold.otf",
  variable: "--font-geist",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Regular.otf",
  variable: "--font-geist-mono",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable}`}
    >
      <body suppressHydrationWarning className="portfolio-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <PageMotion>{children}</PageMotion>
        <Analytics />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9a88367a-63bb-4578-b87d-f83f36dfc235"
        />
      </body>
    </html>
  );
}
