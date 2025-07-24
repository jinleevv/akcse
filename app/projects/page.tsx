"use client";

import { Label } from "@/components/ui/label";
import ProjectsDisplay from "../ui/Projects/ProjectsDisplay";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="w-full h-full p-3 gap-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="p-4"
      >
        <Label className="text-3xl">AKCSE McGill Projects</Label> <br />
        <Label className="text-lg">
          Showcasing projects done by AKCSE McGill members
        </Label>
      </motion.div>
      <div className="mt-2 p-4">
        <ProjectsDisplay />
      </div>
    </section>
  );
}
