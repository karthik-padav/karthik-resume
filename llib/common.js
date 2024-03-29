export async function getData(url) {
  let data = await fetch(url);
  data = await data.json();
  data = {
    developer_details: {
      name: { title: "Name", data: "Karthik Padav" },
      designation: {
        title: "Designation",
        data: "Senior Software Engineer",
      },
      dob: { title: "DOB", data: "12 January 1991" },
      email: { title: "Email", data: "karthikpadav@gmail.com" },
      location: { title: "Location", data: "Bangalore" },
      contact_number: { title: "Contact", data: "+91 9901373620" },
    },
    menu: [
      { code: "HOME", url: "/" },
      { code: "EXPERIENCE", title: "Experience", url: "/experience" },
      { code: "PROJECTS", title: "Projects", url: "/projects" },
    ],
    about_me: [
      {
        heading: "About me",
        content: [
          "I'am a Software Developer with over experience_time_stamp years of experience, Specialising in React.js. I enjoy creating user-friendly solutions and have a background in both Front-End and Back-End development. Whether it's building dynamic web applications or mobile solutions with React Native, I bring a passion for clean code and effective design to every project.",
        ],
      },
    ],

    education_histort: [
      {
        title: "INTERNET ACADEMY",
        info: [
          "2015",
          "Certified HTML5, CSS3 and JavaScript developer from Internet academy ( INTERNET ACADEMY is a member of W3C )",
        ],
      },
      {
        title: "BACHELOR OF ENGINEERING IN COMPUTER SCIENCE",
        info: [
          "2012 - 2015",
          "Shree Devi Institute of Technology, Mangalore (VTU, Belgaum)",
        ],
      },
      {
        title: "DIPLOMA IN COMPUTER SCIENCE",
        info: ["2009 - 2012", "P.A Polytechnic (DTE, Karnataka)"],
      },
    ],

    work_history: [
      {
        title: "Luxoft, Bangalore",
        active: "JANUARY 2023 - PRESENT",
        info: ["Senior Software Engineer"],
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
        title: "Tecnotree, Bangalore",
        active: "November 2019 - JANUARY 2023",
        info: ["Senior Software Engineer"],
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
        title: "The Fuller Life, Bangalore",
        active: "OCTOBER 2017 - AUGUST 2019",
        info: ["Executive - Technology"],
        li: [
          "Implementing a mobile-first approach to existing websites.",
          "Worked on several Health and wellness, and employee engagement websites using Vue js, React js, Redux, HTML5, Bootstrap, and Bulma.",
          "Designing and implementing HTML email templates and newsletters for marketing campaigns.",
        ],
      },
      {
        title: "Codecraft technologies, Bangalore",
        active: "JANUARY 2016 - OCTOBER 2017",
        info: ["Trainee Software Engineer"],
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
      { lang: "React js/Redux", percentage: "70%" },
      { lang: "Next js", percentage: "70%" },
      { lang: "Node js", percentage: "40%" },
      { lang: "HTML", percentage: "95%" },
      { lang: "Css3", percentage: "95%" },
      { lang: "Javascript/jQuery", percentage: "80%" },
      { lang: "Tailwind CSS", percentage: "80%" },
      { lang: "Bootstrap", percentage: "80%" },
      { lang: "Bulma", percentage: "80%" },
      { lang: "Responsive Web Design", percentage: "80%" },
      { lang: "Angular", percentage: "40%" },
      { lang: "Vue js", percentage: "60%" },
      { lang: "React Native", percentage: "50%" },
      { lang: "Ionic", percentage: "50%" },
      { lang: "Photoshop", percentage: "50%" },
      { lang: "Wordpress", percentage: "50%" },
    ],
    projects: [
      {
        title: "Movies And TV Shows",
        stack: "React js, Next js, Material UI",
        href: "https://moviedb-hufzn3dpu-karthik-padav.vercel.app/",
        discription:
          "List of all new Movies and TV shows with ratings and reviews. All contents are fetched from TMDB",
      },
      {
        title: "The Color Picker",
        stack: "React js, Next js, Tailwind CSS",
        href: "https://color-palettes-3o1p3pp5c-karthik-padav.vercel.app/",
        discription:
          "Color patterns inspired by thousands of beautiful color schemes.",
      },
      {
        title: "All India pin code directory",
        stack: "React Native",
        href: "https://play.google.com/store/apps/details?id=com.pincode.app",
        discription:
          "This Application allows users to get Post Office details by searching Postal PIN Code or Post Office Branch Name.",
      },
      {
        title: "Did You Know? - Facts Unlimited",
        stack: "React Native",
        href: "https://play.google.com/store/apps/details?id=com.did.you.know.facts",
        discription:
          "Option to share interesting facts among your friends and families or on other social media.",
      },
      {
        title: "HD Gaming wallpaper",
        stack: "React Native",
        href: "https://play.google.com/store/apps/details?id=com.hd.gamingwallpaper",
        discription:
          "HD Gaming wallpaper is an Android app with a collection of wallpapers.",
      },
      {
        title: "Instagram downloader",
        stack: "React Native",
        href: "https://play.google.com/store/apps/details?id=com.downloaderforinsta",
        discription:
          "Android app that helps you download Instagram Videos, Photos, IGTV & albums.",
      },
    ],
  };

  return data;
}
