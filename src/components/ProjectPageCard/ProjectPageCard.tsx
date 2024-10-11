import useImageColors from "react-image-colors";
import styles from "./ProjectPageCard.module.css";
import Route from "../../utils/links";
import ProjectMembersAvatars from "../ProjectMembersAvatars/ProjectMembersAvatars";
import MemberSocials from "../MemberSocials/MemberSocials";
import { Member, Project } from "../../utils/config_type_alias";
import { FunctionComponent } from "react";

type ProjectPageCardProps = {
    project: Project;
    members: Member[];
    // Other props
    [key: string]: any;
}

const ProjectPageCard: FunctionComponent<ProjectPageCardProps> = ({project, members, ...props}) => {
    const image_url = project.image ? Route(project.image) : Route('/images/projects/default.png');

    var { bgColor: avcolor } = useImageColors(image_url, {
        generateGradient: false
    });
    if (!avcolor) avcolor = '#272727';

    let members_ghs: string[] = [];
    members.forEach((member: Member) => {
        if (member)
            members_ghs.push(member.gh);
    });

    return (
        <div className={styles["card"]} style={{background: `linear-gradient(to right, ${avcolor} 0%, #272727 100%)`}} {...props}>
            <div className={styles["row"]}>
                <img src={image_url} className={styles["pimage"]}/>
                <div>
                    <h1 className={styles["pname"]}>{project.gh}</h1>
                    <ProjectMembersAvatars members={members_ghs} with_text={true} classNames={[styles["pmembers"]]}/>
                    <p className={styles["pdesc"]}>{project.description ? project.description : "Нет описания..."}</p>
                    <div className={styles["psocials"]}>
                        <MemberSocials socials={{gh: project.gh.includes('/') ? project.gh : `honey-team/${project.gh}` , ...project.socials}} height={40}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPageCard;