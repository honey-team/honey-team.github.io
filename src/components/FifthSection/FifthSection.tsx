import { FunctionComponent } from "react";

import Button, { Modificator } from "../Button/Button";
import DecorativeLine from "../DecorativeLine/DecorativeLine";

import styles from "./FifthSection.module.css";

const FifthSection: FunctionComponent = () => {
    return (
        <section className={styles["fifth-section"]}>
            <DecorativeLine className={styles["fifth-section__dash"]} />
            <div className="wrapper">
                <div className={styles["content"]}>
                    <h2 className={styles["title"]}>Чего же ты ждешь?</h2>
                    <Button modificator={Modificator.main}>Подать заявку</Button>
                </div>
            </div>
        </section>
    );
}

export default FifthSection;