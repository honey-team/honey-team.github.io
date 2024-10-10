import styles from "./ErrorPage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import HTHead, { Pages } from "../../components/HTHead/HTHead";

function ErrorPage() {
  return (
    <div className={styles["error-page"]}>
      <HTHead page={Pages.error} />
      <span>404</span>
      <p className={styles["text"]}>Страница не найдена</p>
      <Link to="/">
        <Button modificator="flat-orange" style={{width: "400px"}}>На главную</Button>
      </Link>
    </div>
  );
}

export default ErrorPage;
