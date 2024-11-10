"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const newsItems = [
  {
    title: "Ideathon Registration Form is Out!",
    description:
      "Ideathon registration form is out! Register now to join the event and showcase your ideas. Don't miss out on this opportunity.",
    link: "https://example.com/registration",
    deadline: "November 22nd, 2024",
  },
  {
    title: "Upcoming Hackathon",
    description:
      "Prepare yourself for the upcoming hackathon! Bring your creativity and coding skills to the table.",
    link: "https://example.com/hackathon",
    deadline: "December 5th, 2024",
  },
  {
    title: "New Workshop Announced",
    description:
      "Join our latest workshop to learn about new trends in technology. Registration is now open!",
    link: "https://example.com/workshop",
    deadline: "December 10th, 2024",
  },
];

export default function NewMainLogo() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[650px] -mt-28 -ml-24"
      >
        <Image
          src="/AKCSE_McGill.png"
          alt="AKCSE McGill"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative -mt-16 p-4 bg-white rounded-lg w-[650px] h-[150px] mx-auto">
        <AnimatePresence initial={false}>
          {newsItems.map(
            (item, index) =>
              index === currentNewsIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute p-4 bg-white rounded-lg shadow-lg border border-orange-300 z-10"
                >
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between text-sm">
                    <a href={item.link} className="text-blue-600 underline">
                      Registration Link
                    </a>
                    <span className="font-semibold">
                      Deadline: {item.deadline}
                    </span>
                  </div>
                </motion.div>
              )
          )}

          {/* Previous element at the back */}
          <motion.div
            key={`prev-${
              (currentNewsIndex - 1 + newsItems.length) % newsItems.length
            }`}
            initial={{ opacity: 0.4, y: -20, scale: 0.9 }}
            animate={{ opacity: 0.4, y: 0, scale: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full p-4 -top-7 bg-white rounded-lg shadow-lg border border-orange-300"
            style={{ filter: "blur(1px)", transform: "translateY(30px)" }}
          >
            <h4 className="font-bold text-md mb-2">
              {
                newsItems[
                  (currentNewsIndex - 1 + newsItems.length) % newsItems.length
                ].title
              }
            </h4>
          </motion.div>

          {/* Next element at the back */}
          <motion.div
            key={`next-${(currentNewsIndex + 1) % newsItems.length}`}
            initial={{ opacity: 0.4, y: 20, scale: 0.9 }}
            animate={{ opacity: 0.4, y: 0, scale: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full p-4 -bottom-14 bg-white rounded-lg shadow-lg border border-orange-300"
            style={{ filter: "blur(1px)", transform: "translateY(-30px)" }}
          >
            <h4 className="font-bold text-md mb-2">
              {newsItems[(currentNewsIndex + 1) % newsItems.length].title}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
