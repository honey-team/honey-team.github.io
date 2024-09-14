import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
return(<footer className={styles["footer"]}>
	<div className={styles["wrapper"]}>
		<div className={styles["content"]}>

		
	<div className={styles["left-part"]}>
		<Logo color="gray"/>
	</div>
	<div className={styles["right-part"]}>
		<ul className={styles["navigation"]}>
			<li>Страницы</li>
			<li><Link to="/">Главная</Link></li>
			<li><a href="#!">Проекты</a></li>
			<li><Link to="/members">Участники</Link></li>
			<li><a href="#!">Блог</a></li>
		</ul>
		<ul className={styles["navigation"]}>
			<li>Команда</li>
			<li><a href="#!">О нас</a></li>
			<li><a href="#!">Вступить</a></li>
			<li><a href="#!">Поддержка</a></li>
			<li><a href="#!">Источники</a></li>
		</ul>
	</div>
	</div>
	</div>
	
</footer>)
}

export default Footer;