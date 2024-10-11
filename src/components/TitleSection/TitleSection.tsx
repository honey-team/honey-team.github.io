import { FunctionComponent } from "react";

import Title from "../Title/Title";
import Input from "../Input/Input";
import DecorativeLine from "../DecorativeLine/DecorativeLine";

import styles from "./TitleSection.module.css";

type TitleSectionProps = {
    title: string;
    // Other props
    [key: string]: any;
};

const TitleSection: FunctionComponent<TitleSectionProps> = ({ title }) => {
    return (
        <section className={styles["title-section"]}>
            <div className={styles["wrapper"]}>
                <Title className={styles["title"]}>
                    {title}
                </Title>
                <form className={styles["form"]}>
                    <Input/>
                    <button className={styles["button"]}/>
                </form>
                <DecorativeLine className={styles["dash"]}/>
            </div>
        </section>
    );
};

export default TitleSection;