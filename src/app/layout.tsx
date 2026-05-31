import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "rspace | Full Stack Developer & Graphic Designer",
  description:
    "Computer Engineering student at UP Diliman — full stack developer, graphic designer, and AI engineer building for social impact.",
  openGraph: {
    title: "rspace | Full Stack Developer & Graphic Designer",
    description:
      "Computer Engineering student at UP Diliman — full stack developer, graphic designer, and AI engineer building for social impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
