import React, { useState } from "react";
import axios from "axios";

const AddGrade = ({ setGrades, grades }) => {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  const addGrade = async (e) => {
    e.preventDefault();
    axios
      .post("/api/lessons", {
        level,
        grade,
      })
      .then((res) => {
        if (res.status === 201) {
          setGrades([...grades, res.data.data]);
          setLevel("");
          setGrade("");
          setError(false);
        } else {
          setError(true);
        }
      });
  };
  return (
    <form onSubmit={addGrade} className="h-full">
      <div className="mt-1 flex">
        <input
          type="text"
          className="w-full border-black border rounded p-1 font-bold text-lg"
          placeholder="Клас..."
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>
      <div className="mt-1 flex">
        <input
          type="text"
          className="w-full border-black border rounded p-1 text-gray-700 text-base"
          placeholder="Предмет..."
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div className="px-6 mt-10">
        <button
          disabled={!grade || !level}
          className={
            !grade || !level
              ? "text-gray-500"
              : "text-green-500 hover:text-green-300"
          }
          type="submit"
        >
          Добави +
        </button>
      </div>
      {error && <p className="text-red-600">Грешка! Моля опитайте по-късно.</p>}
    </form>
  );
};

export default AddGrade;
