import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import Head from "next/head";
import { Component } from "react";
import Footer from "../Footer";
import Top from "../Top";

const layoutHome = (Component: any) => {
  return (props: any) => {
    const device = useDeviceDetect();

    if (device == "mobile") {
      return (
        <>
          <Head>
            <title>Home - Mobile</title>
          </Head>
          <div>
            <div>
              <Top />
            </div>
            <div>
              {" "}
              <Component {...props} />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>Home - Desktop</title>
            <meta name="description" content="Welcome to Petners Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            <div>
              <Top />
            </div>
            <div>
              {" "}
              <Component {...props} />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </>
      );
    }
  };
};

export default layoutHome;
