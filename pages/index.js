import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>
        <title>Начало | HTML&CSS</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container mx-auto lg:p-20 xl:p-20 max-w-screen flex items-center flex-col justify-center">
        <h1 className={styles.title}>
          Уроци по <span>Информатика</span>
        </h1>
        <h3 className={styles.description}>
          Презентации и видео уроци по информатика, информационни технологии,
          икономическа информатика и уеб дизайн.
        </h3>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link href="/grade/11 клас">
              <a className={styles.eleven}>Уроци за 11 клас</a>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/grade/12 клас">
              <a className={styles.twelve}>Уроци за 12 клас</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
