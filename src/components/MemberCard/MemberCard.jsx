import styles from "./MemberCard.module.css"
import Icons from "../Icons/Icons"
import { Link } from "react-router-dom"

export function getLinks(member_links) {
  var r = []
  for(var key in member_links) {
    var l

    switch (member_links[key]) {
      case 'ds':
        l = `https://discordapp.com/users/${member_links[key]}`
        break
      case 'tg':
        l = `https://t.me/${member_links[key]}`
        break
      default:
        l = member_links[key]
        break
    }

    r.push(
      <a href={l} target="_blank" className={styles["contact-btn"]}>
        <Icons name={key} />
      </a>
    )
  }

  console.log(r)

  return r
}

function MemberCard({ member }) {

  let links = ["github", "cite", "telegram", "discord"]

  return (
    
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <img src={member.banner}></img>
      </div>
      <Link to={`/members/${member.gh}`}>
	  	<p className={styles["title"]}>{member.gh}</p>
	  </Link>
      <div className={styles["skills"]}>
        {
          member.langs.map((item, index) => {
            return <Icons name={item} key={index} />
          })
        }
      </div>
      <div className={styles["contacts"]}>
        {getLinks(member.socials)}
      </div>
    </div>
    
  )
}

export default MemberCard
