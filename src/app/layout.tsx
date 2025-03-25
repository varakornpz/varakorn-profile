import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase : new URL("https://profile.varakorn.net"),
  title: "varakorn.net",
  description: "created by my self",
  icons : {
    icon : "./varakorn_favicon.png"
  },
  openGraph : {
    images : [{
      url : "./opengraph-image.png",
      width : 1200,
      height : 630
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
