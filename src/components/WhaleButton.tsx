import styles from './WhaleButton.module.css'

/** "Discover my books" — a whale outline that spouts water on hover/focus. */
export default function WhaleButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={styles.whale}>
      <svg className={styles.body} viewBox="0 0 300 90" aria-hidden="true">
        <g transform="translate(300 0) scale(-1 1)">
        <path
          className={styles.outline}
          d="M44 18 C140 12 205 18 236 34 C246 28 253 20 257 10 C250 7 244 4 237 1 C250 -1 262 3 269 9 C277 1 289 -2 298 2 C289 9 277 17 270 23 C267 40 261 53 249 62 C231 74 205 80 170 80 L50 80 C20 80 6 66 6 50 C6 32 20 18 44 18 Z"
        />
        <path className={styles.flipper} d="M88 74 C94 84 106 90 124 89 C116 84 112 78 112 74 Z" />
        </g>
      </svg>

      <svg className={styles.spout} viewBox="0 0 80 70" aria-hidden="true">
        <path className={styles.jet} d="M40 68 C40 50 40 36 40 22" />
        <path className={`${styles.jet} ${styles.jetL}`} d="M40 30 C34 16 22 10 10 14" />
        <path className={`${styles.jet} ${styles.jetR}`} d="M40 30 C46 16 58 10 70 14" />
        <circle className={`${styles.drop} ${styles.d1}`} cx="10" cy="14" r="2.6" />
        <circle className={`${styles.drop} ${styles.d2}`} cx="70" cy="14" r="2.6" />
        <circle className={`${styles.drop} ${styles.d3}`} cx="40" cy="20" r="2.2" />
        <circle className={`${styles.drop} ${styles.d4}`} cx="24" cy="12" r="1.8" />
        <circle className={`${styles.drop} ${styles.d5}`} cx="56" cy="12" r="1.8" />
      </svg>

      <span className={styles.label}>{children}</span>
    </a>
  )
}
