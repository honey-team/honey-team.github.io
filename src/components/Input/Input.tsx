import { FunctionComponent, useState } from "react";

import styles from "./Input.module.css";

type InputProps = {
    value: string;
    setValue: (text: string) => void;
};

const Input: FunctionComponent<InputProps> = ({ value, setValue }) => {
    return (
        <input className={styles["input"]} value={value} onChange={e => setValue(e.target.value)}/>
    );
};

export default Input;