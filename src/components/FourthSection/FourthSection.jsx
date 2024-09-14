import DecorativeLine from "../DecorativeLine/DecorativeLine";
import Title from "../Title/Title";
import styles from "./FourthSection.module.css";

function FourthSection() {
  return (
    <section className={styles["fourth-section"]}>
      <DecorativeLine className={styles["fourth-section__dash"]} />
      <div className="wrapper">
        <div className={styles["content"]}>
			<div className={styles["images-wrapper"]}>
				<img src="icons/main-page-icons/Python.svg"></img>
				<img src="icons/main-page-icons/Html.svg"></img>
				<img src="icons/main-page-icons/Css.svg"></img>
				<img src="icons/main-page-icons/Js.svg"></img>
				<img src="icons/main-page-icons/Bd.svg"></img>
				<img src="icons/main-page-icons/C.svg"></img>
				<img src="icons/main-page-icons/C++.svg"></img>
			</div>
          <Title className={styles["fourth-title"]}>Много участников</Title>
          <p className={styles["text"]}>
            В нашей команде состоит уже более 15 человек.<br></br>
            Мы все специализируемся в разных языках программирования,<br></br>{" "}
            что позволяет создавать почти любые проекты.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
