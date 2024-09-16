import styles from "./MemberCard.module.css"
import Icons from "../Icons/Icons"
import { Link } from "react-router-dom"

export function getLinks(member_links) {
  let r = []
  let i = 0

  for(var key in member_links) {
    var l

    switch (key) {
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
      <a href={l} target="_blank" className={styles["contact-btn"]} key={i}>
        <Icons name={key} />
      </a>
    )
    i += 1
  }

  console.log(r)

  return r
}

function MemberCard({ member }) {
  return (
    <div className={styles["card"]}>
      <Link to={`/members/${member.gh}`}>
        <img
          className={styles["circular--square"]}
          src={`https://avatars.githubusercontent.com/${member.gh}`}
        />
      </Link>
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
