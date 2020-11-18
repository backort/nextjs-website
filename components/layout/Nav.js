import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [active, setActive] = useState("home");
  const [expand, setExpand] = useState(false);
  const handleClick = (e) => {
    setActive(e.target.name);
  };
  return (
    <header
      className={`${styles.header} w-full pt-6 flex flex-col sm:px-3 xl:items-center lg:items-center md:items-center`}
    >
      <nav
        className={`${styles.nav} flex items-center xl:justify-around lg:justify-around md:justify-around sm:justify-between w-full xl:max-w-screen-lg lg:max-w-screen-md md:px-5 sm:px-5`}
      >
        <Link href="/">
          <a>
            <img
              src="/html-logo.png"
              alt="Logo"
              width="82"
              title="Към начална страница"
            />
          </a>
        </Link>
        <div
          className={`${styles.navLgScreen} sm:hidden xl:flex lg:flex md:flex items-center justify-between flex-1`}
        >
          <div className="flex items-center px-4">
            <Link href="/">
              <a
                className={`hover:text-gray-900 ${
                  active === "home" ? "text-gray-900" : "text-gray-500"
                }`}
                onClick={handleClick}
                name="home"
              >
                Начало
              </a>
            </Link>
            <Link href="lessons">
              <a
                className={`ml-4 hover:text-gray-900 ${
                  active === "lessons" ? "text-gray-900" : "text-gray-500"
                }`}
                onClick={handleClick}
                name="lessons"
              >
                Уроци
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center w-auto">
            <div>
              <button className={styles.registerBtn}>Регистрация</button>
            </div>
            <div>
              <button className="bg-white hover:border-gray-700 text-gray-700 border rounded-lg py-2 px-5 transition duration-500 ease-in-out">
                Влез
              </button>
            </div>
          </div>
        </div>
        <button
          className="lg:hidden xl:hidden md:hidden"
          style={{ outline: "none" }}
          onClick={() => setExpand(!expand)}
        >
          <svg
            className="h-6 w-6 text-black transition duration-500 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {!expand ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </nav>
      <MobileNav handleClick={handleClick} active={active} expand={expand} />
    </header>
  );
};

export default Nav;
