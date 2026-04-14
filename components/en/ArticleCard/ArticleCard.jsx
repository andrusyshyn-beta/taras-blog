import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticleCard({ post, featured = false }) {
  const { slug, title, excerpt, date, category, readingTime, image } = post;

  return (
    <Link href={`/en/blog/${slug}`} className={`card ${styles.card} ${featured ? styles.featured : ''}`}>
      {/* Image */}
      {image && (
        <div className={styles.imageWrap}>
          <Image 
            src={image} 
            alt={title} 
            className={styles.image} 
            width={400} 
            height={225}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {/* Meta top */}
        <div className={styles.metaTop}>
          <span className="tag">{category}</span>
          <span className={styles.readTime}>{readingTime} min read</span>
        </div>

        {/* Title */}
        <h3 className={styles.title}>{title}</h3>

        {/* Excerpt */}
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

        {/* Meta bottom */}
        <div className={styles.metaBottom}>
          <span className={styles.date}>{formatDate(date)}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
