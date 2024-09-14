import styles from "./MemberCard.module.css";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";

function MemberCard({ member }) {

  let links = ["github", "cite", "telegram", "discord"];

  return (
    
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <img src={member.banner}></img>
      </div>
      <Link to={`/members/${member.id}`}><p className={styles["title"]}>{member.gh}</p></Link>
      <div className={styles["skills"]}>
        {
          member.langs.map((item, index) => {
            return <Icons name={item} key={index} />
          })
        }
      </div>
      <div className={styles["contacts"]}>
        {
          member.links.map((item, index) => {
            return <a href={item} target="_blank" className={styles["contact-btn"]} key={index}>
              <Icons name={links[index]} />
            </a>
          })
        }
      </div>
    </div>
    
  );
}

export default MemberCard;
