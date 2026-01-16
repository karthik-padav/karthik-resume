import {
  Call,
  Email,
  Github,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@/assets/icons";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const contants = {
  developerDetails: {
    name: "Karthik Padav",
    role: "Full Stack Developer",
    location: "Bangalore, India",
    desc: "Software Developer with over 9 years of experience, Specialising in React js/Next js. I enjoy creating user-friendly solutions and have a background in both Front-End and Back-End development. Whether it's building dynamic web applications or mobile solutions with React Native, I bring a passion for clean code and effective design to every project.",
  },
  profiles: [
    {
      name: "GitHub",
      url: "https://github.com/karthik-padav",
      icon: Github,
      tooltip: "GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karthik-padav/",
      icon: LinkedIn,
      tooltip: "LinkedIn",
    },
  ],
  contact: [
    {
      name: "WhatsApp",
      url: "whatsapp://send?text=``&phone=+919901373620",
      icon: WhatsApp,
      tooltip: "+919901373620",
    },
    {
      name: "Email",
      url: "mailto:karthikpadav@gmail.com",
      icon: Email,
      tooltip: "karthikpadav@gmail.com",
    },
    {
      name: "Call",
      url: "tel:+919901373620",
      icon: Call,
      tooltip: "+919901373620",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karthik-padav/",
      icon: LinkedIn,
      tooltip: "LinkedIn",
    },
    {
      name: "X",
      url: "https://x.com/buildx91",
      icon: Twitter,
      tooltip: "X",
    },
  ],
  experience: [
    {
      company: "Luxoft, Bangalore",
      active: "JANUARY 2023 - PRESENT",
      role: "Senior Software Engineer",
      li: [
        "High-performance application built using ReactJs v18, reduxjs/toolkit with redux thunk, React Hooks, Custom Hooks, React-Router, JavaScript, Ant design, and Formik",
        "Develop and maintain stable codebases.",
        "Conduct bug fixes and participate in code reviews.",
        "Ensure comprehensive documentation and reporting throughout the development lifecycle.",
        "Code merging and building/deploying the code to the central server.",
        "Agile Methodologies for incremental development to deliver better applications",
      ],
    },
    {
      company: "Tecnotree, Bangalore",
      active: "November 2019 - JANUARY 2023",
      role: "Senior Software Engineer",
      li: [
        "Develop high-performance application using ReactJs, Redux, React Hooks, React-Router, JavaScript, Html5, Material UI, and Formik",
        "Use of react-jsonschema-form to create A simple React component capable of using JSON Schema to declaratively build and customize web forms.",
        "Built reusable custom components for UX-library consisting of Accordion, Filters, DropDown, Modal PopUp, and Icons.",
        "Maintained high-level expertise in React state management strategies including Redux, and Redux Persist.",
        "Exclusively used React-Hooks to handle application life-cycle processes.",
        "Worked in Agile Methodologies for incremental development to deliver better applications",
      ],
    },
    {
      company: "The Fuller Life, Bangalore",
      active: "OCTOBER 2017 - AUGUST 2019",
      role: "Executive - Technology",
      li: [
        "Implementing a mobile-first approach to existing websites.",
        "Worked on several Health and wellness, and employee engagement websites using Vue js, React js, Redux, HTML5, Bootstrap, and Bulma.",
        "Designing and implementing HTML email templates and newsletters for marketing campaigns.",
      ],
    },
    {
      company: "Codecraft, Bangalore",
      active: "JANUARY 2016 - OCTOBER 2017",
      role: "Trainee Software Engineer",
      li: [
        "Design dynamic and multi-browser compatible web pages using HTML, CSS, Angular",
        "Communication-Timeline application about all Creative experiences between Creator and User/Fan using IONIC v1",
        "Dashboard for survey app using Angular, Bootstrap",
        "An application that helps you to book an ambulance during the time of a medical emergency using Template7 and JQuery",
        "Worked on the E-commerce website and on several Real Estate websites using HTML5 and Bootstrap",
      ],
    },
  ],
  skills: [
    {
      name: "Frontend",
      data: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Redux Thunk",
        "React Hooks",
        "Custom Hooks",
        "Vue.js",
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
      ],
    },
    { name: "Backend", data: ["Node.js", "Express", "REST APIs"] },
    { name: "mobile", data: ["React Native", "Ionic v1"] },
    { name: "testing", data: ["Vitest", "Jest", "React Testing Library"] },
    {
      name: "Tools & Others",
      data: [
        "Socket.io",
        "Formik",
        "react-jsonschema-form",
        "Photoshop",
        "Agile/Scrum",
      ],
    },
  ],
  projects: [
    {
      name: "Finance Log Book",
      stack: "Next js, better-auth, Tailwind CSS, shadcn, Nodejs",
      href: "https://financelb.com",
      description:
        "Track Expenses. Control Money. Build Better Financial Habits. ",
    },
    {
      name: "Profile Picture Maker",
      stack:
        "Next js, Next Auth, Tailwind CSS, shadcn, @imgly/background-removal, Hugging face",
      href: "https://www.imageflexstudio.com/profile-picture-maker",
      description:
        "Remove Background, Edit, And Customize Your Profile Picture in Seconds!",
    },
    {
      name: "Text Behind Image",
      stack:
        "Next js, Next Auth, Tailwind CSS, shadcn, @imgly/background-removal, Hugging face, konvajs",
      href: "https://www.imageflexstudio.com/text-behind-image",
      description:
        "Create stunning text behind image designs in seconds—free, unlimited, and hassle-free!",
    },
    {
      name: "Image Compressor",
      stack: "Next js, Next Auth, Tailwind CSS, shadcn",
      href: "https://www.imageflexstudio.com/compress-image",
      description:
        "Compress Image Files Effortlessly — Compress Image Online For Free Without Compromising Quality!",
    },
    {
      name: "Quick Logo",
      stack: "Next js, Next Auth, Tailwind CSS, shadcn",
      href: "https://quicklogo.vercel.app/",
      description:
        "Create Stunning Logos In Seconds. Design Your Perfect Logo Instantly - No Design Skills Required!",
    },
    {
      name: "Movies And TV Shows",
      stack: "React js, Next js, Material UI",
      href: "https://moviedb-hufzn3dpu-karthik-padav.vercel.app/",
      description:
        "List of all new Movies and TV shows with ratings and reviews. All contents are fetched from TMDB",
    },
    {
      name: "The Color Picker",
      stack: "React js, Next js, Tailwind CSS",
      href: "https://color-palettes-3o1p3pp5c-karthik-padav.vercel.app/",
      description:
        "Color patterns inspired by thousands of beautiful color schemes.",
    },
  ],
};
