import cn from "classnames";

import styles from "./DecorativeLine.module.css";
import { FunctionComponent } from "react";

type DecorativeLineProps = {
	className: string;
	// Other props
	[key: string]: any;
};

const DecorativeLine: FunctionComponent<DecorativeLineProps> = ({className, ...props}) => {
	return (
		<div className={cn(className, styles["decorative-line"])} {...props}/>
	);
};

export default DecorativeLine;