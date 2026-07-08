import styles from './Books.module.css'

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
    award: '🥇 Gold Medal — IPPY Award for YA Fiction',
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
    award: '🥉 Bronze Medal — IPPY Award for YA Fiction',
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
      <img src={book.coverUrl} alt={book.coverAlt} className={styles.coverImg} />
    </div>
  )
}

export default function Books() {
  return (
    <section className={styles.section} id="books">
      <div className="container">
        <p className="section-label">Published works</p>
        <h2 className={styles.heading}>Books</h2>

        <div className={styles.grid}>
          {publishedBooks.map((book) => (
            <article key={book.title} className={styles.card}>
              <BookCover book={book} />
              <div className={styles.cardBody}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.meta}>
                  {book.year} · {book.publisher}
                </p>
                <p className={styles.award}>{book.award}</p>
                <p className={styles.synopsis}>{book.synopsis}</p>
                <div className={styles.links}>
                  <a
                    href={book.goodreadsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkPrimary}
                  >
                    Goodreads
                  </a>
                  <a
                    href={book.bookshopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkSecondary}
                  >
                    Bookshop.org
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.wip}>
          <div className="ornament">
            <span>✦</span>
          </div>
          <p className="section-label">Coming soon</p>
          <h2 className={styles.wipHeading}>Works in progress</h2>
          <div className={styles.wipGrid}>
            <div className={styles.wipCard}>
              <h3 className={styles.wipTitle}>Epic Romantasy</h3>
              <p className={styles.wipText}>
                The first book in an epic romantasy series — under construction.
              </p>
            </div>
            <div className={styles.wipCard}>
              <h3 className={styles.wipTitle}>Contemporary YA</h3>
              <p className={styles.wipText}>
                A new contemporary young adult novel, set in Minneapolis —
                under construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
