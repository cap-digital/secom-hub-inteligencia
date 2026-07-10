import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secom · Hub de Inteligência",
  description:
    "Acesse em um só ambiente os dashboards de inteligência e comunicação da Secretaria de Comunicação do Estado da Bahia.",
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
  themeColor: "#f5f6f8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f6f8] font-sans text-gray-600">
        {children}
      </body>
    </html>
  );
}
