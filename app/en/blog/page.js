import { getAllPosts, getAllCategories } from '@/lib/posts-en';
import ArticleCard from '@/components/en/ArticleCard/ArticleCard';
import styles from './page.module.css';

export async function generateMetadata({ searchParams }) {
  const resolvedParams = await searchParams;
  const category = resolvedParams?.category;
  
  if (category) {
    return {
      title: `Blog — ${category}`,
      description: `Articles about ${category} by Taras Andrusyshyn.`,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: 'Blog',
    description: 'Articles about tech and marketing by Taras Andrusyshyn.',
    alternates: {
      canonical: '/en/blog',
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
          <span className={styles.label}>Blog</span>
          <h1>All Posts</h1>
          <p>
            I study AI, write about tech and marketing. Practical content without fluff.{' '}
            {allPosts.length > 0 && <span>{allPosts.length} posts</span>}
          </p>
        </div>

        {/* Category filters */}
        <div className={styles.filters}>
          <a
            href="/en/blog"
            className={`${styles.filter} ${!selectedCategory ? styles.active : ''}`}
          >
            All
          </a>
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/en/blog?category=${encodeURIComponent(cat)}`}
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
            <p>No articles in this category yet.</p>
            <a href="/en/blog" className="btn btn--ghost" style={{ marginTop: '16px' }}>← All Posts</a>
          </div>
        )}
      </div>
    </div>
  );
}

