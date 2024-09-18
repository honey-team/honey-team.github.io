import Icons from "../Icons/Icons";
import styles from "./MemberSocials.module.css";

export default function MemberSocials({ socials }) {
    const linkMap = {
        ds: (link) => `https://discordapp.com/users/${link}`,
        tg: (link) => `https://t.me/${link}`,
        gh: (link) => `https://github.com/${link}`,
      };

    return (
        <>
            {Object.entries(socials).map(([key, value]) => {
                const link = linkMap[key] ? linkMap[key](value) : value;
                return (
                    <a
                    href={link}
                    target="_blank"
                    className={styles["contact-btn"]}
                    key={key}
                    >
                    <Icons name={key} />
                    </a>
                );
            })}
        </>
    )
}
