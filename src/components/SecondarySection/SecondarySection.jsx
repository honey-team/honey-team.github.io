import Button from "../Button/Button";
import DecorativeLine from "../DecorativeLine/DecorativeLine";
import Title from "../Title/Title";
import styles from "./SecondarySection.module.css";

function SecondarySection() {
return(<section className={styles["secondary-section"]}>
	<DecorativeLine className={styles["secondary-section__dash"]}/>
	<div className="wrapper">
		
		<div className={styles["content"]}>
			<img src="images/repos.png" className={styles["image"]}></img>
		<Title className={styles["secondary-title"]}>Мы за OpenSource</Title>
		<p className={styles["text"]}>Почти все наши проекты публикуются на GitHub. Даже этот сайт! Это дает возможность вам принять участие в разработке.</p>
		<a href="https://github.com/honey-team" target="_blank"><Button modificator="main">GitHub</Button></a>
		</div>

	</div>
</section>)
}

export default SecondarySection;