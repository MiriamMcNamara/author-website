import styles from './Hero.module.css'
import { Bubbles, Wave } from './Water'
import WhaleButton from './WhaleButton'

// [x0 %, top %, width, height, parallax speed]
const CLOUDS: [number, number, number, number, number][] = [
  [8, 14, 340, 90, 0.12],
  [62, 8, 420, 110, 0.2],
  [34, 26, 260, 70, 0.3],
  [78, 30, 300, 80, 0.16],
  [-6, 36, 380, 95, 0.24],
  [46, 4, 220, 60, 0.35],
]

// [offset, top %, scale, flap delay]
const BIRDS: [number, number, number, number][] = [
  [0, 18, 1, 0],
  [46, 14, 0.8, 0.25],
  [30, 26, 0.7, 0.5],
  [78, 22, 0.9, 0.15],
  [64, 32, 0.6, 0.7],
]

const WAVES = [
  { color: '#bfe0f2', base: 110, amps: [18, 9, 5], seed: 0.3, opacity: 0.9, speed: 0.1, drift: 40 },
  { color: '#7fb8db', base: 150, amps: [22, 10, 6], seed: 1.4, opacity: 0.75, speed: -0.18, drift: -55 },
  { color: '#3a84b4', base: 195, amps: [16, 12, 4], seed: 2.2, opacity: 0.55, speed: 0.28, drift: 70 },
  { color: '#7fb8db', base: 235, amps: [14, 8, 5], seed: 3.1, opacity: 1, speed: -0.36, drift: -90 },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.sun} data-parallax="0.35" />

      <div className={styles.clouds} aria-hidden="true">
        {CLOUDS.map(([x0, top, w, h, s], i) => (
          <div
            key={i}
            className={styles.cloud}
            data-cloud
            data-speed={s}
            data-x0={x0}
            data-w={w}
            style={{ top: `${top}%`, width: w, height: h, transform: `translateX(${(x0 / 100) * 1400}px)` }}
          />
        ))}
      </div>

      <div className={styles.birds} aria-hidden="true">
        {BIRDS.map(([ox, top, sc, fd], i) => (
          <div key={i} className={styles.bird} data-bird data-ox={ox} data-sc={sc} style={{ top: `${top}%` }}>
            <svg width={48 * sc} height={20 * sc} viewBox="0 0 34 14">
              <path
                d="M1 4 C6 1 11 3 17 10 C23 3 28 1 33 4"
                style={{ animationDelay: `-${fd}s`, animationDuration: `${1 + i * 0.12}s` }}
              />
            </svg>
          </div>
        ))}
      </div>

      <div className={styles.inner} data-hero-copy>
        <p className={styles.eyebrow}>Author</p>
        <h1 className={styles.name}>
          Miriam
          <br />
          McNamara
        </h1>
        <p className={styles.tagline}>Stories about finding yourself in unexpected places</p>
        <WhaleButton href="#books">Discover my books</WhaleButton>
      </div>

      <div className={styles.waves} aria-hidden="true">
        {WAVES.map((w, i) => (
          <Wave key={i} {...w} rise />
        ))}
      </div>
      <Bubbles count={12} variant="light" duration={[7, 6]} seed={7} className={styles.shallowBubbles} />
    </section>
  )
}
