"use client";

import { executiveMembers } from "./members";
import Image from "next/image";
import { LiaInstagram, LiaLinkedin, LiaGithub } from "react-icons/lia";
import { motion } from "framer-motion";

export default function ExecutiveMembers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="-mt-4 w-full flex flex-col space-y-10"
    >
      {executiveMembers.map((role) => (
        <section key={role.label}>
          {/* Section heading */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
            <div>{role.icon}</div>
            <div>{role.label}</div>
          </h2>

          {/* Grid of people in this role */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full h-auto">
            {role.names.map((fullName) => {
              // normalize to use as key into images/info maps
              const firstName = fullName.split(" ")[0].toLowerCase();
              const images: string[] = role.images[fullName] || [];
              const info = role.info[firstName];

              return (
                <div
                  key={fullName}
                  className="border rounded-2xl flex flex-col p-2"
                >
                  {/* Images */}
                  <div className="w-full h-full grid">
                    <div className="grid grid-cols-2 gap-1 h-full w-full">
                      <Image
                        src={images[0]}
                        alt={"image"}
                        width={500}
                        height={240}
                        className="object-cover rounded-lg w-full h-full"
                      />
                      <Image
                        src={images[1]}
                        alt={"image"}
                        width={500}
                        height={240}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    {/* <div className="mt-1 col-span-2 h-60 w-full overflow-hidden">
                      <Image
                        src={images[2]}
                        alt={"image"}
                        width={1000}
                        height={500}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div> */}
                  </div>

                  {/* Text */}
                  <div className="mt-4 flex-1 flex flex-col">
                    <span className="font-bold">{fullName}</span>
                    <span className="text-sm">Major: {info.major}</span>
                    <span className="text-sm">MBTI: {info.mbti}</span>
                    <p className="mt-2 mb-4 text-sm flex-1">{info.intro}</p>

                    {/* Social */}
                    <div className="mt-auto flex gap-2.5 justify-end">
                      <a href={info.instagram} target="_blank" rel="noreferrer">
                        <LiaInstagram size={22} />
                      </a>
                      <a href={info.linkedin} target="_blank" rel="noreferrer">
                        <LiaLinkedin size={22} />
                      </a>
                      {info.github && (
                        <a href={info.github} target="_blank" rel="noreferrer">
                          <LiaGithub size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </motion.div>
  );
}
