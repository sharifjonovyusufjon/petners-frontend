import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import Head from "next/head";
import { Component } from "react";

const layoutAdmin = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Home Admin - Desktop</title>
          <meta name="description" content="Welcome to Petners Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Component {...props} />
        </div>
      </>
    );
  };
};

export default layoutAdmin;
