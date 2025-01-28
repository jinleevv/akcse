import * as React from "react";
import { motion } from "framer-motion";
import { MenuLink } from "../../menuLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

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

export const MenuItem = ({ toggleOpen }: { toggleOpen: () => void }) => {
  const style = { border: `2px solid white` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="rounded-lg w-[200px] h-[45px] flex-1 mb-2" style={style}>
        <div className="flex w-full h-full justify-end">
          <Link href="/events" className="w-full">
            <Button
              onClick={toggleOpen}
              variant="ghost"
              className="w-full h-full text-white"
            >
              Events
            </Button>
          </Link>
        </div>
      </div>
      <div className="rounded-lg w-[200px] h-[45px] flex-1 mb-2" style={style}>
        <div className="flex w-full h-full justify-end">
          <Link href="/executives" className="w-full">
            <Button
              onClick={toggleOpen}
              variant="ghost"
              className="w-full h-full text-white"
            >
              Executives
            </Button>
          </Link>
        </div>
      </div>
      <div className="rounded-lg w-[200px] h-[45px] flex-1 mb-2" style={style}>
        <div className="flex w-full h-full justify-end">
          <Link href="/projects" className="w-full">
            <Button
              onClick={toggleOpen}
              variant="ghost"
              className="w-full h-full text-white"
            >
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </motion.li>
  );
};
