import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astillero Alpha",
  description: "Creado por Gianluca Cianchi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/Astillero-Alpha.png" sizes="logo" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
