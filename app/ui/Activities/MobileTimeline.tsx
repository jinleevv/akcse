"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const events = {
  "MTL Korean Youth Camp": {
    event: "MTL Korean Youth Camp",
    date: "August 31 - September 1st 2024",
    description:
      "The annual mentorship event brought together 60 participants and 32 mentors to provide guidance on how to navigate their professional journeys.",
    image1: "/activities/Youth Camp/image1.jpg",
    image2: "/activities/Youth Camp/image2.jpg",
    image3: "/activities/Youth Camp/image3.jpg",
  },
  "Orientation Night": {
    event: "Orientation Night",
    date: "September 20th 2024",
    description:
      "Great opportunity for new and returning students to connect with fellow comrades through fun activities.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Beyond Boundaries 2024": {
    event: "Beyond Boundaries 2024",
    date: "November 2nd 2024",
    description:
      "Networking opportunity for participants from across Eastern Canada to showcase projects and exchange ideas.",
    image1: "/activities/minickc/image1.jpg",
    image2: "/activities/minickc/image2.jpg",
    image3: "/activities/minickc/image3.jpg",
  },
  "Ideathon": {
    event: "Ideathon",
    date: "TBD",
    description:
      "Students unleash their creativity and technical skills during a brainstorming of clever applications and websites. ",
    image1: "/activities/Ideathon/image1.jpg",
    image2: "/activities/Ideathon/image2.jpg",
    image3: "/activities/Ideathon/image3.jpg",
  },
  "Christmas Party": {
    event: "Christmas Party",
    date: "TBD",
    description:
      "Celebration marking the end of the semester for AKCSE members. Unwind and relax after a stressful semester.  ",
    image1: "/activities/Christmas/image1.jpg",
    image2: "/activities/Christmas/image2.jpg",
    image3: "/activities/Christmas/image3.jpg",
  },
  "YG Seminar": {
    event: "YG Seminar",
    date: "TBD",
    description:
      "Opportunity for students to gain an image of what it’s like to be in research or industry by listening to their journey. ",
    image1: "/activities/Seminar/image1.jpg",
    image2: "/activities/Seminar/image3.jpg",
    image3: "/activities/Seminar/image3.jpg",
  },
  "Meet Your Mentor": {
    event: "Meet Your Mentor",
    date: "TBD",
    description:
      "Mentoring event aimed at creating a networking space between students and professionals from various fields.",
    image1: "/activities/MYM/image1.jpg",
    image2: "/activities/MYM/image2.jpg",
    image3: "/activities/MYM/image3.jpg",
  },
};

export default function MobileTimeline() {
  return (
    <section className="mt-3">
      <VerticalTimeline lineColor="black" animate={true}>
      <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.0, ease: "easeOut" }}
        >       
            <VerticalTimelineElement
              visible={true}
              //key={eventKey}
              date={events["MTL Korean Youth Camp"].date}
              iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
              className=""
            >
              <h3 className="vertical-timeline-element-title">{events["MTL Korean Youth Camp"].event}</h3>
              <p>{events["MTL Korean Youth Camp"].description}</p>
              <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
              <Image
                        src={events["MTL Korean Youth Camp"].image2}
                        alt={"image"}
                        width={500}
                        height={240}
                        className="object-cover rounded-lg w-full h-full"
                      />
                      <Image
                        src={events["MTL Korean Youth Camp"].image3}
                        alt={"image"}
                        width={500}
                        height={240}
                        className="object-cover rounded-lg w-full h-full"
                      />             
              </div>              
            </VerticalTimelineElement>
          </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}>

            <VerticalTimelineElement
              visible={true}
               
                date={events["Orientation Night"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["Orientation Night"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["Orientation Night"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["Orientation Night"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
              
            </VerticalTimelineElement>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
            <VerticalTimelineElement
              visible={true}
               
                date={events["Beyond Boundaries 2024"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["Beyond Boundaries 2024"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["Beyond Boundaries 2024"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["Beyond Boundaries 2024"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
              
            </VerticalTimelineElement>
            </motion.div>
            
            <VerticalTimelineElement
              visible={true}
               
                date={events["Ideathon"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["Ideathon"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["Ideathon"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["Ideathon"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
               
                date={events["Christmas Party"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["Christmas Party"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["Christmas Party"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["Christmas Party"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
               
                date={events["YG Seminar"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["YG Seminar"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["YG Seminar"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["YG Seminar"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              visible={true}
               
                date={events["Meet Your Mentor"].date}
                iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
                className=""
              >
                <h3 className="vertical-timeline-element-title">{events["Meet Your Mentor"].event}</h3>
                <p>{events["MTL Korean Youth Camp"].description}</p>
                <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                          src={events["Meet Your Mentor"].image2}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />
                        <Image
                          src={events["Meet Your Mentor"].image3}
                          alt={"image"}
                          width={500}
                          height={240}
                          className="object-cover rounded-lg w-full h-full"
                        />             
                </div> 
            </VerticalTimelineElement>
            
     

          
        
      </VerticalTimeline>
    </section>
  );
}
