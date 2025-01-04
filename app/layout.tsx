import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import Image from "next/image";
import { MenuLink } from "./ui/menuLink";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import MobileNav from "./ui/Home/MobileNavigation/MobileNav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKCSE McGill",
  description: "AKCSE YG McGill Chapter",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKCSE McGill",
  url: "https://akcsemcgill.ca",
  logo: "https://akcsemcgill.ca/AKCSE_McGill.png",
  sameAs: ["https://www.instagram.com/akcse_mcgill/"],
};

const navMenuItems = [
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Executives",
    path: "/executives",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="icon" href="/AKCSE_McGill.png" type="image/png" /> */}
        <title>AKCSE McGill - Korean-Canadian Scientists and Engineers</title>
        <meta
          name="description"
          content="Learn about AKCSE McGill, a vibrant community for Korean-Canadian scientists and engineers, offering networking, mentorship, and development opportunities."
        />
        <meta name="keywords" content="AKCSE, AKCSE McGill, 악세, 악세 맥길" />
        <meta property="og:title" content="AKCSE McGill" />
        <meta
          property="og:description"
          content="Official page of AKCSE McGill."
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <head>
        {/* <link rel="icon" href="/AKCSE_McGill.png" type="image/png" /> */}
        <link rel="icon" href="https://akcsemcgill.ca/AKCSE_McGill.png" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta name="twitter:image" content="/opengraph-image.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} h-screen`}>
        <nav className="flex w-full justify-between p-3">
          <div className="-mt-7 h-12 w-24">
            <Link href="/">
              <Image
                src="/AKCSE_McGill.png"
                height={120}
                width={120}
                alt="AKCSE McGill"
              />
            </Link>
          </div>
          <div className="lg:flex  hidden ml-auto">
            {navMenuItems.map((item) => {
              return <MenuLink item={item} key={item.path} />;
            })}
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </nav>

        <div className="border-t"></div>
        <NextUIProvider>
          <div className="w-full h-full lg:h-[790px] xl:h-[810px]">
            {children}
          </div>
        </NextUIProvider>

        {/* <footer className="flex w-full border-t-1">
          <div className="flex w-full">
            <div className="w-full h-full ml-1 justify-start">
              <Label className="text-xs font-light">
                © 2024 AKCSE McGill Executives. All rights reserved.
              </Label>
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
