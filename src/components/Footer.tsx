import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Miriam McNamara</span>
        <span className={styles.copy}>© {year}</span>
      </div>
    </footer>
  )
}
