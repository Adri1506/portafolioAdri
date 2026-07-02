import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrián Zamorano — Ingeniero SDD",
  description:
    "Ingeniero en Informática especializado en Spec-Driven Development con IA. 50+ proyectos, 3 en producción. Desarrollo agéntico con specs.",
  keywords: [
    "SDD",
    "Spec-Driven Development",
    "desarrollo con IA",
    "programación agéntica",
    "Next.js",
    "portafolio",
    "Adrián Zamorano",
  ],
  openGraph: {
    title: "Adrián Zamorano — Ingeniero SDD",
    description:
      "Ingeniero en Informática especializado en Spec-Driven Development con IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-slate-900 antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
