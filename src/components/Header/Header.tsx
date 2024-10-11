import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Icons from "../Icons/Icons";
import Logo, {Color} from "../Logo/Logo";

import styles from "./Header.module.css";

import Route from "../../utils/links";

const Header: FunctionComponent = () => {
    return (
        <header className={styles["header-color"]}>
            <div className={styles["header"]}>
                <div className={styles["left-part"]}>
                    <Link to="/"><Logo color={Color.white} classNames={[styles["header__nav__element"]]} /></Link>
                    <ul className={styles["header__nav"]}>
                        <li className={styles["header__nav__element"]}> <Link to="/projects">Проекты</Link> </li>
                        <li className={styles["header__nav__element"]}> <Link to="/members">Участники</Link> </li>
                        <li className={styles["header__nav__element"]}> <Link to="/blog">Блог</Link> </li>
                    </ul>
                </div>
                <div className={styles["right-part"]}>
                    <a href={Route("/", 'discord')}> <Icons name="ds" className={styles["header__nav__element"]}/> </a>
                    <a href={Route("/", 'tg')}> <Icons name="tg" className={styles["header__nav__element"]}/> </a>
                    <a href={Route("/", 'gh')}> <Icons name="gh" className={styles["header__nav__element"]}/> </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
