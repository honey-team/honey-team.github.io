import { FunctionComponent } from "react";

import Icons from "../Icons/Icons";

import styles from "./MemberSocials.module.css";

type MemberSocialsProps = {
    socials: {[key: string]: string};
    height?: number
}

const MemberSocials: FunctionComponent<MemberSocialsProps> = ({ socials, height = 45 }) => {
    const linkMap: {[key: string]: (link: string) => string} = {
        ds: (link: string) => `https://discordapp.com/users/${link}`,
        tg: (link: string) => `https://t.me/${link}`,
        gh: (link: string) => `https://github.com/${link}`,
    };

    return (
        <>
            {Object.entries(socials).map(([key, value]) => {
                return (
                    <a
                        href={linkMap[key] ? linkMap[key](value) : value}
                        target="_blank"
                        className={styles["contact-btn"]}
                        style={{height: `${height}px`}}
                        key={key}
                    >
                        <Icons name={key} dh={height - 45} />
                    </a>
                );
            })}
        </>
    );
}

export default MemberSocials;