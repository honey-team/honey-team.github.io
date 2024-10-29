import { Key, ReactElement } from "react";
import config from "../../htconfig.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export function project_card(gh: string, key?: Key): ReactElement {
    let project = config.projects.find((v) => v.gh === gh);
    let members: string[] = [];
    config.members.forEach((v) => {
        if (v.projects?.includes(gh))
            members.push(v.gh);
    });
    return <ProjectCard project={project} members={members} key={key}/>
}