"use client";

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function HearderText() {
  return (
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
  );
}
