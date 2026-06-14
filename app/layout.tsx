import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smile Kava | Roots To Heaven",
  description:
    "Premium Fiji Noble Kava sourced directly from the heart of Fiji."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}