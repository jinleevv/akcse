"use client";

import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./members";
import { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { LiaInstagram, LiaLinkedin, LiaGithub } from "react-icons/lia";
import { Button } from "@/components/ui/button";

export default function ExecutiveMembers() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col w-full h-full rounded-lg shadow-none">
      <div>
        <ul className="flex w-full list-none p-0 m-0 text-[14px] font-medium">
          {tabs.map((item) => (
            <li
              key={item.label}
              className="relative flex items-center justify-between cursor-pointer px-4 py-2 flex-1 min-w-0 rounded-t-lg hover:bg-gray-200"
              onClick={() => setSelectedTab(item)}
            >
              <span className="truncate">{`${item.icon} ${item.label}`}</span>
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <main className="flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ x: 100, opacity: 0 }} // Start from the right
            animate={{ x: 0, opacity: 1 }} // Move to its position with full opacity
            exit={{ x: -100, opacity: 0 }} // Fade out to the left
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-4 grid-cols-1 gap-4 p-4 w-full h-auto"
          >
            {Object.entries(selectedTab.images).map(([name, images]) => {
              const firstName = name.split(" ")[0].toLowerCase();
              return (
                <>
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
                    <div className="mt-1 col-span-2 h-60 w-full overflow-hidden">
                      <Image
                        src={images[2]}
                        alt={"image"}
                        width={1000}
                        height={500}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="grid">
                      <Label className="text-lg font-bold">
                        {selectedTab.label}
                      </Label>
                      <Label className="text-md">{name}</Label>
                      <div className="mt-2">
                        <Label className="text-sm font-medium">
                          Major: {selectedTab.info[firstName]["major"]}
                        </Label>{" "}
                        <br />
                        <Label className="text-sm font-medium">
                          MBTI: {selectedTab.info[firstName]["mbti"]}
                        </Label>{" "}
                        <br />
                        <Label className="flex w-full h-full text-sm font-medium mt-3">
                          {selectedTab.info[firstName]["intro"]}
                        </Label>{" "}
                        <br />
                      </div>
                    </div>

                    <div className="flex mt-2 gap-2 justify-end">
                      <a href={selectedTab.info[firstName]["instagram"]}>
                        <Button variant="ghost">
                          <LiaInstagram size={25} />
                        </Button>
                      </a>
                      <a href={selectedTab.info[firstName]["linkedin"]}>
                        <Button variant="ghost">
                          <LiaLinkedin size={25} />
                        </Button>
                      </a>
                      {selectedTab.info[firstName]["github"] ? (
                        <a href={selectedTab.info[firstName]["github"]}>
                          <Button variant="ghost">
                            <LiaGithub size={25} />
                          </Button>
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
