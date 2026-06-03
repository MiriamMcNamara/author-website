import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Author</p>
        <h1 className={styles.name}>Miriam<br />McNamara</h1>
        <p className={styles.tagline}>
          Stories about finding yourself<br />in unexpected places
        </p>
        <a href="#books" className={styles.cta}>
          Discover my books
        </a>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
