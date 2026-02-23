import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "../components/landing/nav";

export const metadata: Metadata = {
  title: "Sureva – Webflow HTML website template",
  description: "Sureva is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
  generator: "Webflow",
  openGraph: {
    title: "Sureva – Webflow HTML website template",
    description: "Sureva is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/68d5b55a2676b7760a3edee5_Ophen%20Graph.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sureva – Webflow HTML website template",
    description: "Sureva is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/68d5b55a2676b7760a3edee5_Ophen%20Graph.webp"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/css/sureva.webflow.shared.8276d54da.css"
          rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CRoboto+Serif:regular%7CInter:regular%7CLora:regular"
          media="all" />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Roboto Serif:regular", "Inter:regular", "Lora:regular"] } });`}
        </Script>
        <Script id="webflow-modernizr" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
      </head>
      <body>
        <div className="page-wrapper">
          <Nav />
          <main className="main-wrapper">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
