import SocialMedia from "components/SocialMedia";
import Link from "next/link";
import { useState } from "react";

const activeTabClass = "bg-yellow-300";

export default function Header({ menu, activeTab }) {
  const [isOpen, toggleMenu] = useState(false);

  function List(isMobile) {
    return (
      <ul className={isMobile ? "" : "flex"}>
        {menu.map((item, index) => (
          <Link key={index} href={item.url}>
            <li
              className={`cursor-pointer ${
                activeTab === item.url ? activeTabClass : ""
              }`}
            >
              <p className="p-4 hover:underline underline-offset-2 decoration-yellow-300 decoration-4">
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
          </Link>
        ))}
      </ul>
    );
  }

  return (
    <>
      <nav className="bg-white rounded-lg md:hidden">
        <div className="p-4 flex justify-between items-center w-full">
          <button
            className="justify-center"
            onClick={() => toggleMenu(!isOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <SocialMedia />
        </div>
        {isOpen && <div className="w-full">{List(true)}</div>}
      </nav>

      <nav className="bg-white rounded-lg justify-between items-center hidden md:flex">
        {List()}
        <div className="mr-5">
          <SocialMedia />
        </div>
      </nav>
    </>
  );
}
