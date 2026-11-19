import styles from './Books.module.css'
import { Bubbles, WaveDivider } from './Water'

interface Book {
  title: string
  year: number
  publisher: string
  synopsis: string
  award: string
  goodreadsUrl: string
  bookshopUrl: string
  coverUrl: string
  coverAlt: string
}

const publishedBooks: Book[] = [
  {
    title: 'The Unbinding of Mary Reade',
    year: 2018,
    publisher: 'Sky Pony Press',
    synopsis:
      "There's no place for a girl in Mary's world — not in the home of her desperate, drunken mother, nor in the household of her wealthy grandmother, where no girl can be named heir. Disguised as a boy, Mary makes her living at sea. When pirates attack her ship and she spots a woman standing unafraid on the deck, gun and sword in hand, she turns her weapon on her own captain — and earns herself a place among Calico Jack's crew alongside the legendary Anne Bonny. Smitten and terrified in equal measure, Mary must decide what she's willing to risk for love and for her own unbinding.",
    award: 'Gold Medal · IPPY Award, YA Fiction',
    goodreadsUrl:
      'https://www.goodreads.com/book/show/32295460-the-unbinding-of-mary-reade',
    bookshopUrl:
      'https://bookshop.org/p/books/the-unbinding-of-mary-reade-miriam-mcnamara/9d2dd660b894d267',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781510727052-L.jpg',
    coverAlt: 'Cover of The Unbinding of Mary Reade',
  },
  {
    title: 'An Impossible Distance to Fall',
    year: 2019,
    publisher: 'Sky Pony Press',
    synopsis:
      "It's 1930, and Birdie Williams's charmed life has crashed along with the stock market. Her father has vanished after his bank failed, and with it everyone's savings. A talented dancer with more impulse than sense, Birdie joins a barnstorming circus — she'll wing-walk across the Midwest and find her father in Chicago. But the circus is full of people she's never had to reckon with before, and June, the quiet stunt pilot who keeps saving her life, is becoming impossible to ignore. A story about privilege, love, and learning who you are when everything else falls away.",
    award: 'Bronze Medal · IPPY Award, YA Fiction',
    goodreadsUrl:
      'https://www.goodreads.com/book/show/35217473-an-impossible-distance-to-fall',
    bookshopUrl:
      'https://bookshop.org/p/books/an-impossible-distance-to-fall-miriam-mcnamara/9781510735453',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781510735453-L.jpg',
    coverAlt: 'Cover of An Impossible Distance to Fall',
  },
]

function BookCover({ book }: { book: Book }) {
  return (
    <div className={styles.cover}>
      <span className={styles.coverFallback}>{book.title}</span>
      <img
        src={book.coverUrl}
        alt={book.coverAlt}
        className={styles.coverImg}
        onError={(e) => e.currentTarget.remove()}
      />
    </div>
  )
}

export default function Books() {
  return (
    <>
      <section className={styles.section} id="books">
        <Bubbles count={7} variant="light" duration={[8, 6]} seed={3} className={styles.bubbles} />
        <div className="container">
          <h2 className={`section-heading ${styles.heading} reveal`}>Books</h2>
          <p className={`section-label ${styles.subheading} reveal`}>Published works</p>

          <div className={styles.grid}>
            {publishedBooks.map((book) => (
              <article key={book.title} className={`${styles.card} reveal`}>
                <BookCover book={book} />
                <div className={styles.cardBody}>
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.meta}>
                    {book.year} · {book.publisher}
                  </p>
                  <p className={styles.award}>{book.award}</p>
                  <p className={styles.synopsis}>{book.synopsis}</p>
                  <div className={styles.links}>
                    <a href={book.goodreadsUrl} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
                      Goodreads
                    </a>
                    <a href={book.bookshopUrl} target="_blank" rel="noopener noreferrer" className={styles.linkSecondary}>
                      Bookshop.org
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider back="#7fb8db" front="#1d5a85" seed={0} />
      <section className={styles.deepwater} id="wip">
        <div className={styles.caustics} aria-hidden="true" />
        <Bubbles count={14} variant="dark" duration={[14, 16]} seed={11} className={styles.deepBubbles} />
        <div className="container" style={{ position: 'relative' }}>
          <p className={`section-label ${styles.subheading} reveal`}>Work in progress</p>
          <div className={`${styles.wipFeature} reveal`}>
            <div>
              <p className={styles.kicker}>Epic romantasy</p>
              <h3 className={styles.wipTitle}>The Unsound Sea</h3>
              <p className={styles.wipDesc}>
                An adult sapphic romantasy set in a resonant water world. An epic fairytale and a
                story of ecological reckoning: <em>The Little Mermaid</em> meets <em>FernGully</em> if
                the sea were being strip-mined into silence.
              </p>
            </div>
            <div className={styles.ripples} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <b />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
