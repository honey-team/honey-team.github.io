import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../htconfig.json";
import HTHead, { Pages } from "../../components/HTHead/HTHead";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProjectPageCard from "../../components/ProjectPageCard/ProjectPageCard";
import is_dev from "../../utils/dev";
import styles from "./ProjectPage.module.css";

import { Member, Project } from "../../utils/config_type_alias";

export default function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(true);
    const [currentProject, setCurrentProject] = useState();
    const [projectMembers, setProjectMembers] = useState([]);
    const params = useParams();

    const getProjects = () => {
        if (data.projects) setProjects(data.projects);
        else setError(true);
    }

    const getMembers = () => { if (data.members) setMembers(data.members); }

    const getCurrentProject = () => {
        setCurrentProject(projects.find((project: Project) => project.gh === params.name));
        if (currentProject) setError(false);
        else setError(true);
    }

    const getProjectMembers = () => {
        let res = [];
        members.forEach((v: Member) => {
            if (v.projects?.includes(currentProject?.gh))
                res.push(v);
        });
        setProjectMembers(res);
    }

    useEffect(() => {
        getProjects();
    }, []);
    useEffect(() => {
        getMembers();
    }, []);
    useEffect(() => {
        getCurrentProject();
    }, [projects, currentProject]);
    useEffect(() => {
        if (currentProject) getProjectMembers();
    }, [members, currentProject]);

    return (
        <>
            {error && (
                <ErrorPage/>
            )}
            {!error && is_dev.project_page && (
                <div className={styles["page"]}>
                    <HTHead page={Pages.project} gh={currentProject.gh} />
                    <ProjectPageCard project={currentProject} members={projectMembers}/>
                </div>
            )}
            {!error && !is_dev.project_page && (
                <div className={styles["page"]}>
                    <HTHead page={Pages.project} gh={currentProject.gh} />
                    <h1>В разработке!</h1>
                </div>
            )} 
        </>
    );
}