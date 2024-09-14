import DecorativeLine from "../DecorativeLine/DecorativeLine";
import Title from "../Title/Title";
import styles from "./ThirdSection.module.css";

function ThirdSection() {
  return (
    <section className={styles["third-section"]}>
      <DecorativeLine className={styles["third-section__dash"]} />
      <div className="wrapper">
        <div className={styles["content"]}>
		<img src="images/git.png" className={styles["image"]}></img>
		<Title className={styles["secondary-title"]}>Мы активные</Title>
		<p className={styles["text"]}>Наша команда старается выпускать обновления к проектам как можно чаще.<br></br>
		Также, все желающие могут помогать с разработкой благодаря Issues и Pull requests!</p>
		</div>
      </div>
    </section>
  );
}

export default ThirdSection;
