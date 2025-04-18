import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { GoogleAnalytics } from "@next/third-parties/google";
import { getDictionary } from "@/lib/getDictionary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instagram to MP4 Downloader Tools | Best Ways to Convert Instagram Videos",
  description: "Discover top Instagram to MP4 converter tools. Our curated list helps you easily download and convert Instagram videos to MP4 format. Find the best Instagram video downloaders here!",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-1101888138551369" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1101888138551369"
          crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation currentLang={params.lang} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer currentLang={params.lang} dict={dict} />
      </body>
      <GoogleAnalytics gaId="G-SKHS9RZBGR" />
    </html>
  )
}

