import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/lib/posts-en';
import ArticleCard from '@/components/en/ArticleCard/ArticleCard';
import NewsletterForm from '@/components/en/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  // Schema.org structured data
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: 'Taras Andrusyshyn' },
    publisher: { '@type': 'Person', name: 'Taras Andrusyshyn' },
    datePublished: post.date,
    dateModified: post.date,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://andrusyshyn.vercel.app/en/blog' },
      { '@type': 'ListItem', position: 2, name: post.category, item: `https://andrusyshyn.vercel.app/en/blog?category=${encodeURIComponent(post.category)}` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://andrusyshyn.vercel.app/en/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbSchema]) }}
      />

      <article className={styles.article}>
        {/* Article header */}
        <header className={styles.header}>
          <div className="container--narrow">
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Navigation">
              <Link href="/en/blog">Blog</Link>
              <span>›</span>
              <Link href={`/en/blog?category=${encodeURIComponent(post.category)}`} className="tag">
                {post.category}
              </Link>
            </nav>

            <h1 className={styles.title}>{post.title}</h1>

            {post.excerpt && (
              <p className={styles.excerpt}>{post.excerpt}</p>
            )}

            {/* Meta */}
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>TA</div>
                <div>
                  <span className={styles.authorName}>Taras Andrusyshyn</span>
                  <span className={styles.date}>{formatDate(post.date)}</span>
                </div>
              </div>
              <div className={styles.readTime}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {post.readingTime} min read
              </div>
            </div>
          </div>

          {/* Featured image */}
          {post.image && (
            <div className={styles.featuredImage}>
              <div className="container">
                <img src={post.image} alt={post.title} />
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="container--narrow">
          <div
            className={`prose ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className={styles.share}>
            <span>Share:</span>
            <a
              href={`https://t.me/share/url?url=https://andrusyshyn.vercel.app/en/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareBtn}
            >
              Telegram
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://andrusyshyn.vercel.app/en/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareBtn}
            >
              Facebook
            </a>
          </div>

          {/* Author box */}
          <div className={styles.authorBox}>
            <div className={styles.authorBoxAvatar}>TA</div>
            <div>
              <h4>Taras Andrusyshyn</h4>
              <p>I study AI, write about tech and marketing. Practical content without fluff.</p>
              <Link href="/en/about" className={styles.authorLink}>About Me →</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterBox}>
            <h3>Liked the article?</h3>
            <p>Subscribe to the newsletter — weekly best in tech and marketing.</p>
            <NewsletterForm compact />
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className="container">
              <h2>Related Materials</h2>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <ArticleCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
