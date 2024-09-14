import styles from "./DecorativeLine.module.css";
import cn from "classnames";

function DecorativeLine({className,}) {
	return(<div className={cn(className, styles["decorative-line"])}></div>)
}

export default DecorativeLine;