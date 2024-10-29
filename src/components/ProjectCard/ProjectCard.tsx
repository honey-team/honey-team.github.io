import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./ProjectCard.module.css";

import { Project } from "../../utils/config_type_alias";
import is_dev from "../../utils/dev";
import MemberSocials from "../MemberSocials/MemberSocials";
import ProjectMembersAvatars from "../ProjectMembersAvatars/ProjectMembersAvatars";

type ProjectCardProps = {
    project: Project | undefined;
    members: string[];
    modificator?: "small";
    // Other props
    [key: string]: any;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project, members, modificator }) => {
    if (!project) {
        return <></>;
    }

    let _title = project.title ? project.title : project.gh;
    let image_obj = (
        <div className={styles["project-card__img"]}>
            <img src={project.image ? project.image : '/images/projects/default.png'}/>
        </div>
    );

    return (
        <div className={cn(styles["project-card"], {
                          [styles["project-card_small"]]: modificator === "small",
                        })}>
            {is_dev.project_page && (
                <Link to={`/projects/${project.gh}`}>
                    {image_obj}              
                </Link>
            )}
            {!is_dev.project_page && image_obj}

            <div className={styles["project-card__info"]}>
                <div className={styles["project-card__title"]}>
                    {is_dev.project_page && (
                    <Link to={`/projects/${project.gh}`}>
                        <p>{project.title ? project.title : project.gh}</p>
                        <ProjectMembersAvatars members={members} classNames={[styles["project-card__members"]]}/>
                    </Link>
                    )}
                    {!is_dev.project_page && <p>{_title}</p>}
                </div>
                <div className={styles["project-card__description"]}>
                    {project.description ? project.description : 'Нет описания'}
                </div>
                <div className={styles["socials"]}>
                    <MemberSocials socials={{gh: project.gh.includes('/') ? project.gh : `honey-team/${project.gh}`, ...project.socials}}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
