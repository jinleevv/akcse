"use client";

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CardsSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const cards = [
    {
      id: 1,
      title: "AKCSE",
      icon: <Image src="/headquarter.png" width={80} height={70} alt="AKCSE" />,
      content_title: "What is AKCSE?",
      content:
        "The Association of Korean-Canadian Scientists and Engineers (AKCSE) is a prominent organization that brings together Korean-Canadian engineers, scientists, and professionals across Canada. AKCSE serves as a hub for fostering collaboration, sharing knowledge, and supporting career growth. Its mission is to empower members through networking, mentorship, and leadership opportunities, ensuring they become influential leaders in their respective fields. \n\n AKCSE has a strong commitment to promoting STEM education and advancing science and engineering for societal benefit. It supports members at different stages, from students in the Young Generation (YG) chapters to professionals in the Young Professional (YP) chapters. These chapters provide access to resources, mentorship, and community-driven activities that enrich personal and professional development, encouraging innovation, leadership, and community involvement across Canada.",
    },
    {
      id: 2,
      title: "Young Generation",
      icon: <Image src="/yg.png" width={80} height={70} alt="AKCSE" />,
      content_title: "YG School Chapter in AKCSE",
      content:
        "The Young Generation National (YGN) School Chapter under AKCSE (Association of Korean-Canadian Scientists and Engineers) aims to build a close-knit community among undergraduate students across Canada. YG chapters foster a collaborative environment, providing Korean-Canadian students with networking opportunities, support for personal and professional growth, and inter-chapter cooperation between university branches. As of January 2023, the YG School Chapter includes 17 branches across major universities in Canada.\n\nThe AKCSE McGill Chapter is part of the YG School Chapter network, dedicated to connecting Korean-Canadian students at McGill University. The McGill Chapter provides opportunities for members to engage in networking, personal development, and a variety of social and professional activities, supporting a vibrant and cohesive community.",
    },
    {
      id: 3,
      title: "Young Professionals",
      icon: <Image src="/yp.png" width={80} height={70} alt="AKCSE" />,
      content_title: "Young Professionals in AKCSE",
      content:
        "The Young Professionals (YP) division of AKCSE serves as a platform for Korean-Canadian professionals in science, engineering, and related fields to connect, collaborate, and share knowledge and experiences. It fosters the development of social networks among members, creating opportunities for both personal and professional growth. The YP division provides a space where members can promote their expertise in science and engineering, and engage in continuous collaboration with university chapters and regional branches across Canada.\n\nAs of January 2023, the YP division consists of 8 regional branches, including locations like Atlantic, Manitoba, Quebec, and Greater Toronto and Lake Ontario. The YP division aims to create a broad network of support and opportunities for members throughout the country, promoting mentorship, career advancement, and collaboration in a variety of initiatives and projects. By bridging the gap between early professionals and more experienced mentors, YP helps young professionals grow into future leaders in their fields.",
    },
    {
      id: 4,
      title: "Local Chapter",
      icon: <Image src="/local.png" width={80} height={70} alt="AKCSE" />,
      content_title: "Local Chapter in AKCSE",
      content:
        "The Local Chapters of AKCSE are organized across Canada to support regional networking and collaboration among Korean-Canadian professionals and students. The chapters are named to clearly define their jurisdiction and maximize coverage of their respective areas, including cities and universities. These chapters create a cohesive environment that encourages a sense of belonging, offering opportunities for members to develop connections within their local communities and engage in social, academic, and professional activities.\n\nThe primary goal of these chapters is to foster a supportive community, provide networking opportunities, and facilitate cooperation between members. Each chapter operates under official regional names, such as “National Capital Region” or “Mainland British Columbia,” ensuring clarity and inclusivity in their outreach efforts. The Local Chapters serve as vital extensions of AKCSE’s national initiatives, adapting programs to fit local contexts while retaining the organization’s overarching mission to connect, educate, and support its members.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center gap-6">
      <div className="flex w-full h-full justify-center gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="w-1/4 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
            onClick={() =>
              setSelectedCard(card.id === selectedCard ? null : card.id)
            }
            initial={{ y: 0 }}
            animate={{
              y: selectedCard === card.id ? -10 : 0, // Lift card up when selected
              boxShadow:
                selectedCard === card.id
                  ? "0px 8px 15px rgba(0, 0, 0, 0.2)"
                  : "0px 4px 10px rgba(0, 0, 0, 0.1)", // Increase shadow for selected card
            }}
            whileHover={{
              y: -10,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            }} // Lift card when hovered
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="flex justify-center">{card.icon}</p>
            <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedCard && (
        <motion.div
          key={selectedCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full p-5 mt-4 bg-white rounded-lg shadow-lg"
        >
          <div className="w-full h-full text-left">
            <Label className="text-2xl">
              {cards.find((card) => card.id === selectedCard)?.content_title}
            </Label>
          </div>
          <br />
          <div className="w-full h-full text-left">
            {cards
              .find((card) => card.id === selectedCard)
              ?.content.split("\n")
              .map((line, index) => (
                <Label key={index}>
                  {line}
                  <br />
                </Label>
              ))}
          </div>
        </motion.div>
      )}
    </div>
    
  );
}
