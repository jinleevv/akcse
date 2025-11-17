export interface Executive {
  icon: string;
  label: string;
  names: string[];
  images: {
    [name: string]: string[];
  };
  info: {
    [fullName: string]: {
      major: string;
      mbti: string;
      intro: string;
      instagram: string;
      linkedin: string;
      github?: string;
    };
  };
}

export const executiveMembers2024_25: Executive[] = [
  {
    icon: "💎",
    label: "Co-Presidents",
    names: ["Jinwon Lee", "Ahreum Lee"],
    images: {},
    info: {
      jinwon: {
        major: "Computer Science",
        mbti: "ENFJ",
        intro:
          "Hiii! I'm a U3 student at McGill U. I enjoy web development and 3D modeling because it lets me be creative. When I'm not doing projects, I play music and shred the slopes :)",
        instagram: "https://www.instagram.com/jinleevv/",
        linkedin: "https://www.linkedin.com/in/jinleevv/",
        github: "https://github.com/jinleevv",
      },
      ahreum: {
        major: "Computer Science & AI",
        mbti: "INFJ",
        intro:
          "Hello, I am a CS student interested in NLP, bioinformatics and AI. I dont have any hobbies at this point of life, but I am trying to do some sports with our fellow execs",
        instagram: "https://www.instagram.com/reummmii/",
        linkedin: "https://www.linkedin.com/in/ahreum-lee-1190a7215/",
        github: "https://github.com/alee020304",
      },
    },
  },
  {
    icon: "📢",
    label: "VP Communications",
    names: ["Minseo Park", "Dowoo Kim"],
    images: {},
    info: {
      minseo: {
        major: "Biochemistry",
        mbti: "ENFJ",
        intro:
          "Hello! I'm a U2 Biochemistry student at McGill. I am still exploring my future paths of different options, both research and industry. I am currently looking into forensic toxicology/science and environmental engineering. I love taking a walk to explore new places and trying new things I like (squash, watching soccer, singing at this point!).",
        instagram: "https://www.instagram.com/ldmins_eo/",
        linkedin: "https://www.linkedin.com/in/minseo-park-18295528b/",
      },
      dowoo: {
        major: "Statistics & Computer Science",
        mbti: "(I/E)NTP",
        intro:
          "Hi, i'm a U2 Statistics and Computer Science student at Mcgill and I'm mostly interested in Applied Mathematics/Statistics and Machine Learning. During my free time, I do Muay-Thai, watch soccer games or just chill out.",
        instagram: "https://www.instagram.com/dowoo.kim/",
        linkedin: "https://www.linkedin.com/in/dowoo-kim-805998250/",
        github: "https://github.com/dk1028",
      },
    },
  },
  {
    icon: "🏦",
    label: "VP Finance",
    names: ["Taewon Hwang", "Sungji Song"],
    images: {},
    info: {
      taewon: {
        major: "Computer Science",
        mbti: "ISTP",
        intro:
          "Hello, I'm a U3 Computer science student at McGill. I'm interested in machine learning. I like to play games and watch sports during free time.",
        instagram: "https://www.instagram.com/taewon.hwang02/?next=%2F",
        linkedin: "https://www.linkedin.com/in/taewonhwang/",
        github: "https://github.com/taewonhwang02",
      },
      sungji: {
        major: "Chemical Engineering",
        mbti: "ENTJ",
        intro:
          "Hi, I'm a U2 Chemecial engineering student at McGill University. While I am still exploring which specific areas of research I will be most interested in, I am excited to contribute to new discoveries in science. I enjoy listening to music and playing piano.",
        instagram: "https://www.instagram.com/sallysungjisong/",
        linkedin: "https://www.linkedin.com/in/sally-song-8718a5293/",
      },
    },
  },
  {
    icon: "🎉",
    label: "VP Events",
    names: ["Dana Lee", "Allison Kim"],
    images: {},
    info: {
      dana: {
        major: "Computer Science",
        mbti: "ENTJ",
        intro:
          "Hello! I am a U3 Computer Science(ex Biochem) student at Mcgill. I look forward to pursuing a career on web development and technical development for visual graphics! I enjoy playing instruments, cooking, drawing and crafting in my free time!",
        instagram: "https://www.instagram.com/danana_0304/?hl=en",
        linkedin: "www.linkedin.com/in/dana-lee-692019233",
        github: "https://github.com/danana0304",
      },
      allison: {
        major: "Computer Science",
        mbti: "I(N/S)TJ",
        intro:
          "Hello, I am a U1 Computer Science student at McGill University. I am looking to pursue a career in the data science field and am looking forward to learning more about it. In my free time, I enjoy playing video games and listening to music.",
        instagram:
          "https://www.instagram.com/ajyk12/profilecard/?igsh=dm1xOXQ0NXJ2OWxx",
        linkedin: "https://www.linkedin.com/in/allison-kim-7aa2152a1/",
        github: "https://github.com/ajyk12",
      },
    },
  },
  {
    icon: "🏠",
    label: "VP Internal",
    names: ["KangHyu Lee", "Chaeyeon Kang"],
    images: {},
    info: {
      kanghyu: {
        major: "Computer Science",
        mbti: "INTP",
        intro:
          "Hello, I'm a U2 CS student at McGill. I tend to stay home in my bed unless I have no choice!! I'm a Arts student still trying to figure out where to go when it comes to my career. ",
        instagram: "https://www.instagram.com/kanghyulee/",
        linkedin: "www.linkedin.com/in/kang-hyu-lee-7796a2332",
        github: "https://github.com/kanghyu-lee",
      },
      chaeyeon: {
        major: "Cognitive Science",
        mbti: "INFJ",
        intro:
          "Hello! I'm a second-year Cognitive Science student at McGill with a strong interest in biopharmaceuticals and the field of neuroscience. In my free time, I enjoy playing games and watching sports.",
        instagram:
          "https://www.instagram.com/w00mpaw/profilecard/?igsh=MTI0YnR2bzF2OWU0dg==",
        linkedin: "https://www.linkedin.com/in/chaeyeon-kang-039a1629a/",
        github: "https://github.com/srcyww",
      },
    },
  },
  {
    icon: "🌐",
    label: "VP External",
    names: ["ChaeYoung Kim"],
    images: {},
    info: {
      chaeyoung: {
        major: "Anatomy & Cell Biology",
        mbti: "ESTP",
        intro:
          "Hi! I am a U3 student at McGill University, majoring in Anatomy and Cell Biology, with aspirations to pursue a career in medicine. I also love to sing and play guitar.",
        instagram: "https://www.instagram.com/6.14000/",
        linkedin: "https://ca.linkedin.com/in/chae-young-kim-a28112268",
      },
    },
  },
  {
    icon: "🎓",
    label: "First Year Representative",
    names: ["Joongi Lee"],
    images: {},
    info: {
      joongi: {
        major: "Biomedical Sciences",
        mbti: "ESTP",
        intro:
          "Hi, I'm a McGill U0 Biomedical Science student. I'm currently interested in pursuing the field of medicine. I like to play and listen to classical music, play games like TFT, and explore Montreal during my spare time. ",
        instagram:
          "https://www.instagram.com/dl.wnsrl/profilecard/?igsh=MXFyMGF1dTczZWI5bw==",
        linkedin:
          "https://www.linkedin.com/in/joongi-lee-96864a326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
  },
];

export const executiveMembers2025_26: Executive[] = [
  {
    icon: "💎",
    label: "Co-Presidents",
    names: ["Minseo Park", "Taewon Hwang"],
    images: {},
    info: {
      minseo: {
        major: "Biochemistry",
        mbti: "ENFJ",
        intro:
          "Hello! I'm a U3 Biochemistry student at McGill. I am still exploring my future paths of different options, both research and industry. I am currently looking into forensic toxicology/science and pharmacology. I love taking a walk to explore new places and trying new things I like (jogging and reading at this point!).",
        instagram: "https://www.instagram.com/ldmins_eo/",
        linkedin: "https://www.linkedin.com/in/minseo-park-18295528b/",
      },
      taewon: {
        major: "Computer Science",
        mbti: "ISTP",
        intro:
          "Hello, I'm a U4 Computer Science student at McGill. My area of interest is software engineering and machine learning. During my free time I like to play sports and games",
        instagram: "https://www.instagram.com/taewon.hwang_02/",
        linkedin: "https://www.linkedin.com/in/taewonhwang/",
      },
    },
  },
  {
    icon: "📢",
    label: "VP Communications",
    names: ["Garim Yoo"],
    images: {},
    info: {
      garim: {
        major: "Accounting",
        mbti: "ESTP",
        intro:
          "Hello! I’m a U4 Accounting student at McGill, majoring in accounting. This year I’ll graduate and start my CPA journey. I'm excited to dive into the world of accounting, I’ll be joining Richter. In my free time, I love relaxing while watching YouTube at 2x speed!",
        instagram: "https://www.instagram.com/ldmins_eo/",
        linkedin: "https://www.linkedin.com/in/minseo-park-18295528b/",
      },
    },
  },
  {
    icon: "🏦",
    label: "VP Finance",
    names: ["Sungji Song", "Joongi Lee"],
    images: {},
    info: {
      sungji: {
        major: "Chemical Engineering",
        mbti: "ISTJ",
        intro:
          "Hi, I'm a U3 student in Chemecial engineering at McGill University. Although I'm still exploring which research direction I'd like to specialize in, I am enthusiastic about taking part in scientific research and innovation. In my free time, I love listening to music and playing piano.",
        instagram: "https://www.instagram.com/sallysungjisong/",
        linkedin: "https://www.linkedin.com/in/sally-song-8718a5293/",
      },
      joongi: {
        major: "Computer Science",
        mbti: "ESTP",
        intro:
          "Hi, I'm a U1 student majoring in Computer Science AI and this is my second year as an AKCSE executive member. After graduating, I currently plan to pursue a career in quantitative finance. When I'm bored, I watch reels and send them to people.",
        instagram: "https://www.instagram.com/dl.wnsrl/",
        linkedin: "www.linkedin.com/in/joongi-lee-96864a326",
      },
    },
  },
  {
    icon: "🎉",
    label: "VP Events",
    names: ["Chaeyeon Kang", "Juyoun Bae", "Suelynn Lee"],
    images: {},
    info: {
      chaeyeon: {
        major: "Cognitive Neuroscience",
        mbti: "",
        intro:
          "Hello! I’m a U3 Cognitive Neuroscience student at McGill. My interests lie in medical science and understanding its impact on the human mind and body. Outside of academics, I love playing games and watching movies.",
        instagram: "https://www.instagram.com/ch0r0mii/",
        linkedin: "https://www.linkedin.com/in/chaeyeon-kang-039a1629a/",
      },
      juyoun: {
        major: "Bioengineering",
        mbti: "",
        intro:
          "Hello, my name is Juyoun and Im a U3 bioengineering student at McGill. I am passionate about biomanufacturing and I wish to learn more about the commerical aspect of the health care industry. I enjoy running and playing tennis in my free time.",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/juyoun-bae-1984b41a1/",
      },
      suelynn: {
        major: "Honours Mathematics",
        mbti: "",
        intro:
          "Hello!! I'm a U3 Mathematics student at McGill. My field of interest currently lies in algebra and number theory. When I'm not in class, you will probably find me somewhere in the Burnside Hall. Outside of school, I enjoy playing the violin and listening to classical music!",
        instagram: "https://www.instagram.com/asuelynn_lee/",
        linkedin: "https://www.linkedin.com/in/suelynn-lee/",
      },
    },
  },
  {
    icon: "🌐",
    label: "VP External",
    names: ["Myeongjin Lee"],
    images: {},
    info: {
      myeongjin: {
        major: "Computer Science",
        mbti: "",
        intro:
          "Hi, my name is Myeongjin. I’m a U2 Computer Science student, and I like playing soccer and video games",
        instagram: "https://www.instagram.com/mj1234501/",
        linkedin: "https://www.linkedin.com/in/myeongjin-lee-273096335/",
      },
    },
  },
  {
    icon: "🏠",
    label: "VP Internal",
    names: ["KangHyu Lee"],
    images: {},
    info: {
      kanghyu: {
        major: "Computer Science",
        mbti: "INTP",
        intro:
          "Hello,  I'm a U3 student currently majoring in Computer Science and minoring in Psychology. I'm honestly still catching up on a lot of prereqs so my schedule looks like a U2 schedule. I tend to not leave my room and my main hobby is video games.",
        instagram: "https://www.instagram.com/kanghyulee/",
        linkedin: "www.linkedin.com/in/kang-hyu-lee-7796a2332",
        github: "https://github.com/kanghyu-lee",
      },
    },
  },
  {
    icon: "🎓",
    label: "First Year Representative",
    names: ["Eunoo Choi"],
    images: {},
    info: {
      eunoo: {
        major: "Materials Engineering",
        mbti: "INFJ",
        intro:
          "Hi, I'm a U1 student majoring in Materials engineering. I enjoy playing and watching sports, especially baseball and soccer.",
        instagram: "https://www.instagram.com/eunoo.c._05",
        linkedin: "https://www.linkedin.com/in/eunoo-choi-710164391/",
      },
    },
  },
];

function loadImagesForMember24_25(executiveMembers: Executive[]) {
  executiveMembers.forEach((position) => {
    position.names.forEach((name) => {
      const firstName = name.split(" ")[0].toLowerCase(); // Use first name as key
      const images: string[] = [];

      // Example: Assume there are 3 images per member, adjust as needed
      for (let i = 1; i <= 3; i++) {
        // Add more imagePath per year
        const imagePath2024_25 = `/executives/20242025/${firstName}/image${i}.jpg`;
        images.push(imagePath2024_25);
      }

      // Store images in the dictionary with the member's first name as the key
      position.images[name] = images;
    });
  });
}
function loadImagesForMember25_26(executiveMembers: Executive[]) {
  executiveMembers.forEach((position) => {
    position.names.forEach((name) => {
      const firstName = name.split(" ")[0].toLowerCase(); // Use first name as key
      const images: string[] = [];

      // Example: Assume there are 3 images per member, adjust as needed
      for (let i = 1; i <= 3; i++) {
        // Add more imagePath per year
        const imagePath2024_25 = `/executives/20252026/${firstName}/image${i}.jpg`;
        images.push(imagePath2024_25);
      }

      // Store images in the dictionary with the member's first name as the key
      position.images[name] = images;
    });
  });
}

loadImagesForMember24_25(executiveMembers2024_25);
loadImagesForMember25_26(executiveMembers2025_26);

export const [pres, communications, finance, events, external, internal, fyr] =
  executiveMembers2024_25;
