import styles from './Footer.module.css'
import { Wave } from './Water'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.wave} aria-hidden="true">
        <Wave color="#0a1c2e" base={30} amps={[14, 7, 3]} seed={4} speed={0.2} viewHeight={60} />
      </div>
      <div className={styles.inner}>
        <span className={styles.name}>Miriam McNamara</span>
        <span className={styles.copy}>© {year}</span>
      </div>
    </footer>
  )
}
