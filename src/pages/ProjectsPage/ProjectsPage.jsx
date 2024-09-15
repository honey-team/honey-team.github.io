import styles from "./ProjectsPage.module.css"
import TitleSection from "../../components/TitleSection/TitleSection.jsx"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import file from "../../data.json"
import { useEffect, useState } from "react"
import HTHead, {Pages} from "../../components/HTHead/HTHead.jsx"

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(false)

  const getProjects = () => {
    if (file.projects) {
      setProjects(file.projects)
      setError(false)
    } else setError(true)
  }

  useEffect(() => {
    getProjects()
    console.log(projects)
  }, [])

  return (
    <>
      <HTHead page={Pages.projects} />
      <TitleSection title="Проекты" />
      <section className={styles["list-section"]}>
        <div className="wrapper">
          {!error && <div className={styles["content"]}>
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />
            }

            )}
            </div>}
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
