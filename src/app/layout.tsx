import type { Metadata } from "next";
import { Poppins, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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

import AuthProvider from '@/components/auth-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${notoSansThai.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <I18nProvider>
            <Navbar />
            {children}
            <CookieBanner />
          </I18nProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
