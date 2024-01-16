import Head from "next/head";

import AboutContent from "../components/about";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Typerun - Info</title>
        <meta content={"Información y uso apropiado de la aplicación"} name={"about"} />
        <link href={"/favicon.ico"} rel={"icon"} />
      </Head>
      <AboutContent />
    </>
  );
};

export default AboutPage;
