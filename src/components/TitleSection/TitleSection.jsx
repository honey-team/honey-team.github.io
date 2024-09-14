import styles from "./TitleSection.module.css";
import Title from "../Title/Title";
import cn from "classnames";
import Input from "../Input/Input";
import DecorativeLine from "../DecorativeLine/DecorativeLine";

function TitleSection({ title }) {
  return (
    <section className={styles["title-section"]}>
      <div className={styles["wrapper"]}>
        <Title className={styles["title"]}>{title}</Title>
        <form className={styles["form"]}>
          <Input />
          <button className={styles["button"]}></button>
        </form>
        <DecorativeLine className={styles["dash"]} />
      </div>
    </section>
  );
}

export default TitleSection;
