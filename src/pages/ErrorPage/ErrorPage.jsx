import styles from "./ErrorPage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={styles["error-page"]}>
      <span>404</span>
      <p>Страница не найдена</p>
      <Link to="/"><Button modificator="flat-orange" style={{width: "400px"}}>На главную</Button></Link>
    </div>
  );
}

export default ErrorPage;
