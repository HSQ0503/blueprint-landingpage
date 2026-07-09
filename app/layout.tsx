import type { Metadata } from "next";
import { Gabarito, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

// Gabarito — display / wordmark / numerals. DM Sans — UI + body copy.
const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1500 SAT Blueprint — Master the Digital SAT",
  description:
    "New Digital SAT prep from a 1580-scorer with four perfect 800 Math scores. Desmos strategies, reading systems, grammar shortcuts, and a plan built around your weaknesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gabarito.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
