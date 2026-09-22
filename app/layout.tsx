import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stallionadvertising.ma"),
  title: "Stallion Development | Digital Products That Move Business Forward",
  description:
    "Stallion Development builds high-converting websites, scalable software, and reliable digital products for ambitious businesses.",
  keywords: [
    "web development Morocco",
    "software development Casablanca",
    "SaaS development",
    "custom websites",
    "Stallion Advertising",
  ],
  alternates: { canonical: "https://www.stallionadvertising.ma/" },
  openGraph: {
    title: "Stallion Development | Digital Products That Move Business Forward",
    description:
      "Websites, software, and digital products built by Stallion's development team.",
    url: "https://www.stallionadvertising.ma/",
    siteName: "Stallion Advertising",
    locale: "en_US",
    type: "website",
    images: [{ url: "/unicorn.png", width: 512, height: 512, alt: "Stallion Advertising" }],
  },
  twitter: {
    card: "summary",
    title: "Stallion Development | Digital Products That Move Business Forward",
    description:
      "Websites, software, and digital products built by Stallion's development team.",
    images: ["/unicorn.png"],
  },
  icons: { icon: "/unicorn.png", shortcut: "/unicorn.png", apple: "/unicorn.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
