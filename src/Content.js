// import images
import Hero_person from "./assets/images/Hero/pic.png";

import Java from "./assets/images/Skills/Java.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import js from "./assets/images/Skills/js.png";



import project1 from "./assets/images/projects/img6.png";
import project2 from "./assets/images/projects/img1.png";
import project3 from "./assets/images/projects/img2.png";
import project4 from "./assets/images/projects/img3.png";
import project5 from "./assets/images/projects/img4.png";
import project6 from "./assets/images/projects/img5.png";
import person_project from "./assets/images/projects/pro.png";



import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaHome } from "react-icons/Fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import {RiProjectorLine} from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    
    {
      link: "#projects",
       icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SHIVANI",
    LastName: "KUMARI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      
      {
        
        text: "Welcome to my web developer portfolio! I'm Shivani Kumari, a passionate and innovative web developer dedicated to creating seamless and captivating online experiences. ",
      },
      {
        count:"10+",
        text:"Projects Made in my career",
      }
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "",
        logo: Java,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "HTML",
        para: "",
        logo: html,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "CSS",
        para: "",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "",
        logo: js,
      },
    ],
    icon: MdArrowForward,
  },
  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "E-Commerce Website",
        image: project1,
      },
      {
        title: "Sorting Visualizer",
        image: project2,
      },
      {
        title: "Hotel Image Slider",
        image: project3,
      },
      {
        title: "Calculator",
        image: project4,
      }, 
      
      {
        title: "Visiting Card",
        image: project5,
      },
      {
        title: "Project Form",
        image: project6,
      },
    ],
  },
 
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hello! I'm Shivani Kumari, a passionate and ambitious web developer with a strong desire to create engaging and user-friendly digital experiences. I specialize in front-end technologies such as HTML, CSS, JavaScript, and modern frameworks like React. I also have a good understanding of back-end development using Node.js. I am currently seeking opportunities to apply my web development skills and contribute to exciting projects. Whether it's a short-term project or a full-time position, I am open to discussing how I can add value to your team. If you're looking for a dedicated web developer with a passion for creating exceptional user experiences, I'd love to hear from you! Thank you for considering me, and I look forward to the opportunity to work with you and contribute to your web development needs!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "pritykumari5408@gmail.com",
        icon: GrMail,
        link: "mailto:pritykumari5408@gmail.com",
      },
      {
        text: "+91 9693163575",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Hajipur, 844101, Bihar",
        icon: FaHome,
        
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
