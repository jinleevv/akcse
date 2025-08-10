import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LiaArrowDownSolid } from "react-icons/lia";

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
      <section className="w-full">
        <div className="container mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 md:gap-56 items-center font-outfit">
          {/* Left side background glow */}
          <div className="absolute w-1/2 h-72 bg-[#dba35a] blur-[140px] -z-10 md:-ml-24"></div>

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <Label className="text-5xl md:text-7xl font-extrabold leading-tight">
              Welcome To
            </Label>

            <div className="h-56 w-56 md:h-80 md:w-80 lg:w-2/3 lg:h-2/3 -mt-10 -mb-10 md:-mt-20 md:-mb-20">
              <img
                src="/AKCSE_McGill.png"
                alt="AKCSE McGill"
                className="object-cover scale-150"
              />
            </div>

            <p className="text-base text-gray-600 max-w-xl mb-8">
              We are a vibrant community of Korean-Canadian McGill
              undergraduates.
            </p>

            <a
              href="https://linktr.ee/akcsemcgill"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 z-10"
            >
              <Button className="w-full px-8 py-3 text-base">
                Join AKCSE McGill
              </Button>
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* subtle glow */}
              <div className="aspect-square overflow-hidden rounded-full shadow-xl">
                <img
                  src="/mcgill_landscape.jpg"
                  alt="McGill Building"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Down chevron (desktop) */}
        <div className="hidden lg:flex justify-center mb-8">
          <motion.span
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 8px rgba(255,255,255,0.8)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
            aria-hidden
          >
            <LiaArrowDownSolid size={24} className="text-gray-400" />
          </motion.span>
        </div>
      </section>

      {/* WHAT IS AKCSE */}
      <section className="w-full">
        <div className="flex flex-col mx-auto px-4 py-12 lg:py-16 items-center text-center space-y-4">
          <Label className="text-xl md:text-2xl font-bold">
            What Is AKCSE?
          </Label>
          <div className="mx-auto max-w-7xl">
            <p className="text-base leading-relaxed text-gray-700">
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
              Government, the Korean Federation of Science &amp; Technology
              Societies, and many different organizations. With these
              partnerships formed with reliable science and engineering
              institutions in Korea, AKCSE proudly provides members with
              experiences in conferences and research/networking forums held
              annually. Additionally, students can apply for the KCSSF
              Scholarship, granting 12 students scholarships valued up to
              $3,000.
            </p>
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
                <img
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
    </>
  );
}
