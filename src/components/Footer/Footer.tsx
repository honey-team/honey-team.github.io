import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Logo, {Color} from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
    return(
        <footer className={styles["footer"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["content"]}>
                    <div className={styles["left-part"]}>
                        <Logo color={Color.gray}/>
                    </div>
                    <div className={styles["right-part"]}>
                        <ul className={styles["navigation"]}>
                            <li>Страницы</li>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/projects">Проекты</Link></li>
                            <li><Link to="/members">Участники</Link></li>
                            <li><Link to="/blog">Блог</Link></li>
                        </ul>
                        <ul className={styles["navigation"]}>
                            <li>Команда</li>
                            <li><a href="#!">О нас</a></li>
                            <li><a href="#!">Вступить</a></li>
                            <li><a href="#!">Поддержка</a></li>
                            <li><a href="#!">Источники</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;