import Head from "next/head";

import AboutContent from "../components/about";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Typerun - Info</title>
        <meta content={"Information on how the game works"} name={"about"} />
        <link href={"/favicon.ico"} rel={"icon"} />
      </Head>
      <AboutContent />
    </>
  );
};

export default AboutPage;
