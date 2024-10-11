import { FunctionComponent } from "react";
import Icons from "../Icons/Icons";
import styles from "./Logo.module.css";
import cn from "classnames";

export enum Color {
    white = 'white',
    gray = 'gray'
};

type LogoProps = {
    color: Color;
    classNames?: string[];
    // Other props
    [key: string]: any;
}

const Logo: FunctionComponent<LogoProps> = ({ color, classNames = [], ...props }) => {
    return (
        <div className={cn(styles["logo__wrapper"], ...classNames)} {...props}>
            <Icons name="logo" className={
                cn(styles["logo"], {
                  [styles["logo_white"]]: color === Color.white,
                  [styles["logo_gray"]]: color === Color.gray
                })}/>
            <span className={
                cn(styles["logo__text"], {
                  [styles["logo__text_white"]]: color === Color.white,
                  [styles["logo__text_gray"]]: color === Color.gray
                })}>
                HoneyTeam
            </span>
        </div>
    );
}

export default Logo;