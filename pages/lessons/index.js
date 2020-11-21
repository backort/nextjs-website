import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import FilterGrades from "../../components/FilterGrades";

const lessons = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      grade: "11 клас",
      subject: "Икономическа информатика - Разширена професионална подготовка",
    },
    {
      id: 2,
      grade: "11 клас",
      subject: "Уеб дизайн - Специфична професионална подготовка",
    },
    {
      id: 3,
      grade: "11 клас",
      subject:
        "Уеб дизайн - учебна практика - Специфична професионална подготовка",
    },
    {
      id: 4,
      grade: "12 клас",
      subject:
        "Икономическа информатика - Задължителна професионална подготовка",
    },
    {
      id: 5,
      grade: "12 клас",
      subject:
        "Икономическа информатика - Задължителноизбираема професионална подготовка",
    },
  ]);
  return (
    <>
      <Head>
        <title>Уроци | HTML&CSS</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container xsm:p-4 sm:p-4 md:p-4 lg:p-20 xl:p-20 max-w-screen mx-auto">
        <div className="header">
          <h1 className="font-bold">Уроци за:</h1>
          <FilterGrades grades={grades} setGrades={setGrades} />
        </div>
        <div className="flex flex-wrap">
          {grades.map((grade) => (
            <Link
              href={`/lessons/${grade.subject + "-" + grade.grade}`}
              key={grade.id}
            >
              <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1">
                <div className="w-full px-6 pt-4 flex flex-col justify-between rounded overflow-hidden border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg group">
                  <div className="font-bold text-xl mb-2">{grade.grade}</div>
                  <p className="text-gray-700 text-base">{grade.subject}</p>
                  <div className="px-6 py-4">
                    <Link
                      href={`/lessons/${grade.subject + "-" + grade.grade}`}
                    >
                      <a className="text-blue-500 group-hover:underline hover:text-blue-300">
                        Уроци →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default lessons;