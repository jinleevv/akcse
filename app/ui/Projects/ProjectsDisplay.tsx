"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projectsInfo = {
  AKCSE_McGill_Website: {
    image: "/AKCSE_McGill.png",
    project: "AKCSE McGill Website",
    contributers:
      "Jinwon Lee, Taewon Hwang, Dana Lee, Ahreum Lee, Junsoo Kim, Dowoo Kim, KangHyu Lee",
    purpose:
      "It aims to provide an platform where members can be easily updated with AKCSE events. It also encourages the members to contribute to the website to familiarize them with GitHub and web development. This project will ultimately create a community where members can learn to collaborate and improve their skill sets.",
    achievements:
      "The launch of AKCSE McGill enabled the successful development of a functional website, providing students with updates on events. As an evolving project, it creates an environment that fosters a community where individuals can contribute their inputs to the development of AKCSE McGill.",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, intitiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
  },
  Ed_Block: {
    image: "/projects/edblock/image1.jpg",
    project: "Ed Block",
    contributers: "Taewon Hwang, Ahreum Lee, Chaeyeon Kang, Seol Han",
    purpose:
      "Eating disorders (EDs) are a growing public health concern, significantly impacting individuals' physical, psychological, and emotional well-being. Studies show a rise in ED prevalence, particularly among younger demographics, with media playing a critical role in exacerbating these disorders. This project aims to address this issue by developing censoring tool that limits media content related to extreme diets, creating a safer online environment for vulnerable individuals, especially young audiences.",
    achievements:
      "We used different methods of preprocessing and machine learning models to test and compare results. Stop word removal along with Naive Bayes classifier proved to be the most effective. It achieved a maximum accuracy of 90% with the Naive Bayes classifier.",
    description:
      "As one of the biggest platforms for various groups to consume media, YouTube has one solution for censoring potentially harmful content: manual flagging by users. Taking one step further, the AKCSE Life Science (LS) and Computer Science (CS) divisions collaborated to develop a Chrome extension powered by machine learning (ML), specifically to automatically moderate YouTube content and help prevent ED-triggering videos.",
  },
  Orally: {
    image: "/projects/orally/image1.jpg",
    project: "Orally",
    contributers:
      "Emma Sihyun Lee, Yoon Choi, Minhui Roh, Taewon Hwang, Tevin Choi",
    purpose:
      "Many people are hesitant to visit their dentist due to dentophobia or the high cost of treatments, making it even more difficult for them to learn about oral health and manage their conditions. Orofacial pain can be exceptionally excruciating. It is, therefore, important to assess this pain in a timely manner to ensure that appropriate treatment is delivered promptly. Seeking medical help as soon as possible is crucial since the orofacial pain they suffer could also be a symptom of referred pain from other body parts.",
    achievements:
      "We were successfully able to develop an app that users can mentally prepare themselves for their visit, better understand their conditions, and learn more about the conditions they are suspected of having. This helps users to reduce anxiety and stress caused by dental visits and encourages users to seek appropriate treatment by providing a simple and efficient assessment tool of oral health symptoms, our app aims to help reduce oral health disparities and promote more significant oral health equity. Additionally, the app allows users to record their symptoms and pain level each day, which they can bring to their dentist for a more precise and accurate diagnosis.",
    description:
      "Orally is an app designed to address the oral health disparities that exist in our society and promote oral health equity. Many individuals hesitate to visit the dentist due to dentophobia or the high cost of treatments, resulting in inadequate oral health management. This app aims to empower users by providing them with a reliable assessment tool for orofacial pain and related conditions.",
  },
};

export default function ProjectsDisplay() {
  return (
    <section className="grid lg:grid-cols-2 w-full h-full gap-3">
      {Object.entries(projectsInfo).map(([projectName, details]) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex w-full rounded-lg border-1"
        >
          <div className="w-48 lg:w-96 h-72 overflow-hidden">
            <Image
              src={details.image}
              alt={projectName}
              width={400}
              height={400}
              className="flex w-96 h-72 items-center rounded-lg"
            />
          </div>
          <div className="w-full h-full mt-20 p-1 ">
            <Label className="font-bold">Project: </Label>
            <Label>{details.project}</Label> <br />
            <Label className="font-bold">Contributors: </Label>
            <Label>{details.contributers}</Label> <br />
            <div className="w-full h-full mt-5">
              <Link
                href={{
                  pathname: `/projects/${projectName}`,
                }}
                passHref
              >
                <Button variant="outline" className="w-full">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
