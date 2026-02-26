import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TransitionProvider } from "@/components/TransitionContext";
import { TransitionOverlay } from "@/components/TransitionOverlay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIONNA LUI - PORTFOLIO",
  description:
    "Multidisciplinary creative working across production, creative direction, and styling.",
  openGraph: {
    title: "FIONNA LUI - PORTFOLIO",
    description:
      "Multidisciplinary creative working across production, creative direction, and styling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased">
        <TransitionProvider>
          <SmoothScroll />
          <TransitionOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
