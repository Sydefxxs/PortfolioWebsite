import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arathgarza.com"),
  title: "Arath Garza | Portfolio",
  description:
    "Computer Science student & software developer. Building modern, performant web applications.",
  keywords: [
    "Arath Garza",
    "Software Developer",
    "Computer Science",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Arath Garza" }],
  creator: "Arath Garza",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://arathgarza.com",
    title: "Arath Garza | Software Developer",
    description:
      "Computer Science student & software developer. Building modern, performant web applications.",
    siteName: "Arath Garza",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arath Garza | Software Developer",
    description:
      "Computer Science student & software developer. Building modern, performant web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
