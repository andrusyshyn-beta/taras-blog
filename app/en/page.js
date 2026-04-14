import Link from 'next/link';
import Image from 'next/image';
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
              Building an AI-first company{' '}
              <span className={styles.heroAccent}>with zero employees</span>
            </h1>
            <p className={styles.heroDesc}>
              Autonomous business architecture in the AI era. Case studies, automation, and growth strategies where 80% of processes are handled by AI agents.
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

      {/* ===== MY STACK ===== */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Stack</span>
            <h2>Tools I Work With</h2>
            <Link href="/en/tools" className={styles.seeAll}>All tools →</Link>
          </div>
          <div className={styles.stackGrid}>
            <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>n8n</div>
              <div className={styles.stackContent}>
                <h3>n8n Cloud</h3>
                <p>AI Workflow Automation</p>
              </div>
            </a>
            <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>Eleven</div>
              <div className={styles.stackContent}>
                <h3>ElevenLabs</h3>
                <p>AI Voice Generation</p>
              </div>
            </a>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>HeyGen</div>
              <div className={styles.stackContent}>
                <h3>HeyGen</h3>
                <p>AI Video Avatars</p>
              </div>
            </a>
            <a href="https://www.hostinger.com/" target="_blank" rel="noopener noreferrer" className={styles.stackItem}>
              <div className={styles.stackIcon}>Host</div>
              <div className={styles.stackContent}>
                <h3>Hostinger</h3>
                <p>Reliable Hosting</p>
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
                    alt="Taras Andrusyshyn" 
                    className={styles.avatarImage} 
                    width={114} 
                    height={114}
                    quality={90}
                  />
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

