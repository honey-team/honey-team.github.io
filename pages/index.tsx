import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import HTHead, {Pages} from "../components/HTHead";

const Home: NextPage = () => {
  return (
    <div>
      <HTHead page={Pages.index} />

      <NavBar />
    </div>
  );
};

export default Home;
