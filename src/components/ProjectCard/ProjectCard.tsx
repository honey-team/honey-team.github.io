import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import Button, { Modificator } from "../Button/Button";

import styles from "./ProjectCard.module.css";

import { Project } from "../../utils/config_type_alias";
import is_dev from "../../utils/dev";

type ProjectCardProps = {
    project: Project | undefined;
    modificator?: "small";
    // Other props
    [key: string]: any;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project, modificator }) => {
    if (!project) {
        return <></>;
    }

    return (
        <div className={cn(styles["project-card"], {
                          [styles["project-card_small"]]: modificator === "small",
                        })}>
            {is_dev.project_page && (
                <Link to={`/projects/${project.gh}`}>
                    <div className={styles["project-card__img"]}>
                        <img src={project.image ? project.image : 'images/projects/default.png'}/>
                    </div>
                </Link>
            )}
            {!is_dev.project_page && (
                <div className={styles["project-card__img"]}>
                    <img src={project.image ? project.image : 'images/projects/default.png'}/>
                </div>
            )}

            <div className={styles["project-card__info"]}>
                <div className={styles["project-card__gradient"]}/>
                <div className={styles["project-card__fill"]}/>
                <div className={styles["project-card__title"]}>
                    {is_dev.project_page && (
                    <Link to={`/projects/${project.gh}`}>
                        {project.title ? project.title : project.gh}
                    </Link>
                    )}
                    {!is_dev.project_page && (
                        <>
                            {project.title ? project.title : project.gh}
                        </>
                    )}
                </div>
                <div className={styles["project-card__description"]}>
                    {project.description}
                </div>
                <div className={styles["project-card__button"]}>
                        <Button
                            modificator={Modificator.flat_orange}
                            url={project.gh.includes("/") ? `https://github.com/${project.gh}` : `https://github.com/honey-team/${project.gh}`}
                        >
                            GitHub
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
