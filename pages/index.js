import { useState } from "react";
import About from "components/Body/About";
import Projects from "components/Body/Projects";
import Experience from "components/Body/Experience";
import Skills from "components/Body/Skills";
import SocialMedia from "components/SocialMedia";

const activeTabClass = "bg-yellow-300";

export default function Home(props) {
  const {
    data: {
      menu = [],
      about_me = [],
      work_history = [],
      education_histort = [],
      skills = [],
      projects = [],
    },
  } = props;
  console.log(props, "home props");

  const [activeTab, setActiveTab] = useState(menu?.[0]?.code);

  const getComponent = () => {
    console.log(activeTab, "activeTab123");
    switch (activeTab) {
      case "HOME":
        return <About data={about_me} />;
      case "EXPERIENCE":
        return (
          <Experience
            work_history={work_history}
            education_histort={education_histort}
          />
        );
      case "SKILLS":
        return <Skills skills={skills} />;
      case "PROJECTS":
        return <Projects projects={projects} />;

      default:
        <></>;
        break;
    }
  };

  return (
    <>
      <nav className="bg-white rounded-lg overflow-hidden flex justify-between items-center">
        <ul className="flex">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                activeTab === item.code ? activeTabClass : ""
              }`}
              onClick={() => setActiveTab(item.code)}
            >
              <p className=" p-4 hover:underline underline-offset-2 decoration-yellow-300 decoration-4">
                {item?.code === "HOME" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                ) : (
                  item?.title
                )}
              </p>
            </li>
          ))}
        </ul>
        <div className="mr-5">
          <SocialMedia />
        </div>
      </nav>
      <div className="mt-4">{getComponent()}</div>
    </>
  );
}
