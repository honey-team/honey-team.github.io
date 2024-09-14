import styles from "./Title.module.css";
import cn from "classnames";

function Title({children, className}) {
	return(<h2 className={cn(className, styles["title"])}>{children}</h2>)
}

export default Title;