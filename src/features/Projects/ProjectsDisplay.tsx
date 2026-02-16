import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface Project {
  image: string;
  project: string;
  contributers: string;
  purpose: string;
  achievements: string;
  description: string;
  link: string;
}

const projectsInfo : Record<string, Project> = {
  AKCSE_McGill_Website: {
    image: "/AKCSE_McGill.webp",
    project: "AKCSE McGill Website",
    contributers:
      "Jinwon Lee, Taewon Hwang, Dana Lee, Ahreum Lee, Junsoo Kim, Dowoo Kim, KangHyu Lee",
    purpose:
      "It aims to provide an platform where members can be easily updated with AKCSE events. It also encourages the members to contribute to the website to familiarize them with GitHub and web development. This project will ultimately create a community where members can learn to collaborate and improve their skill sets.",
    achievements:
      "The launch of AKCSE McGill enabled the successful development of a functional website, providing students with updates on events. As an evolving project, it creates an environment that fosters a community where individuals can contribute their inputs to the development of AKCSE McGill.",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, intitiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
    link: "https://github.com/jinleevv/akcse",
  },
  Ed_Block: {
    image: "/projects/edblock/image1.webp",
    project: "Ed Block",
    contributers: "Taewon Hwang, Ahreum Lee, Chaeyeon Kang, Seol Han",
    purpose:
      "Eating disorders (EDs) are a growing public health concern, significantly impacting individuals' physical, psychological, and emotional well-being. Studies show a rise in ED prevalence, particularly among younger demographics, with media playing a critical role in exacerbating these disorders. This project aims to address this issue by developing censoring tool that limits media content related to extreme diets, creating a safer online environment for vulnerable individuals, especially young audiences.",
    achievements:
      "We used different methods of preprocessing and machine learning models to test and compare results. Stop word removal along with Naive Bayes classifier proved to be the most effective. It achieved a maximum accuracy of 90% with the Naive Bayes classifier.",
    description:
      "As one of the biggest platforms for various groups to consume media, YouTube has one solution for censoring potentially harmful content: manual flagging by users. Taking one step further, the AKCSE Life Science (LS) and Computer Science (CS) divisions collaborated to develop a Chrome extension powered by machine learning (ML), specifically to automatically moderate YouTube content and help prevent ED-triggering videos.",
    link: "https://github.com/TaewonHwang02/Akcse_project2024",
  },
  Orally: {
    image: "/projects/orally/image1.webp",
    project: "Orally",
    contributers:
      "Emma Sihyun Lee, Yoon Choi, Minhui Roh, Taewon Hwang, Tevin Choi, Chaeyoung Kim, Chaeyeon Kang, Dayoon Chang, Sarah Hwang, Hannah Cho",
    purpose:
      "Many people are hesitant to visit their dentist due to dentophobia or the high cost of treatments, making it even more difficult for them to learn about oral health and manage their conditions. Orofacial pain can be exceptionally excruciating. It is, therefore, important to assess this pain in a timely manner to ensure that appropriate treatment is delivered promptly. Seeking medical help as soon as possible is crucial since the orofacial pain they suffer could also be a symptom of referred pain from other body parts.",
    achievements:
      "We were successfully able to develop an app that users can mentally prepare themselves for their visit, better understand their conditions, and learn more about the conditions they are suspected of having. This helps users to reduce anxiety and stress caused by dental visits and encourages users to seek appropriate treatment by providing a simple and efficient assessment tool of oral health symptoms, our app aims to help reduce oral health disparities and promote more significant oral health equity. Additionally, the app allows users to record their symptoms and pain level each day, which they can bring to their dentist for a more precise and accurate diagnosis.",
    description:
      "Orally is an app designed to address the oral health disparities that exist in our society and promote oral health equity. Many individuals hesitate to visit the dentist due to dentophobia or the high cost of treatments, resulting in inadequate oral health management. This app aims to empower users by providing them with a reliable assessment tool for orofacial pain and related conditions.",
    link: "https://github.com/emshlee/orally",
  },
};

export default function ProjectsDisplay() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full h-full p-4 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {Object.entries(projectsInfo).map(([projectName, details]) => (
          <ProjectCard
            key={projectName}
            image={details.image}
            title={details.project}
            contributors={details.contributers}
            // Combining purpose and description or just using description as main text
            description={details.description} 
            link={details.link}
          />
        ))}
      </div>
    </motion.section>
  );
}
