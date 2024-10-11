import { FunctionComponent } from "react";

import Button, {Modificator} from "../Button/Button";

import styles from "./MainSection.module.css";

import Route from "../../utils/links";

const MainSection: FunctionComponent = () => {
	return(
		<section className={styles["main-section"]}>
			<div className="wrapper">
				<div className={styles["main-section__wrapper"]}>
					<div className={styles["logo"]}>
						<img src="images/logo_big.png"/>
					</div>
					<h1 className={styles["header"]}>HoneyTeam</h1>
					<p className={styles["text"]}>
						Мы - команда разработчиков, которые создают <br/> различные проекты для помощи людям.
					</p>
					<div className={styles["buttons"]}>
						<Button modificator={Modificator.main} url={Route("/", "gh")}>
							GitHub
						</Button>
						<Button modificator={Modificator.white} to="/members">
							Участники
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainSection;