import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import MemberSocials from "../MemberSocials/MemberSocials";
import Icons from "../Icons/Icons";

import styles from "./MemberCard.module.css";
import { Member } from "../../utils/config_type_alias";
import Skills from "../Skills/Skills";


type MemberCardProps = {
    member: Member;
    // Other props
    [key: string]: any;
};

const max_langs_in_line: number = 8;

const MemberCard: FunctionComponent<MemberCardProps> = ({ member, ...props }) => {
    return (
        <div className={styles["card"]} {...props}>
            <Link to={`/members/${member.gh}`}>
                <div className={styles["image"]}>
                    <img alt={member.gh} src={`https://avatars.githubusercontent.com/${member.gh}`}/>
                </div>
            </Link>
            <Link to={`/members/${member.gh}`}>
                <p className={styles["title"]}>{member.gh}</p>
            </Link>
            <div className={styles["skills"]}>
                {member.langs && <Skills skills={member.langs}/>}
            </div>
            <div className={styles["contacts"]}>
                <MemberSocials socials={{gh: member.gh, ...member.socials}} />
            </div>
        </div>
    );
};

export default MemberCard;