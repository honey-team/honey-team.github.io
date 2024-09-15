import Icons from "../Icons/Icons"
import Logo from "../Logo/Logo"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import Route from "../../utils/links"

function Header() {
  return (
    <header className={styles["header-color"]}>
      <div className={styles["header"]}>
        <div className={styles["left-part"]}>
          <Link to="/"><Logo color="white" /></Link>
          <ul className={styles["header__nav"]}>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/members">Участники</Link></li>
            <li><Link to="/blog">Блог</Link></li>
          </ul>
        </div>
        <div className={styles["right-part"]}>
          <a href={Route("/", 'discord')}><Icons name="discord"/></a>
          <a href={Route("/", 'tg')}><Icons name="telegram"/></a>
          <a href={Route("/", 'gh')}><Icons name="github"/></a>
        </div>
      </div>
    </header>
  )
}

export default Header
