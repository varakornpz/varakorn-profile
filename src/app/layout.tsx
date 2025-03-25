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
    images : ["https://cdn.discordapp.com/attachments/981586526158880788/1354086069704069120/metaTag.png?ex=67e4026c&is=67e2b0ec&hm=d2bf830c8d5ac7620298bdb9fc1ba86b1681060dbe31efe724dbe02048b84c6c&"]
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
