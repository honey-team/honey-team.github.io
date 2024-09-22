import styles from "./Button.module.css"
import cn from "classnames"

export default function Button({children, modificator, link, ...props}) {
	return(
		<div className={
				cn(styles["button"],
				   {
						[styles["orange"]]: modificator === "main",
						[styles["white"]]: modificator === "white",
						[styles["flat-orange"]]: modificator === "flat-orange"
				   })
			} {...props}>
			<p>{children}</p>
		</div>
	)
}