"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  return (
    <>

    </>
  );
}
