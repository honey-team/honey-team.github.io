import Icons from "../Icons/Icons";
import styles from "./Logo.module.css";
import cn from "classnames";

function Logo({ color }) {
  return (
    <div className={styles["logo__wrapper"]}>
      <Icons
        name="logo"
        className={cn(styles["logo"], {
          [styles["logo_white"]]: color === "white",
          [styles["logo_gray"]]: color === "gray",
        })}
      />
      <span
        className={cn(styles["logo__text"], {
          [styles["logo__text_white"]]: color === "white",
          [styles["logo__text_gray"]]: color === "gray",
        })}
      >
        HoneyTeam
      </span>
    </div>
  );
}

export default Logo;
