import Head from "next/head";
import React, { useState, useEffect } from "react";
import FilterGrades from "../../components/FilterGrades";
import axios from "axios";
import Grade from "../../components/Grade";
import AddGrade from "../../components/AddGrade";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import GradesLoading from "../../components/GradesLoading";

const lessons = () => {
  const [grades, setGrades] = useState([]);
  useEffect(() => {
    axios.get("/api/lessons").then((res) => {
      if (res.status === 200) {
        setGrades(res.data.data);
      }
    });
  }, []);
  const deleteItem = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Сигурни ли сте, че искате да премахнете класа?",
      buttons: [
        {
          label: "Да",
          onClick: () => {
            axios.delete(`/api/lessons/${e.target.id}`).then((res) => {
              if (res.status === 200) {
                const deletedGrades = grades.filter(
                  (grade) => grade._id !== e.target.id
                );
                setGrades(deletedGrades);
              }
            });
          },
        },
        {
          label: "Не",
        },
      ],
    });
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
          {grades && <FilterGrades grades={grades} setGrades={setGrades} />}
        </div>
        {grades.length === 0 ? (
          <GradesLoading />
        ) : (
          <div className="flex flex-wrap">
            {grades &&
              grades.map((grade) => (
                <Grade key={grade._id} grade={grade} deleteItem={deleteItem} />
              ))}
            <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1">
              <div className="border w-full rounded cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg p-6 pt-4">
                <AddGrade grades={grades} setGrades={setGrades} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default lessons;
