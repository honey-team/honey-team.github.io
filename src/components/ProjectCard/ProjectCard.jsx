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
      <div className={styles["project-card__img"]}>
        <img src={project.image}></img>
      </div>
      <div className={styles["project-card__info"]}>
        <div className={styles["project-card__title"]}>
          {project.title ? project.title : project.gh}
        </div>
        <div className={styles["project-card__description"]}>
          {project.description}
        </div>
        <div className={styles["project-card__button"]}>
          <a href={`https://github.com/honey-team/${project.gh}`}>
            <Button modificator={"flat-orange"}>GitHub</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
