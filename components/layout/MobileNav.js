import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MobileNav = ({ expand }) => {
  const router = useRouter();
  const menu = {
    open: {
      display: "flex",
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -350,
      display: "none",
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.div
      animate={!expand ? "closed" : "open"}
      variants={menu}
      className={`border flex-col p-4 mt-4 rounded-lg hidden`}
    >
      <div className="flex justify-center flex-col">
        <Link href="/">
          <a
            className={`${
              router.pathname === "/"
                ? "text-gray-900 border-l-4 border-blue-500 bg-blue-100 p-1"
                : "text-gray-500"
            } py-1`}
          >
            Начало
          </a>
        </Link>
        <Link href="/lessons">
          <a
            className={`${
              router.pathname === "/lessons" ||
              router.route === "/lessons/[id]" ||
              router.route === "/grade/[grade]"
                ? "text-gray-900 border-l-4 border-blue-500 bg-blue-100 p-1"
                : "text-gray-500"
            } py-1`}
          >
            Уроци
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center pt-3 flex-col">
        <div className="w-full py-1">
          <button className={`${styles.registerBtn} w-full`}>
            Регистрация
          </button>
        </div>
        <div className="w-full py-1">
          <button className="bg-white text-gray-700 border rounded-lg py-2 px-5 w-full">
            Влез
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
