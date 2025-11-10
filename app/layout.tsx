import type { Metadata } from "next";
import "./globals.css";
// FIX: Use relative path for import as '@/' alias is not configured.
import { initialData } from "../constants/constants";

export const metadata: Metadata = {
  title: `${initialData.name} | Personal Portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-gray-900 text-gray-200">{children}</body>
    </html>
  );
}