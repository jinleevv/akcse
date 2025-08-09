import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function ProjectsInfo() {
  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full lg:w-1/2 h-full"
      >
        <Label className="text-lg">AKCSE McGill Website</Label> <br />
        <img
          src="/projects/akcseWebsite/image1.jpg"
          width={400}
          height={400}
          alt="AKCSE Website"
          className="w-full h-80 rounded-lg border shadow-lg p-1 mb-2"
        />
        <Label className="font-bold">Project Lead: </Label>
        <Label className="font-normal">Jinwon Lee</Label> <br />
        <Label className="font-bold">Contributers: </Label>
        <Label className="font-normal">
          Taewon Hwang, Ahreum Lee, Dana Lee
        </Label>
        <br />
        <Label className="font-bold">Purpose: </Label>
        <Label className="font-normal">
          It aims to provide an platform where members can be easily updated
          with AKCSE events. It also encourages the members to contribute to the
          website to familiarize them with GitHub and web development. This
          project will ultimately create a community where members can learn to
          collaborate and improve their skill sets.
        </Label>
        <br />
        <Label className="font-bold">Achievements: </Label>
        <Label className="font-normal">
          The launch of AKCSE McGill enabled the successful development of a
          functional website, providing students with updates on events. As an
          evolving project, it creates an environment that fosters a community
          where individuals can contribute their inputs to the development of
          AKCSE McGill.
        </Label>
        <br />
        <Label className="font-bold">Description: </Label>
        <Label className="font-normal">
          AKCSE McGill is a website that students within the student body
          collaboratively create. The website serves as a space where
          individuals can be informed about events, intitiatives, and updates
          within AKCSE; this platform also offers hands-on experiences for
          members to gain learning opportunities through web development and
          GitHub Collaboration both within and outside the club.
        </Label>{" "}
        <br />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        className="w-full lg:w-1/2 h-full mt-7 lg:mt-0"
      >
        <Label className="text-lg">Ed Block</Label> <br />
        <img
          src="/projects/akcseWebsite/edblock.jpg"
          width={400}
          height={400}
          alt="AKCSE Website"
          className="w-full h-80 rounded-lg border shadow-lg p-1 mb-2"
        />
        <Label className="font-bold">Members: </Label>
        <Label className="font-normal">
          Taewon Hwang, Ahreum Lee, Chaeyeon Kang, Seol Han
        </Label>{" "}
        <br />
        <Label className="font-bold">Purpose: </Label>
        <Label className="font-normal">
          Eating disorders (EDs) are a growing public health concern,
          significantly impacting individuals' physical, psychological, and
          emotional well-being. Studies show a rise in ED prevalence,
          particularly among younger demographics, with media playing a critical
          role in exacerbating these disorders. This project aims to address
          this issue by developing censoring tool that limits media content
          related to extreme diets, creating a safer online environment for
          vulnerable individuals, especially young audiences.
        </Label>
        <br />
        <Label className="font-bold">Achievements: </Label>
        <Label className="font-normal">
          We used different methods of preprocessing and machine learning models
          to test and compare results. Stop word removal along with Naive Bayes
          classifier proved to be the most effective. It achieved a maximum
          accuracy of 90% with the Naive Bayes classifier.
        </Label>
        <br />
        <Label className="font-bold">Description: </Label>
        <Label className="font-normal">
          As one of the biggest platforms for various groups to consume media,
          YouTube has one solution for censoring potentially harmful content:
          manual flagging by users. Taking one step further, the AKCSE Life
          Science (LS) and Computer Science (CS) divisions collaborated to
          develop a Chrome extension powered by machine learning (ML),
          specifically to automatically moderate YouTube content and help
          prevent ED-triggering videos.
        </Label>{" "}
        <br />
      </motion.div>
    </>
  );
}
