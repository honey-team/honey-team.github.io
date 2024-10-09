import useImageColors from "react-image-colors";
import styles from "./ProjectPageCard.module.css";
import Route from "../../utils/links";
import ProjectMembersAvatars from "../ProjectMembersAvatars/ProjectMembersAvatars";
import MemberSocials from "../MemberSocials/MemberSocials";

export default function ProjectPageCard({project, members, ...props}) {
    // const fac = new FastAverageColor();

    const image_url = project.image ? Route(project.image) : Route('/images/projects/default.png');
    console.log(image_url)

    // average(image_url, (err, color) => {
    //     if (err) throw err;
    //     var [red, green, blue, alpha] = color;
    //     avcolor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    // });

    var { avcolor } = useImageColors(image_url, {
        generateGradient: false
    });
    if (!avcolor) avcolor = '#272727';

    let members_ghs = [];

    members.forEach((member) => {
        if (member)
            members_ghs.push(member?.gh);
    })

    // let socials = project.socials;
    // socials = {
    //     gh: project.gh,
    //     ...socials
    // };

    console.log(members);
    console.log(members_ghs);

    return (
        <div className={styles["card"]} style={{background: `linear-gradient(to right, ${avcolor} 0%, #272727 100%)`}}>
            <div className={styles["row"]}>
                <img src={image_url} className={styles["pimage"]}/>
                <div>
                    <h1 className={styles["pname"]}>{project.gh}</h1>
                    {/* <ProjectMembersAvatars members={["bleudev", "moontr3", "mbutsk"]} with_text={true}/> */}
                    <ProjectMembersAvatars members={members_ghs} with_text={true}/>
                    <p className={styles["pdesc"]}>{project.description ? project.description : "Нет описания..."}</p>
                    <div className={styles["psocials"]}>
                        <MemberSocials socials={{gh: `honey-team/${project.gh}` , ...project.socials}} height={40}/>
                    </div>
                </div>
            </div>
        </div>
    );
}