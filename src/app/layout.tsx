import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eco Vista Carpentry",
    template: "%s — Eco Vista Carpentry",
  },
  description:
    "Eco Vista Carpentry builds custom timber frame homes, porches, and bespoke woodwork across Ireland. English-speaking team. Sustainable materials.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "Eco Vista Carpentry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cinzel.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased" style={{ background: "#FAF7F2", color: "#1C1612" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
