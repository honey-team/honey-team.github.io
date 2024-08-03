import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import { prefix } from "../utils/prefix";

import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  const description = "Honey Team - это сообщество программистов, разделяющих общие цели и интересы в области программирования. Мы предоставляем нашим членам место для общения и совместной работы над проектами. Наше видение заключается в создании благоприятной среды для программирования и совместной работы программистов.";
  return (
    <div className={styles.container}>
      <Head>
        <title>HoneyTeam 🍯</title>
        <meta name="description" content={description} />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <NavBar />
    </div>
  );
};

export default Home;
