import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zhangyyy-ai-rs.github.io"),
  title: "Yao Zhang · Remote Sensing & Multimodal Intelligence",
  description:
    "Yao Zhang is an incoming Master's student at Wuhan University researching remote sensing foundation models, multimodal large language models, and multimodal reasoning.",
  keywords: [
    "Yao Zhang",
    "张耀",
    "Wuhan University",
    "Remote Sensing",
    "Foundation Models",
    "Multimodal Reasoning",
  ],
  authors: [{ name: "Yao Zhang" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Yao Zhang · Remote Sensing & Multimodal Intelligence",
    description:
      "Researching foundation models and multimodal intelligence for remote sensing.",
    url: "/",
    siteName: "Yao Zhang",
    locale: "en_US",
    alternateLocale: "zh_CN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yao Zhang · Academic Homepage",
    description:
      "Foundation models and multimodal intelligence for remote sensing.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
