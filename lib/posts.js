import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Без назви',
        date: data.date || '',
        excerpt: data.excerpt || '',
        category: data.category || 'Загальне',
        tags: data.tags || [],
        image: data.image || null,
        featured: data.featured || false,
        readingTime: Math.ceil(stats.minutes),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return allPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.featured).slice(0, 3);
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];
  return categories;
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || 'Без назви',
    date: data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Загальне',
    tags: data.tags || [],
    image: data.image || null,
    readingTime: Math.ceil(stats.minutes),
    content: contentHtml,
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ slug: f.replace(/\.md$/, '') }));
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
