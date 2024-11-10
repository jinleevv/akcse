"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid w-full lg:w-5/6 text-center m-auto"
    >
      <Label className="text-4xl font-bold">Welcome to AKCSE McGill</Label>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="w-5/6 text-center p-2 m-auto"
      >
        <Label className="text-md">
          We are a vibrant community of Korean-Canadian McGill undergraduates,
          diving into diverse fields with creativity, curiosity, and a spirit of
          adventure!
        </Label>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="mt-4"
      >
        <Link href="/about">
          <Button
            variant="outline"
            className="w-3/5 m-auto border-1.5 border-red-600 shadow-lg text-red-800 hover:text-red-900"
          >
            Join AKCSE McGill
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
