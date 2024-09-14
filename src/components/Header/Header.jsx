import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles["header-color"]}>
        <div className={styles["header"]}>
          <div className={styles["left-part"]}>
            <Link to="/"><Logo color="white" /></Link>
            <ul className={styles["header__nav"]}>
              <li><Link to="/projects">Проекты</Link></li>
              <li><Link to="/members">Участники</Link></li>
              <li><a href="#!">Блог</a></li>
            </ul>
          </div>
          <div className={styles["right-part"]}>
		  <a href="#!"><Icons name="discord"/></a>
		  <a href="#!"><Icons name="telegram"/></a>
		  <a href="#!"><Icons name="github"/></a>
		  </div>
        </div>
    </header>
  );
}

export default Header;
