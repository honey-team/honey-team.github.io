import styles from "./ProjectsPage.module.css"
import TitleSection from "../../components/TitleSection/TitleSection.jsx"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { useEffect, useState } from "react"
import HTHead, {Pages} from "../../components/HTHead/HTHead.jsx"
import config from "../../../htconfig.json"

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(false)

  const getProjects = () => {
    if (config.projects) {
      setProjects(config.projects.filter((project) => !project.gh.includes("/")))
      setError(false)
    } else setError(true)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
      <HTHead page={Pages.projects} />
      <TitleSection title="Проекты" />
      <section className={styles["list-section"]}>
        <div className="wrapper">
          {!error && <div className={styles["content"]}>
            {projects.map((project, index) => {
              return <ProjectCard project={project} key={index} />
            }
            )}
            </div>}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
