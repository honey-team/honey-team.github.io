import { ReactElement, useEffect, useState } from "react";

import TitleSection from "../../components/TitleSection/TitleSection";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import HTHead, {Pages} from "../../components/HTHead/HTHead";

import {SearchFor, GetSearchText} from "../../utils/search";

import styles from "./ProjectsPage.module.css";
import config from "../../../htconfig.json";
import { Member } from "../../utils/config_type_alias";

export default function ProjectsPage(): ReactElement {
    const [projects, setProjects] = useState([]);
    // var members: {[project_gh: string]: string[]} = {}
    const [members, setMembers] = useState([]);
    const [projectMembers, setProjectMembers]: [{[project_gh: string]: string[]}, (v: {[project_gh: string]: string[]}) => void] = useState({});
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        if (config.projects) {
            setProjects(config.projects.filter((project) => !project.gh.includes("/")));
            setError(false);
        } else setError(true);
    }, [projects]);

    useEffect(() => {
        if (config.members) {
            setMembers(config.members);
            setError(false);
        } else setError(true);
    }, [members]);

    useEffect(() => {
        let pms: {[pgh: string]: string[]} = {};
        members.forEach((m: Member) => {
            m.projects?.forEach((p) => {
                if (!pms[p])
                    pms[p] = [];
                pms[p].push(m.gh);
            });
        });
        setProjectMembers(pms);
    }, [projects, members, projectMembers]);
    return (                                                                                                                                                                                                                    
        <>
            <HTHead page={Pages.projects}/>
            <TitleSection title="Проекты" value={search} setValue={setSearch}/>
            <section className={styles["list-section"]}>
                <div className="wrapper">
                    {!error && (
                        <>
                            <p className={styles["text"]}>
                                {GetSearchText(SearchFor(projects, search, (v) => v.title ? v.title : v.gh).length, search, 'projects')}
                            </p>
                            <div className={styles["content"]}>
                                {SearchFor(projects, search, (v) => v.title ? v.title : v.gh).map((project, index) => {
                                    return <ProjectCard project={project} key={index} members={projectMembers[project.gh] ? projectMembers[project.gh] : []}/>;
                                }
                                )}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}