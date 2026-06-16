import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Smile Kava | Roots To Heaven",
  description:
    "Experience premium 100% pure Fijian Noble Kava sourced directly from the fertile lands of Fiji. Authentic, traditional, and crafted with care.",

  keywords: [
    "Smile Kava",
    "Fijian Kava",
    "Premium Kava",
    "Noble Kava",
    "Nasiriti Waka",
    "Yaqona",
    "Fiji",
  ],

  authors: [
    {
      name: "Smile Kava",
    },
  ],

  creator: "Smile Kava",

  openGraph: {
    title: "Smile Kava | Roots To Heaven",
    description:
      "Premium Fijian Noble Kava sourced directly from the heart of Fiji.",
    url: "https://smilekava.com",
    siteName: "Smile Kava",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Kava",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smile Kava | Roots To Heaven",
    description:
      "Premium Fiji Noble Kava sourced directly from the heart of Fiji.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://smilekava.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} bg-[#0F0B08] text-[#F7F0E5] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}