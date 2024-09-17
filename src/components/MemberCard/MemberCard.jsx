import styles from "./MemberCard.module.css";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
  const linkMap = {
    ds: (link) => `https://discordapp.com/users/${link}`,
    tg: (link) => `https://t.me/${link}`,
    gh: (link) => `https://github.com/${link}`,
  };

  member.socials.gh = member.gh;
  return (
    <div className={styles["card"]}>
      <Link to={`/members/${member.gh}`}>
        <div className={styles["image"]}>
          <img
            alt={member.gh}
            src={`https://avatars.githubusercontent.com/${member.gh}`}
          />
        </div>
      </Link>
      <Link to={`/members/${member.gh}`}>
        <p className={styles["title"]}>{member.gh}</p>
      </Link>
      <div className={styles["skills"]}>
        {member.langs.map((item, index) => {
          return <Icons name={item} key={index} />;
        })}
      </div>
      <div className={styles["contacts"]}>
        {Object.entries(member.socials).map(([key, value]) => {
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
      </div>
    </div>
  );
}

export default MemberCard;
