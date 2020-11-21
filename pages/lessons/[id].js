import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";

const lesson = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Уроци | HTML&CSS</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container xsm:px-4 sm:px-4 md:px-4 lg:px-20 xl:px-20 xsm:py-4 sm:py-4 md:py-4 lg:py-5 xl:py-5 max-w-screen mx-auto">
        <div className="header">
          <Breadcrumb id={id} />
        </div>
        <div className="body">
          <h1>{id}</h1>
        </div>
      </div>
    </>
  );
};

export default lesson;
