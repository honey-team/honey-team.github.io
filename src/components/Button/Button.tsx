import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

export enum Modificator {
	main = 'main',
	white = 'white',
	flat_orange = 'flat-orange'
};

type ButtonProps = {
	children: ReactNode;
	modificator: Modificator;
	url?: string;
	to?: string;

	[key: string]: any;
};

const Button: FunctionComponent<ButtonProps> = ({children, modificator, url = '', to = '', ...props}) => {
	let btn = (
		<div className={
				cn(styles["button"],
				{
						[styles["orange"]]: modificator === Modificator.main,
						[styles["white"]]: modificator === Modificator.white,
						[styles["flat-orange"]]: modificator === Modificator.flat_orange
				})
			} {...props}>
			<p>{children}</p>
		</div>
	);
	return(
		<>
			{url && (
				<a href={url}>
					{btn}
				</a>
			)}
			{!url && to && (
				<Link to={to}>
					{btn}
				</Link>
			)}
			{!url && !to && (
				btn
			)}
		</>
	)
}

export default Button;