import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = ({ id }) => {
  const router = useRouter();
  return (
    <ul className="flex text-gray-500 text-sm lg:text-base">
      <li className="inline-flex items-center">
        <Link href="/">
          <a>Начало</a>
        </Link>
        <svg
          className="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </li>
      <li className="inline-flex items-center">
        <Link href="/lessons">
          <a>Уроци</a>
        </Link>
        <svg
          className="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </li>
      <li className="inline-flex items-center">
        <Link href={`/lessons/${router.query.id}`}>
          <a className="text-blue-400">{id}</a>
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
