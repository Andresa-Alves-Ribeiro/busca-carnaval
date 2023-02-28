import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <span className={styles.span1}>Desenvolvido</span> <span className={styles.span2}>por</span>
      <a href="https://www.linkedin.com/in/andresa-alves-ribeiro/" target="_blank" className={styles.link} >
        <span className={styles.span3}>Andresa</span> <span className={styles.span4}>A.</span> <span className={styles.span5}>Ribeiro</span>
      </a>
    </div>
  );
}
