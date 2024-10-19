import { FunctionComponent } from "react";

import Title from "../Title/Title";
import Input, {} from "../Input/Input";
import DecorativeLine from "../DecorativeLine/DecorativeLine";

import styles from "./TitleSection.module.css";
import Route from "../../utils/links";

type TitleSectionProps = {
    title: string;
    value: string;
    setValue: (text: string) => void;
    // Other props
    [key: string]: any;
};

const TitleSection: FunctionComponent<TitleSectionProps> = ({ title, value, setValue, ...props }) => {
    return (
        <section className={styles["title-section"]}>
            <div className={styles["wrapper"]} {...props}>
                <Title className={styles["title"]}>
                    {title}
                </Title>
                <form className={styles["form"]}>
                    <Input value={value} setValue={setValue}/>
                    <button className={styles["button"]}/>
                </form>
                <DecorativeLine className={styles["dash"]}/>
            </div>
        </section>
    );
};

export default TitleSection;