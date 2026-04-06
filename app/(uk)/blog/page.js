import { getAllPosts, getAllCategories } from '@/lib/posts';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import styles from './page.module.css';

export async function generateMetadata({ searchParams }) {
  const resolvedParams = await searchParams;
  const category = resolvedParams?.category;
  
  if (category) {
    return {
      title: `Блог — ${category}`,
      description: `Статті про ${category} від Тараса Андрусишина.`,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: 'Блог',
    description: 'Всі статті про технології та маркетинг від Тараса Андрусишина.',
    alternates: {
      canonical: '/blog',
    },
  };
}

export default async function BlogPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams?.category || null;
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const filteredPosts = selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts;

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Page header */}
        <div className={styles.header}>
          <span className={styles.label}>Блог</span>
          <h1>Всі статті</h1>
          <p>
            Вивчаю ШІ, пишу про технології та маркетинг. Практичний контент без зайвої теорії.{' '}
            {allPosts.length > 0 && <span>{allPosts.length} матеріалів</span>}
          </p>
        </div>

        {/* Category filters */}
        <div className={styles.filters}>
          <a
            href="/blog"
            className={`${styles.filter} ${!selectedCategory ? styles.active : ''}`}
          >
            Всі
          </a>
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`${styles.filter} ${selectedCategory === cat ? styles.active : ''}`}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Articles grid */}
        {filteredPosts.length > 0 ? (
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Статей у цій категорії поки немає.</p>
            <a href="/blog" className="btn btn--ghost" style={{ marginTop: '16px' }}>← Всі статті</a>
          </div>
        )}
      </div>
    </div>
  );
}
