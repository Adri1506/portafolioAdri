import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import ShellLayout from "@/components/organisms/ShellLayout";
import Footer from "@/components/organisms/Footer";
import Constellation from "@/components/organisms/Constellation";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Adrián Zamorano — Ingeniero SDD",
  description:
    "Ingeniero en Informática especializado en Spec-Driven Development con IA. 50+ proyectos, 4 en producción. Desarrollo agéntico con specs.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Constellation />
        <ShellLayout>
          <main className="pt-16 lg:pt-0">{children}</main>
          <Footer />
        </ShellLayout>
      </body>
    </html>
  );
}
