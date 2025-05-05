import "./globals.css";
// import { GoogleAnalytics,GoogleTagManager } from "@next/third-parties/google";
import type {Metadata} from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata : Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title : {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "「Newt.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」でで作成されるサイトです。",
  openGraph: {
    title : "シンプルなコーポレートサイト",
    description: "「Newt.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」でで作成されるサイトです。",
    images:["/ogp.png"],
  },
  alternates: {
    canonical:"http://localhost:3000",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      {/* 本番はIDを入れる */}
      {/* <GoogleAnalytics gaId="G-XXX" /> 
      <GoogleTagManager gtmId="GTM-XXX" /> */}
    </html>
  );
}
