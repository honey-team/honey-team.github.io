import { ReactElement, useEffect, useState } from "react";

import TitleSection from "../../components/TitleSection/TitleSection";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import HTHead, {Pages} from "../../components/HTHead/HTHead";

import styles from "./ProjectsPage.module.css";
import config from "../../../htconfig.json"; 

export default function ProjectsPage(): ReactElement {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(false);
    const getProjects = () => {
        if (config.projects) {
            setProjects(config.projects.filter((project) => !project.gh.includes("/")));
            setError(false);
        } else setError(true);
    };
    useEffect(() => {
    getProjects()
    }, []);

    return (
        <>
            <HTHead page={Pages.projects}/>
            <TitleSection title="Проекты"/>
            <section className={styles["list-section"]}>
                <div className="wrapper">
                    {!error && (
                        <div className={styles["content"]}>
                            {projects.map((project, index) => {
                                return <ProjectCard project={project} key={index}/>;
                            }
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}