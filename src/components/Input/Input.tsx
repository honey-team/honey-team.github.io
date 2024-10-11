import { FunctionComponent } from "react";

import styles from "./Input.module.css";

const Input: FunctionComponent = () => {
    return (
        <input className={styles["input"]}/>
    );
};

export default Input;