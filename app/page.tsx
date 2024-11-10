import MainLogo from "./ui/Home/mainLogo";
import MainText from "./ui/Home/mainText";
import Head from "next/head";
import Image from "next/image";
import NewMainLogo from "./ui/Home/newMainLogo";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKCSE McGill",
  url: "https://akcsemcgill.ca",
  logo: "https://akcsemcgill.ca/AKCSE_McGill.png",
  sameAs: ["https://www.instagram.com/akcse_mcgill/"],
};

export default function Home() {
  return (
    <>
      <Head>
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
        <meta
          property="og:image"
          content="https://akcsemcgill.ca/AKCSE_McGill.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <section className="lg:flex w-full h-full">
        <div className="w-1/2 h-full">
          <NewMainLogo />
        </div>
        <div className="flex w-full lg:w-1/2 h-full lg:mt-auto mt-10 p-2 lg:p-0 mb-10">
          <MainText />
        </div>
      </section>
    </>
  );
}
