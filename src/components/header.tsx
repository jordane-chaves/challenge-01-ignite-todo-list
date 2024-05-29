import toDoLogo from "../assets/logo.svg";
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={toDoLogo} alt="Logotipo ToDo List" />
    </header>
  );
}
