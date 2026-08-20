import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const sans = Manrope({ variable:"--font-sans", subsets:["latin","latin-ext"] });
const serif = Cormorant_Garamond({ variable:"--font-serif", subsets:["latin","latin-ext"], weight:["400","500","600"] });
export const metadata:Metadata={
  metadataBase:new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title:"Abant Su | Doğanın En Saf Hâli",
  description:"Abant'ın koruma altındaki doğasından gelen doğal kaynak suyu.",
  openGraph:{title:"Abant Su | Doğanın En Saf Hâli",description:"Abant'ın koruma altındaki doğasından gelen doğal kaynak suyu.",images:["/og.png"],locale:"tr_TR",type:"website"},
  twitter:{card:"summary_large_image",title:"Abant Su | Doğanın En Saf Hâli",description:"Abant'ın koruma altındaki doğasından gelen doğal kaynak suyu.",images:["/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="tr"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}
