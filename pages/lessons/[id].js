import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";
import styles from "../../styles/Lessons.module.css";
import ReactPlayer from "react-player";

const lesson = () => {
  const lessons = [
    {
      grade:
        "Икономическа информатика - Задължителноизбираема професионална подготовка-12 клас",
      subjects: [
        {
          title:
            "Език за маркиране на хипертекст HTML - основни елементи и структура на документа",
          presentation:
            "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          video:
            "https://www.youtube.com/watch?v=UB1O30fR-EE&t=3020s&ab_channel=TraversyMedia",
        },
        {
          title: "Заглавия, параграфи и шрифтове в HTML",
          presentation:
            "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          video: "",
        },
      ],
    },
    {
      grade:
        "Уеб дизайн - учебна практика - Специфична професионална подготовка-11 клас",
      subjects: [
        {
          title: "История на глобалната мрежа.",
          presentation:
            "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          video: "https://www.youtube.com/watch?v=k0gvAyCubGQ&ab_channel=CERN",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Уроци | HTML&CSS</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container xsm:px-4 sm:px-4 md:px-4 lg:px-20 xl:px-20 xsm:py-4 sm:py-4 md:py-4 lg:py-5 xl:py-5 max-w-screen mx-auto">
        <div className="header">
          <Breadcrumb id="123" />
        </div>
        <div className="body">
          <div className={styles.doc}>
            <details open>
              <summary>
                <b>Презентации</b>
              </summary>
              <ul>
                {lessons.map((subject) => (
                  <li key={subject.title}>
                    <a className={styles.linkColor} href={subject.presentation}>
                      {subject.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
            <details>
              <summary>Видео уроци</summary>
              <ul>
                {lessons.map(
                  (subject) =>
                    subject.video !== "" && (
                      <li key={subject.title}>
                        <ReactPlayer controls url={subject.video} />
                      </li>
                    )
                )}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default lesson;
