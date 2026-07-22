import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elsalvadorhidden.com"),

  title: {
    default: "El Salvador Hidden | Discover Authentic Places",
    template: "%s | El Salvador Hidden",
  },

  description:
    "Discover hidden destinations, local culture, beaches, mountains, food, and authentic travel experiences across El Salvador.",

  applicationName: "El Salvador Hidden",

  keywords: [
    "El Salvador travel",
    "El Salvador destinations",
    "hidden places in El Salvador",
    "El Salvador tourism",
    "El Salvador beaches",
    "El Salvador volcanoes",
    "El Salvador culture",
  ],

  authors: [
    {
      name: "El Salvador Hidden",
      url: "https://www.elsalvadorhidden.com",
    },
  ],

  creator: "El Salvador Hidden",
  publisher: "El Salvador Hidden",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elsalvadorhidden.com",
    siteName: "El Salvador Hidden",
    title: "El Salvador Hidden | Discover Authentic Places",
    description:
      "Discover hidden destinations, local culture, beaches, mountains, food, and authentic travel experiences across El Salvador.",
  },

  twitter: {
    card: "summary_large_image",
    title: "El Salvador Hidden | Discover Authentic Places",
    description:
      "Discover hidden destinations, local culture, beaches, mountains, food, and authentic travel experiences across El Salvador.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header />{children}<Footer /></body>   
    </html>
  );
}
