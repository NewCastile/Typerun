import type { NextPage } from "next";

import Head from "next/head";

import Game from "../components/game";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Typerun</title>
        <meta content={"App home page"} name={"description"} />
        <link href={"/favicon.ico"} rel={"icon"} />
      </Head>
      <Game />
    </>
  );
};

export default HomePage;
