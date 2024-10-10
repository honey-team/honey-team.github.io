import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../htconfig.json";
import HTHead, { Pages } from "../../components/HTHead/HTHead.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import ProjectPageCard from "../../components/ProjectPageCard/ProjectPageCard.jsx";
import is_dev from "../../utils/dev";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(true);
    const [currentProject, setCurrentProject] = useState();
    const [projectMembers, setProjectMembers] = useState([]);
    const params = useParams();

    const getProjects = () => {
        if (data.projects) {
            setProjects(data.projects);
        } else setError(true);
    }

    const getMembers = () => {
        if (data.members) {
            setMembers(data.members);
        }
    }

    const getCurrentProject = () => {
        const project = projects.find((project) => project.gh === params.name);
        setCurrentProject(project);

        if (currentProject) {
            setError(false);
        } else setError(true);
    }

    const getProjectMembers = () => {
        let res = [];

        members.forEach((v) => {
            if (v.projects?.includes(currentProject.gh))
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
    }, [members, currentProject])

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