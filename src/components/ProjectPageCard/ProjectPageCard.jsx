import useImageColors from "react-image-colors";
import styles from "./ProjectPageCard.module.css";
import Route from "../../utils/links";

export default function ProjectPageCard({project, ...props}) {
    // const fac = new FastAverageColor();

    const image_url = project.image ? Route(project.image) : Route('/images/projects/default.png');
    console.log(image_url)

    // average(image_url, (err, color) => {
    //     if (err) throw err;
    //     var [red, green, blue, alpha] = color;
    //     avcolor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    // });

    var options = {
        generateGradient: false
    }
    var { avcolor } = useImageColors(image_url, options);
    if (!avcolor) avcolor = '#272727';
    console.log(avcolor)

    return (
        <div className={styles["card"]} style={{background: `linear-gradient(to right, ${avcolor} 0%, #272727 100%)`}}>
            <div className={styles["row"]}>
                <img src={image_url} className={styles["pimage"]}/>
                <h1 className={styles["pname"]}>{project.gh}</h1>
            </div>
        </div>
    );
}