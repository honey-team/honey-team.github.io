import React, {FunctionComponent, ReactNode} from "react";
import cn from "classnames";

import styles from "./Title.module.css";


type TitleProps = {
	children: ReactNode;
	className: string;
	// Other props
	[key: string]: any;
};

const Title: FunctionComponent<TitleProps> = ({children, className, ...props}) => {
	return (
		<h2 className={cn(className, styles["title"])} {...props}>
			{children}
		</h2>
	);
};

export default Title;