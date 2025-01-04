import { Label } from "@/components/ui/label";
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

export default function RotateNews() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-4 bg-white rounded-lg w-[650px] h-[150px] mx-auto">
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
                className="absolute p-4 bg-white rounded-lg shadow-lg border border-[#D27218] z-10"
              >
                <div className="flex w-full h-full -ml-2">
                  <img src="/rotate-icon.png" className="h-9 w-12" />
                  <Label className="font-outfit font-bold text-lg mb-auto mt-auto">
                    {item.title}
                  </Label>
                </div>
                <Label className="font-outfit text-sm mb-3">
                  {item.description}
                </Label>
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
          className="absolute w-full p-4 -top-7 bg-white rounded-lg shadow-lg border border-[#D27218]"
          style={{ filter: "blur(1px)", transform: "translateY(30px)" }}
        >
          <div className="flex w-full h-full -ml-2">
            <img src="/rotate-icon.png" className="h-9 w-12" />
            <Label className="font-outfit font-bold text-md mb-auto mt-auto">
              {
                newsItems[
                  (currentNewsIndex - 1 + newsItems.length) % newsItems.length
                ].title
              }
            </Label>
          </div>
          <Label className="font-outfit text-sm mb-3">
            {
              newsItems[
                (currentNewsIndex - 1 + newsItems.length) % newsItems.length
              ].description
            }
          </Label>
        </motion.div>

        {/* Next element at the back */}
        <motion.div
          key={`next-${(currentNewsIndex + 1) % newsItems.length}`}
          initial={{ opacity: 0.4, y: 20, scale: 0.9 }}
          animate={{ opacity: 0.4, y: 0, scale: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full p-4 -bottom-14 bg-white rounded-lg shadow-lg border border-[#D27218]"
          style={{ filter: "blur(1px)", transform: "translateY(-30px)" }}
        >
          <div className="flex w-full h-full -ml-2">
            <img src="/rotate-icon.png" className="h-9 w-12" />
            <Label className="font-outfit font-bold text-md mb-auto mt-auto">
              {newsItems[(currentNewsIndex + 1) % newsItems.length].title}
            </Label>
          </div>
          <Label className="font-outfit text-sm mb-3">
            {newsItems[(currentNewsIndex + 1) % newsItems.length].description}
          </Label>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
