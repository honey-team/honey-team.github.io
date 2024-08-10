import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import getDomain, {Route} from "../utils/domain";

import NavBar from "../components/NavBar";

const Home: NextPage = () => {

  const description = "Honey Team - это сообщество программистов, разделяющих общие цели и интересы в области программирования. Мы предоставляем нашим членам место для общения и совместной работы над проектами. Наше видение заключается в создании благоприятной среды для программирования и совместной работы программистов.";
  const page_title = 'HoneyTeam 🍯';
  return (
    <div/* className={styles.container}*/>
      <Head>
        <title>{page_title}</title>
        <meta name="description" content={description}/>

        <meta property="og:url" content={Route('/')}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={page_title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={Route('/opengraph-image.png')}/>
        <meta property="og:image:width" content="1000"/>
        <meta property="og:image:height" content="500"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content={Route('/')}/>
        <meta property="twitter:url" content={Route('/')}/>
        <meta name="twitter:title" content={page_title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={Route('/opengraph-image.png')}/>

        <link rel="icon" href={Route('/favicon.ico')} />
      </Head>
      <NavBar />
    </div>
  );
};

export default Home;
