import { FunctionComponent } from "react";
import styles from "./Skills.module.css";

import Icons from "../Icons/Icons";

type SkillsProps = {
    skills: string[];
    max_langs_in_line?: number;
};

const Skills: FunctionComponent<SkillsProps> = ({ skills, max_langs_in_line = 8 }) => {
    return (
        <>
            {skills.map((item, index) => {
                if (index < max_langs_in_line-1)
                    return <Icons name={item} key={index} />;
                else if (skills.length === max_langs_in_line)
                    return <Icons name={item} key={index} />;
                else if (index === max_langs_in_line-1)
                    return (
                        <div className={styles["plus_skills"]}>
                            <p>+{skills.length - max_langs_in_line}</p>
                        </div>
                    )
            })}
        </>
    );
};

export default Skills;