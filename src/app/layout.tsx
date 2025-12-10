import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Legal Partners | Professional Law Firm",
  description: "Excellence in legal representation.",
};

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { I18nProvider } from '@/components/i18n-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSansThai.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <I18nProvider>
          <Navbar />
          {children}
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
