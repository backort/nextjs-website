import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import FilterGrades from "../../components/FilterGrades";

const lessons = () => {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await fetch("http://localhost:3000/api/grades");
      const grades = await fetchData.json();
      setGrades(grades.data);
    };
    fetchData();
  }, [grades]);
  console.log(grades);
  const addGrade = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/grades", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ grade, subject }),
      }).then(() => {
        setGrades([...grades, { grade, subject }]);
        setGrade("");
        setSubject("");
        setError("");
      });
    } catch (error) {
      setError(error);
    }
  };
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
            <Link href={`/lessons/${grade._id}`} key={grade._id}>
              <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1">
                <div className="w-full p-6 pt-4 flex flex-col justify-between rounded overflow-hidden border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg group">
                  <div className="font-bold text-xl mb-2">{grade.grade}</div>
                  <p className="text-gray-700 text-base">{grade.subject}</p>
                  <div className="px-6 pt-4">
                    <Link href={`/lessons/${grade._id}`}>
                      <a className="text-blue-500 group-hover:underline hover:text-blue-300">
                        Уроци →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1">
            <div className="border w-full rounded cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg p-6 pt-4">
              <form onSubmit={addGrade} className="h-full">
                <div className="mt-1 flex">
                  <input
                    type="text"
                    className="w-full border-black border rounded p-1 font-bold text-lg"
                    placeholder="Клас..."
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    className="w-full border-black border rounded p-1 text-gray-700 text-base"
                    placeholder="Предмет..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="px-6 mt-10">
                  <button
                    disabled={!subject || !grade}
                    className={
                      !subject || !grade
                        ? "text-gray-500"
                        : "text-green-500 hover:text-green-300"
                    }
                    type="submit"
                  >
                    Добави +
                  </button>
                </div>
                {error && <p className="text-red-600">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default lessons;
