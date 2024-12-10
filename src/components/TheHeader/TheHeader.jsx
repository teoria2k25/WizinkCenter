import styles from "../TheHeader/TheHeader.module.css";
import Logo from "../../assets/logo.svg";

function TheHeader() {
  return (
    <header className={styles.header}>
      <div>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
}

export default TheHeader;
