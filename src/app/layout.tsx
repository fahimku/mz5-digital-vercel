import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { ScrollVectorBackground } from "@/components/background/ScrollVectorBackground";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NavigationLoader } from "@/components/layout/NavigationLoader";
import {
  organizationJsonLd,
  rootMetadata,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export { rootMetadata as metadata };

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full bg-black font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <ScrollVectorBackground />
        <NavigationLoader />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
