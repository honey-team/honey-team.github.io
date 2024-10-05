import Button from "../Button/Button";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";

function ProjectCard({ project }, modificator) {
  if (!project) {
    return <></>;
  }

  return (
    <div
      className={cn(styles["project-card"], {
        [styles["project-card_small"]]: modificator === "small",
      })}
    >
      <Link to={`/projects/${project.gh}`}>
        <div className={styles["project-card__img"]}>
          <img src={project.image ? project.image : '/images/projects/default.png'}/>
        </div>
      </Link>
      
      <div className={styles["project-card__info"]}>
      <div className={styles["project-card__gradient"]}>
        </div>
        <div className={styles["project-card__fill"]}>
        </div>
        <div className={styles["project-card__title"]}>
          <Link to={`/projects/${project.gh}`}>
            {project.title ? project.title : project.gh}
          </Link>
        </div>
        <div className={styles["project-card__description"]}>
          {project.description}
        </div>
        <div className={styles["project-card__button"]}>
          <a href={project.gh.includes("/") ? `https://github.com/${project.gh}` : `https://github.com/honey-team/${project.gh}`}>
            <Button modificator={"flat-orange"}>GitHub</Button>
          </a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
