import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/lib/posts';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://taras-blog.vercel.app/blog/${slug}`,
      languages: {
        'uk-UA': `https://taras-blog.vercel.app/blog/${slug}`,
        'en-US': `https://taras-blog.vercel.app/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ['https://taras-blog.vercel.app/about'],
      images: [post.image || '/images/default-og.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || '/images/default-og.png'],
    },
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('uk-UA', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  // Schema.org structured data
  const authorEntity = {
    '@type': 'Person',
    name: 'Taras Andrusyshyn',
    url: 'https://taras-blog.vercel.app/about',
    jobTitle: 'AI Developer & Growth Marketer',
    sameAs: [
      'https://t.me/lab_of_autonomy',
      'https://www.facebook.com/andrusyshyn.ts',
      'https://www.instagram.com/ts_andrusyshyn',
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://taras-blog.vercel.app/blog/${post.slug}`,
    author: authorEntity,
    publisher: authorEntity,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: 'uk-UA',
    ...(post.image && { image: post.image }),
    ...(post.tags && { keywords: post.tags.join(', ') }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Блог', item: 'https://taras-blog.vercel.app/blog' },
      { '@type': 'ListItem', position: 2, name: post.category, item: `https://taras-blog.vercel.app/blog?category=${encodeURIComponent(post.category)}` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://taras-blog.vercel.app/blog/${post.slug}` },
    ],
  };

  // FAQPage schema — auto-generated from ## FAQ section in the post
  const faqSchema = post.faqItems && post.faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  } : null;

  const schemas = [schema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <article className={styles.article}>
        {/* Article header */}
        <header className={styles.header}>
          <div className="container--narrow">
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Навігація">
              <Link href="/blog">Блог</Link>
              <span>›</span>
              <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="tag">
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
                <div className={styles.authorAvatar}>
                  <img src="/images/taras-photo.jpg" alt="Taras Andrusyshyn" />
                </div>
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
                {post.readingTime} хв читання
              </div>
            </div>
          </div>

          {/* Featured image */}
          {post.image && (
            <div className={styles.featuredImage}>
              <div className="container--narrow">
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
            <span>Поділитись:</span>
            <a
              href={`https://t.me/share/url?url=https://taras-blog.vercel.app/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareBtn}
            >
              Telegram
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://taras-blog.vercel.app/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareBtn}
            >
              Facebook
            </a>
          </div>

          {/* Author box */}
          <div className={styles.authorBox}>
            <div className={styles.authorBoxAvatar}>
              <img src="/images/taras-photo.jpg" alt="Taras Andrusyshyn" />
            </div>
            <div>
              <h4>Taras Andrusyshyn</h4>
              <p>Вивчаю ШІ, пишу про технології та маркетинг. Практичний контент без зайвої теорії.</p>
              <Link href="/about" className={styles.authorLink}>Про мене →</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterBox}>
            <h3>Сподобалась стаття?</h3>
            <p>Підпишись на newsletter — раз на тиждень найкраще з технологій та маркетингу.</p>
            <NewsletterForm compact />
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className="container">
              <h2>Схожі матеріали</h2>
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
