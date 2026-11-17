import styles from './About.module.css'
import { WaveDivider } from './Water'

export default function About() {
  return (
    <>
    <WaveDivider back="#1d5a85" front="#e3f0f7" seed={1} flip background="var(--abyss)" />
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.photoCol} reveal`}>
            <img src="/headshot.jpg" alt="Miriam McNamara" className={styles.photo} />
          </div>

          <div className={styles.textCol}>
            <p className="section-label reveal">About the author</p>
            <h2 className={`section-heading ${styles.heading} reveal`}>Miriam McNamara</h2>

            <div className={`${styles.bio} reveal`}>
              <p>
                Miriam McNamara is a queer YA and romantasy author who was born in Ireland,
                raised in the American South, and now calls Minneapolis home. She has an MFA
                in Writing from Vermont College of Fine Arts, where her debut novel{' '}
                <em>The Unbinding of Mary Reade</em> won the Norma Fox Mazer Award for
                a YA work-in-progress.
              </p>
              <p>
                That book went on to win the Gold Medal for Young Adult Fiction from the
                Independent Publishers Book Awards. Her second novel,{' '}
                <em>An Impossible Distance to Fall</em>, took the Bronze.
              </p>
              <p>
                For a while, she took a detour into software engineering — a detour that
                turned into a career. But stories have a way of pulling you back. She's
                currently at work on an epic eco-fantasy romantasy series set in a world
                of water, and she's thrilled to be back where she belongs.
              </p>
              <p>
                When she's not writing, you'll find her in the kitchen, on the dance floor,
                or making mischief with her partner, her dogs, and her friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
