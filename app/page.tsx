"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import RotateNews from "./ui/Home/RotateNews";
import { LiaArrowDownSolid } from "react-icons/lia";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKCSE McGill",
  url: "https://akcsemcgill.ca",
  logo: "https://akcsemcgill.ca/AKCSE_McGill.png",
  sameAs: ["https://www.instagram.com/akcse_mcgill/"],
};

const events = [
  {
    title: "✨ 2024 - 2025 Orientation Night ✨",
    date: "September 20th 2024",
    description:
      "The event serves as an opportunity to introduce the AKCSE Team, and outline any initiatives for the upcoming academic year.",
    image: "/activities/ot/image1.jpg",
  },
  {
    title: "🧑‍🏫 YG Seminar 📚",
    date: "October 18th 2024",
    description:
      "The YG seminar invites professionals from different STEM fields such as medicine, IT, engineering, and natural sciences.",
    image: "/activities/Seminar/image1.jpg",
  },
  {
    title: "💡 Ideathon 🤝",
    date: "November 16th 2024",
    description:
      "Students from diverse programs in McGill unleash their creativity and technical skills by brainstorming clever applications and websites.",
    image: "/activities/Ideathon/image1.jpg",
  },
];

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
      <section className="flex flex-col md:flex-row w-full h-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-fit flex flex-col justify-center items-center text-center translate-y-0 md:translate-y-1/2">
          <div className="absolute w-full h-60 bg-[#6A8CAF] blur-[150px] -z-10"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="-space-y-5"
          >
            <div className="mt-6 md:mt-0">
            <div>
              <Label className="text-6xl md:text-7xl font-extrabold">Welcome To</Label>
            </div>
            </div>
            
            <div className="flex items-center h-48 w-48 md:h-72 md:w-72">
              <Image
                src="/AKCSE_McGill.png"
                alt="AKCSE McGill"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-full h-full space-y-2">
              <Label className="text-lg text-gray-500">
                We Are A Vibrant Community Of Korean-Canadian McGill
                Undergraduates.
              </Label>
              <div className="flex w-full justify-center">
                <Button className="w-3/4 px-6 py-2">Join AKCSE McGill</Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
          <div className="w-full md:w-1/2 h-fit flex justify-center items-center mt-8 md:mt-0 md:translate-y-1/3 md:-space-x-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:-mt-96"
            >
              <Image
                src="/mcgill_school_logo.png"
                alt="McGill Logo"
                height={120}
                width={120}
                className="hidden md:object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex w-full md:w-[500px] md:h-[500px] rounded-3xl md:rounded-full overflow-hidden"
            >
              <Image
                src="/mcgill_landscape.jpg"
                alt="McGill Building"
                width={800}
                height={800}
                className="object-cover w-[90%] h-auto mx-auto md:w-full md:h-full rounded-xl md:rounded-none"
              />
            </motion.div>
          </div>
      </section>

      <div className="mt-12 md:-mt-10  mb-5 md:mb-12 overflow-hidden w-full h-16 relative">
        <div className="flex animate-slideLoop w-full md:w-[200%] h-full absolute top-0 left-0">
          {/* Original Content */}
          <div className="flex space-x-10 w-[50%]">
            <span className="text-lg font-semibold whitespace-nowrap">
              Computer Science
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Cognitive Science
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Mathematics
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Biochemistry
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Electrical Engineering
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Pharmacology
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Neuroscience
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Chemical engineering
            </span>
          </div>
          {/* Duplicated Content */}
          <div className="hidden md:flex space-x-10 w-[50%]">
            <span className="text-lg font-semibold whitespace-nowrap">
              Computer Science
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Cognitive Science
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Mathematics
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Biochemistry
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Electrical Engineering
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Pharmacology
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Neuroscience
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Software Engineering
            </span>
            <span className="text-lg font-semibold whitespace-nowrap">
              Chemical engineering
            </span>
          </div>
        </div>
      </div>
      
      
      <section className="flex flex-col w-full h-fit md:h-full px-4 md:px-8">
        {/* Top Content: Two sections stacked on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-fit">
          {/* Top Section (mobile) / Left Column (desktop) */}
          <div className="h-fit flex justify-center items-center">
            <RotateNews />
          </div>

          {/* Bottom Section (mobile) / Right Column (desktop) */}
          <div className="flex flex-col w-full h-fit justify-center items-center">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.5, 1] }} 
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="flex w-full justify-center items-center gap-2 mt-20 md:mt-0">
                <Label className="text-xl md:text-2xl font-outfit font-bold">
                  Check Out Our News
                </Label>
                <div className="mt-1.5">
                  <LiaArrowDownSolid size={20} className="md:text-[25px]" />
                </div>
              </div>
            </motion.div>

            <div className="flex w-full h-fit justify-center items-center mt-4">
              {/* Responsive image: full width on mobile, up to 600px on desktop */}
              <Image
                src="/akcsebition.png"
                alt="AKCSEBITION"
                height={600}
                width={600}
                className="object-cover w-full max-w-[600px]"
              />
            </div>
          </div>
        </div>

        {/* "What Is AKCSE?" Section */}
        <div className="flex flex-col w-full h-fit space-y-3 text-center mt-12 md:mt-8">
          <Label className="w-full text-xl md:text-2xl font-outfit font-bold">
            What Is AKCSE?
          </Label>
          <div className="mx-auto w-full md:w-2/3">
            <Label className="font-outfit text-base md:text-lg leading-relaxed">
              {/* Your long description text */}
              The Association of Korean-Canadian Scientists and Engineers
                    (AKCSE) is a non-profit organization established in 1986. It
                    serves mainly as a grounds for networking between Korean-Canadians
                    in the field to develop their full career potential. AKCSE
                    consists of 17 university school chapters and 12 local chapters
                    across the provinces of Canada, with its headquarters based in
                    Ontario. The chapters are divided based on different stages in
                    one's career, notably the undergraduate Young Generation (YG), the
                    Young Professionals (YP), and the local chapter. AKCSE is
                    affiliated with The Ministry of Science and ICT of the Korean
                    Government, the Korean Federation of Science & Technology
                    Societies, and many different organizations. With these
                    partnerships formed with reliable science and engineering
                    institutions in Korea, AKCSE proudly provides members with
                    experiences in conferences and research/networking forums held
                    annually. Additionally, students can apply for the KCSSF
                    Scholarship, granting 12 students scholarships valued up to
                    $3,000.
            </Label>
          </div>
        </div>
      </section>


      {/* Latest News */}
      <section className="flex flex-col w-full mt-10 md:mt-0 mb-10 md:mb-28 justify-center items-center text-center">
        <Label className="text-2xl font-outfit font-bold">Latest Events</Label>
        <div className="flex flex-wrap mt-2 gap-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full md:w-[360px] bg-white rounded-md items-center text-center p-4"
            >
              {/* Image Placeholder */}
              <Image
                src={event.image}
                alt={event.title}
                width={320}
                height={192}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold">{event.title}</h3>

              {/* Date */}
              <p className="mt-2 text-sm text-gray-500">{event.date}</p>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
     
     
      <footer className="w-full bg-white text-center py-6 border-t-1">
        {/* Text Section */}
        <div className="text-sm font-medium text-gray-700">
          <p>AKCSE McGill | AKCSE YG Chapter</p>
          <p>© All Rights Reserved | Website By AKCSE 2024 Executives</p>
        </div>
        {/* Icons Section */}
        <div className="flex justify-center mt-4 space-x-6">
          <FaTelegramPlane className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </footer>
    </>
  );
}
