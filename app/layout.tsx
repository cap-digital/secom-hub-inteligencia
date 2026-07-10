import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secom · Hub de Inteligência",
  description:
    "Acesse em um só ambiente os sistemas de inteligência e comunicação da Secretaria de Comunicação do Estado da Bahia.",
  applicationName: "Secom · Hub de Inteligência",
  authors: [{ name: "Secretaria de Comunicação do Estado da Bahia" }],
  keywords: [
    "Secom",
    "Bahia",
    "Hub de Inteligência",
    "Comunicação",
    "Governo do Estado da Bahia",
  ],
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy-950 font-sans text-slate-300">
        {children}
      </body>
    </html>
  );
}
