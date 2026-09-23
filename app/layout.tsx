import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;
n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init','1074832125424906');fbq('track','PageView');`}
        </Script>
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1074832125424906&ev=PageView&noscript=1" alt="" /></noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
