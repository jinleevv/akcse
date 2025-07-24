"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LiaArrowDownSolid } from "react-icons/lia";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
      <section className="flex flex-col lg:flex-row w-full h-full mt-7 lg:-mt-12 2xl:-mt-2">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 mt-14 lg:mt-0 h-fit flex flex-col justify-center items-center text-center translate-y-0 lg:translate-y-1/2">
          <div className="absolute w-full h-60 bg-[#dba35a] blur-[180px] -z-10"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="-space-y-5"
          >
            <div className="mt-6 md:mt-0">
              <div>
                <Label className="text-5xl md:text-7xl font-extrabold">
                  Welcome To
                </Label>
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
              <div className="w-full my-2 lg:my-4 px-6 lg:px-32">
                <Label className="text-base text-gray-500 ">
                  We Are A Vibrant Community Of Korean-Canadian McGill
                  Undergraduates.
                </Label>
              </div>

              <div className="flex w-full justify-center z-20">
                <Link
                  href="https://linktr.ee/akcsemcgill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-3/4 px-6 py-2">Join AKCSE McGill</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex w-full lg:w-1/2 h-fit justify-center items-center mt-8 lg:mt-0 lg:translate-y-1/3 lg:-space-x-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:-mt-96 ml-14"
          >
            <Image
              src="/mcgill_school_logo.png"
              alt="McGill Logo"
              height={120}
              width={120}
              className="hidden lg:object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex w-full lg:w-[500px] lg:h-[500px] rounded-3xl lg:rounded-full overflow-hidden"
          >
            <Image
              src="/mcgill_landscape.jpg"
              alt="McGill Building"
              width={800}
              height={800}
              className="object-cover w-[90%] h-auto mx-auto lg:w-full lg:h-full rounded-xl lg:rounded-none"
            />
          </motion.div>
        </div>
      </section>

      <motion.div
        className="hidden lg:flex justify-center mb-7 -mt-12"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 8px rgba(255,255,255,0.8)",
            "0 0 0px rgba(255,255,255,0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <LiaArrowDownSolid size={24} className="text-gray-400" />
      </motion.div>

      <section className="flex flex-col w-full h-fit px-4 lg:px-8 mt-10 lg:mt-0">
        {/* "What Is AKCSE?" Section */}
        <div className="flex flex-col w-full h-fit space-y-3 text-center mt-10">
          <Label className="w-full text-xl md:text-2xl font-outfit font-bold">
            What Is AKCSE?
          </Label>
          <div className="mx-auto w-5/6">
            <Label className="font-outfit text-base leading-relaxed">
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

      {/* Latest news */}
      <section className="flex flex-col w-full mt-24 mb-10 lg:mb-28 justify-center items-center text-center">
        <Label className="text-2xl font-outfit font-bold">Latest Events</Label>
        <div className="flex flex-wrap mt-2 gap-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full lg:w-[360px] bg-white rounded-md items-center justify-center text-center p-4"
            >
              <div className="w-full h-full justify-center items-center">
                {/* Image Placeholder */}
                <Image
                  src={event.image}
                  alt={event.title}
                  width={320}
                  height={192}
                  className="w-11/12 lg:w-full h-72 object-cover rounded-md mx-auto"
                />
                {/* Title */}
                <h3 className="mt-4 text-lg font-bold">{event.title}</h3>

                {/* Date */}
                <p className="mt-2 text-sm text-gray-500">{event.date}</p>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-700">
                  {event.description}
                </p>
              </div>
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
          <Link
            href="https://www.instagram.com/akcse_mcgill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/showcase/akcse-mcgill/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          </Link>
        </div>
      </footer>
    </>
  );
}
