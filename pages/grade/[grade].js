import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const Grade = ({ data }) => {
  const router = useRouter();

  let filteredGrades = data.filter(
    (grade) => grade.grade === router.query.grade
  );
  return (
    <>
      <Head>
        <title>Уроци | HTML&CSS</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container xsm:p-4 sm:p-4 md:p-4 lg:p-20 xl:p-20 max-w-screen mx-auto">
        <div className="header">
          <h1 className="font-bold">Уроци за:</h1>
        </div>
        <div className="flex flex-wrap">
          {filteredGrades.map((grade) => (
            <Link
              href={`/lessons/${grade._id}`}
              key={grade._id}
            >
              <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1">
                <div className="w-full px-6 pt-4 flex flex-col justify-between rounded overflow-hidden border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg group">
                  <div className="font-bold text-xl mb-2">{grade.grade}</div>
                  <p className="text-gray-700 text-base">{grade.subject}</p>
                  <div className="px-6 py-4">
                    <Link
                      href={`/lessons/${grade._id}`}
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

export default Grade;

export const getServerSideProps = async (context) => {
  const res = await fetch(`/api/grades`);
  const grades = await res.json();

  return {
    props: grades,
  };
};
