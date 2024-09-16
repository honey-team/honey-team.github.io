import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DecorativeLine from "../../components/DecorativeLine/DecorativeLine"
import Icons from "../../components/Icons/Icons"
import styles from "./MemberPage.module.css"
import Title from "../../components/Title/Title"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import HTHead, {Pages} from "../../components/HTHead/HTHead.jsx"
import config from "../../../htconfig.json"
import { getLinks } from "../../components/MemberCard/MemberCard.jsx"

function MemberPage() {
  const [members, setMembers] = useState([])
  const [error, setError] = useState(true)
  const [currentMember, setCurrentMember] = useState()
  const params = useParams()

  const getMembers = () => {
    if (config.members) {
      setMembers(config.members)
    } else setError(true)
  }

  const getCurrentMember = () => {
    for (var value in members) {
      value = members[value]
      if (value.gh === params.id) {
        setCurrentMember(value)
        break
      }
    }

    if (currentMember) setError(false)
    else setError(true)
  }

  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {
    getCurrentMember()
  }, [members, currentMember])

  var memberProjects = []
  var projects_error = true
  if (currentMember.projects && config.projects) {
    for (var p in config.projects) {
      console.log(p)
      if (p.gh in currentMember.projects) {
        memberProjects.push(<ProjectCard project={p}/>)
        projects_error = false
      }
    }
  }
  console.log(memberProjects)


  if (!error) {
    var s = {backgroundColor: '#262626'}
    if (currentMember.banner) {
      if (currentMember.banner.startsWith('#')) {
        s = {backgroundColor: currentMember.banner}
      }
      else {
        s = {
          backgroundImage: `url('${currentMember.banner}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 300px'
        }
      }
    }
  }

  return (
    <>
      <HTHead page={Pages.index} />
      {error && (
        <div className="wrapper">
          <p>Участник не найден</p>
        </div>
      )}
      {!error && (
        <>
          <section className={styles["head-section"]} style={s}>
            <div className={styles["avatar-wrapper"]}>
              <img
                className={styles["avatar"]}
                src={`https://avatars.githubusercontent.com/${currentMember.gh}`}
              />
            </div>
          </section>
          <section className={styles["info-section"]}>
            <h1 className={styles["info-section__title"]}>
              {currentMember.gh}
            </h1>
            <div className={styles["info-section__stats"]}>
              <p className={styles["bio"]}>{currentMember?.bio}</p>
              <span className={styles["dot"]}>・</span>
              {currentMember.langs.map((lang, index) => {
                return <Icons name={lang} key={index} />
              })}
            </div>
            <div className={styles["contacts"]}>
            {getLinks(currentMember.socials)}
            </div>
            <DecorativeLine className={styles["dash"]} />
          </section>
		  <section className={styles["projects-section"]}>
		  <div className="wrapper">
			<Title className={styles["projects-section__title"]}>Проекты</Title>
			{!projects_error && (
        <div className={styles["projects-wrapper"]}>
				  {memberProjects}
			  </div>
      )}
			</div>
		  </section>
        </>
      )}
    </>
  )
}

export default MemberPage
