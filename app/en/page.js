import Link from 'next/link';
import { getAllPosts } from '@/lib/posts-en';
import ArticleCard from '@/components/en/ArticleCard/ArticleCard';
import NewsletterForm from '@/components/en/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.featured).slice(0, 3);
  const recentPosts = allPosts.slice(0, 6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              New material every week
            </div>
            <h1 className={styles.heroTitle}>
              Adopt AI faster than{' '}
              <span className={styles.heroAccent}>competitors</span>
            </h1>
            <p className={styles.heroDesc}>
              Practical blog about Artificial Intelligence, automation, and growth marketing. I show how one person with the right AI tools can work more efficiently than a whole team.
            </p>
            <div className={styles.heroActions}>
              <Link href="/en/blog" className="btn btn--primary">
                Read blog →
              </Link>
              <Link href="/en/about" className="btn btn--ghost">
                About Me
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>$500k+</span>
                <span className={styles.statLabel}>managed ad budgets</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>40+</span>
                <span className={styles.statLabel}>successful projects</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>9+</span>
                <span className={styles.statLabel}>years in digital</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <div className={styles.heroDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.heroCardTitle}>Latest Post</span>
              </div>
              <div className={styles.heroCardBody}>
                {allPosts[0] ? (
                  <>
                    <span className="tag">{allPosts[0].category}</span>
                    <h4>{allPosts[0].title}</h4>
                    <p>{allPosts[0].excerpt}</p>
                    <div className={styles.heroCardMeta}>
                      <span>✍️ {allPosts[0].readingTime} min</span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="tag">Tech</span>
                    <h4>How AI is changing marketing in 2026</h4>
                    <p>Overview of tools and strategies...</p>
                    <div className={styles.heroCardMeta}>
                      <span>✍️ 8 min</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Decorative elements */}
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ARTICLES ===== */}
      {featuredPosts.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Featured</span>
              <h2>Best articles</h2>
              <Link href="/en/blog" className={styles.seeAll}>See all →</Link>
            </div>
            <div className={styles.grid3}>
              {featuredPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== RECENT ARTICLES ===== */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Blog</span>
            <h2>Latest Posts</h2>
            <Link href="/en/blog" className={styles.seeAll}>All articles →</Link>
          </div>
          {recentPosts.length > 0 ? (
            <div className={styles.grid3}>
              {recentPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Articles are coming soon. Subscribe to not miss out!</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutAvatar}>
              <div className={styles.avatarRing}>
                <div className={styles.avatarInner}>
                  <img src="/images/taras-photo.jpg" alt="Taras Andrusyshyn" className={styles.avatarImage} />
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>About the author</span>
              <h2>Hi, I am Taras 👋</h2>
              <p>
                I study AI, write about tech and marketing. My focus is practical content without fluff: tools, strategies, and case studies that actually work.
              </p>
              <Link href="/en/about" className="btn btn--ghost">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterInner}>
            <div className={styles.newsletterContent}>
              <span className={styles.sectionLabel}>Telegram</span>
              <h2>Subscribe to the channel</h2>
              <p>
                The best from the blog — daily in Telegram. No algorithms, no spam. Just useful content.
              </p>
            </div>
            <div className={styles.newsletterForm}>
              <a
                href="https://t.me/lab_of_autonomy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Subscribe on Telegram →
              </a>
              <div className={styles.newsletterSocial}>
                <span>Also on social media:</span>
                <div className={styles.socialPills}>
                  <a href="https://www.facebook.com/andrusyshyn.ts" target="_blank" rel="noopener noreferrer" className={styles.pill}>Facebook</a>
                  <a href="https://www.instagram.com/ts_andrusyshyn" target="_blank" rel="noopener noreferrer" className={styles.pill}>Instagram</a>
                  <a href="https://www.threads.net/@ts_andrusyshyn" target="_blank" rel="noopener noreferrer" className={styles.pill}>Threads</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

