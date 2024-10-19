import {FunctionComponent, useState} from "react";
import {Link} from "react-router-dom";

import Icons from "../Icons/Icons";
import Logo, {Color} from "../Logo/Logo";

import styles from "./MobileHeader.module.css";
import Route from "../../utils/links";

const MobileHeader: FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    return (<div className={styles["header-placeholder"]}>
        <header className={styles["header-color"]}>
            <div className={styles["header"]}>
                <div className={`${styles["header__title"]} ${menuOpen ? styles["header-color-open"] : ""}`}>
                    <Link to="/"><Logo color={Color.white} classNames={[styles["header__nav__element"]]}/></Link>
                    <div className={styles["menu-toggle"]} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            <div>
                <ul className={`${styles["header__nav"]} ${menuOpen ? `${styles["open"]} ${styles["header-color-open"]}` : ""}`}>
                    <li className={styles["header__nav__element"]}>
                        <Link to="/projects" onClick={toggleMenu}>Проекты</Link>
                    </li>
                    <li className={styles["header__nav__element"]}>
                        <Link to="/members" onClick={toggleMenu}>Участники</Link>
                    </li>
                    <li className={styles["header__nav__element"]}>
                        <Link to="/blog" onClick={toggleMenu}>Блог</Link>
                    </li>
                    <li className={styles["header__nav__element"]}>
                        <div className={styles["right-part"]}>
                            <a href={Route("/", 'discord')} onClick={toggleMenu}> <Icons name="ds"/></a>
                            <a href={Route("/", 'tg')} onClick={toggleMenu}> <Icons name="tg"/></a>
                            <a href={Route("/", 'gh')} onClick={toggleMenu}> <Icons name="gh"/></a>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    </div>)
}

export default MobileHeader;
