import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";
import styles from "../../styles/Lessons.module.css";
import ReactPlayer from "react-player";
import axios from "axios";
import { useRouter } from "next/router";

const lesson = () => {
  const [lessons, setLessons] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios.get(`http://localhost:3000/api/lessons/${id}`).then((res) => {
      if (res.status === 200) setLessons(res.data.data);
    });
  }, [id]);

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
                {lessons &&
                  lessons?.map((subject) => (
                    <li key={subject.title}>
                      <a
                        className={styles.linkColor}
                        href={subject.presentation}
                      >
                        {subject.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </details>
            <details>
              <summary>Видео уроци</summary>
              <ul>
                {lessons &&
                  lessons?.map(
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
