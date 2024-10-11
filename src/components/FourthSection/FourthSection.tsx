import { FunctionComponent } from "react";

import DecorativeLine from "../DecorativeLine/DecorativeLine";
import Title from "../Title/Title";

import styles from "./FourthSection.module.css";

const FourthSection: FunctionComponent = () => {
    return (
        <section className={styles["fourth-section"]}>
            <DecorativeLine className={styles["fourth-section__dash"]} />
            <div className="wrapper">
                <div className={styles["content"]}>
                    <div className={styles["images-wrapper"]}>
                        <img src="icons/main-page-icons/Python.svg"/>
                        <img src="icons/main-page-icons/Html.svg"/>
                        <img src="icons/main-page-icons/Css.svg"/>
                        <img src="icons/main-page-icons/Js.svg"/>
                        <img src="icons/main-page-icons/Bd.svg"/>
                        <img src="icons/main-page-icons/C.svg"/>
                        <img src="icons/main-page-icons/C++.svg"/>
                    </div>
                    <Title className={styles["fourth-title"]}>Много участников</Title>
                    <p className={styles["text"]}>
                        В нашей команде состоит уже более 15 человек.<br/>
                        Мы все специализируемся в разных языках программирования,<br/>
                        что позволяет создавать почти любые проекты.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FourthSection;