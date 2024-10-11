import {ReactElement} from "react";

import styles from "./ErrorPage.module.css";
import Button, {Modificator} from "../../components/Button/Button";
import HTHead, { Pages } from "../../components/HTHead/HTHead";

export default function ErrorPage(): ReactElement {
    return (
        <div className={styles["error-page"]}>
            <HTHead page={Pages.error} />
            <span>404</span>
            <p className={styles["text"]}>Страница не найдена</p>
            <Button modificator={Modificator.flat_orange} to="/" style={{width: "400px"}}>На главную</Button>
        </div>
    );
}
