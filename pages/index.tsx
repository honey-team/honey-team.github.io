import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import {Route} from "../utils/domain";

import NavBar from "../components/NavBar";

const Home: NextPage = () => {

  const description = "Honey Team - это сообщество программистов, разделяющих общие цели и интересы в области программирования. Мы предоставляем нашим членам место для общения и совместной работы над проектами. Наше видение заключается в создании благоприятной среды для программирования и совместной работы программистов.";
  return (
    <div className={styles.container}>
      <Head>
        <title>HoneyTeam 🍯</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={Route('/opengraph-image.png')}/>
        <link rel="icon" href={Route('/favicon.ico')} />
      </Head>
      <NavBar />
    </div>
  );
};

export default Home;
