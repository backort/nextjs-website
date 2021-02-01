import Link from "next/link";
import gradeStyles from "../styles/Grade.module.css";

const Grade = ({ grade, deleteItem }) => {
  return (
    <Link href={`/lessons/${grade._id}`}>
      <div className="xsm:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex px-1 py-1 relative">
        <button className={gradeStyles.deleteIcon} onClick={deleteItem} id={grade._id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <div className="w-full p-6 pt-4 flex flex-col justify-between rounded overflow-hidden border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg group">
          <div className="font-bold text-xl mb-2">{grade.level}</div>
          <p className="text-gray-700 text-base">{grade.grade}</p>
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
  );
};

export default Grade;
