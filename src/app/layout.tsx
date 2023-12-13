import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Astillero-Alpha.png" sizes="logo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,600;1,400;1,500&family=Montserrat:ital,wght@0,400;1,300&family=Tinos:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
