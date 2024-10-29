import { ReactElement, useEffect, useState } from "react";

import TitleSection from "../../components/TitleSection/TitleSection";
import HTHead, {Pages} from "../../components/HTHead/HTHead";

import {SearchFor, GetSearchText} from "../../utils/search";

import styles from "./ProjectsPage.module.css";
import config from "../../../htconfig.json";
import { project_card } from "../../utils/get";

export default function ProjectsPage(): ReactElement {
    const [projects, setProjects] = useState([]);
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        if (config.projects) {
            setProjects(config.projects.filter((project) => !project.gh.includes("/")));
            setError(false);
        } else setError(true);
    }, []);
    useEffect(() => {
        if (config.members) {
            setMembers(config.members);
            setError(false);
        } else setError(true);
    }, [members]);

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
                                {SearchFor(projects, search, (v) => v.title ? v.title : v.gh).map(
                                    (project, index) => project_card(project.gh, index)
                                )}
                            </div>
                        </>
                    )}
                    {search}
                </div>
            </section>
        </>
    );
}