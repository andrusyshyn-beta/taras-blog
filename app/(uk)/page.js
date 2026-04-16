import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.featured).slice(0, 6);
  const recentPosts = allPosts.filter((p) => !p.featured).slice(0, 6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              Новий матеріал щотижня
            </div>
            <h1 className={styles.heroTitle}>
              Будую AI-first компанію{' '}
              <span className={styles.heroAccent}>без жодного працівника</span>
            </h1>
            <p className={styles.heroDesc}>
              Архітектура автономного бізнесу в епоху ШІ. Кейси, автоматизація та стратегії росту, де 80% процесів виконують AI-агенти.
            </p>
            <div className={styles.heroActions}>
              <Link href="/blog" className="btn btn--primary">
                Читати blog →
              </Link>
              <Link href="/about" className="btn btn--ghost">
                Про мене
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>$500k+</span>
                <span className={styles.statLabel}>керованих рекламних бюджетів</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>40+</span>
                <span className={styles.statLabel}>успішно реалізованих проєктів</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>9+</span>
                <span className={styles.statLabel}>років у digital</span>
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
                      <span>✍️ {allPosts[0].readingTime} хв</span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="tag">Технології</span>
                    <h4>Як AI змінює маркетинг у 2026</h4>
                    <p>Огляд інструментів та стратегій...</p>
                    <div className={styles.heroCardMeta}>
                      <span>✍️ 8 хв</span>
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
              <span className={styles.sectionLabel}>Вибране</span>
              <h2>Найкращі матеріали</h2>
              <Link href="/blog" className={styles.seeAll}>Дивитись усі →</Link>
            </div>
            <div className={styles.grid3}>
              {featuredPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} featured priority={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== RECENT ARTICLES ===== */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Блог</span>
            <h2>Останні статті</h2>
            <Link href="/blog" className={styles.seeAll}>Усі статті →</Link>
          </div>
          {recentPosts.length > 0 ? (
            <div className={styles.grid3}>
              {recentPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Статті скоро з&apos;являться. Підпишись, щоб не пропустити!</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== MY STACK ===== */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Стек</span>
            <h2>Інструменти моєї роботи</h2>
            <Link href="/tools" className={styles.seeAll}>Усі інструменти →</Link>
          </div>
          <div className={styles.stackGrid}>
            <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>n8n</div>
              <div className={styles.stackContent}>
                <h3>n8n Cloud</h3>
                <p>Автоматизація AI воркфлоу</p>
              </div>
            </a>
            <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>Eleven</div>
              <div className={styles.stackContent}>
                <h3>ElevenLabs</h3>
                <p>Генерація AI голосу</p>
              </div>
            </a>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>HeyGen</div>
              <div className={styles.stackContent}>
                <h3>HeyGen</h3>
                <p>AI відео-аватари</p>
              </div>
            </a>
            <a href="https://www.hostinger.com/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>Host</div>
              <div className={styles.stackContent}>
                <h3>Hostinger</h3>
                <p>Надійний хостинг</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutAvatar}>
              <div className={styles.avatarRing}>
                <div className={styles.avatarInner}>
                  <Image 
                    src="/images/taras-photo.jpg" 
                    alt="Тарас Андрусишин" 
                    className={styles.avatarImage} 
                    width={114} 
                    height={114}
                    quality={90}
                  />
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Про автора</span>
              <h2>Привіт, я Тарас 👋</h2>
              <p>
                Вивчаю ШІ, пишу про технології та маркетинг. Мій фокус — практичний контент без зайвої теорії: інструменти, стратегії, кейси, що реально працюють.
              </p>
              <Link href="/about" className="btn btn--ghost">
                Детальніше про мене →
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
              <h2>Підпишись на канал</h2>
              <p>
                Найкраще з блогу — щодня в Telegram. Без алгоритмів, без спаму. Тільки корисне.
              </p>
            </div>
            <div className={styles.newsletterForm}>
              <a
                href="https://t.me/lab_of_autonomy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Підписатись у Telegram →
              </a>
              <div className={styles.newsletterSocial}>
                <span>Також у соцмережах:</span>
                <div className={styles.socialPills}>
                  <a href="https://www.linkedin.com/in/taras-andrusyshyn-0008bb3b5/" target="_blank" rel="noopener noreferrer" className={styles.pill}>LinkedIn</a>
                  <a href="https://www.facebook.com/andrusyshyn.ts" target="_blank" rel="noopener noreferrer" className={styles.pill}>Facebook</a>
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
