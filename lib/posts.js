import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Parses the FAQ section from raw markdown content.
 * Looks for a ## FAQ heading and extracts **Question?** / Answer pairs.
 * Returns an array of { question, answer } objects for FAQPage schema.
 */
function parseFaqItems(rawContent) {
  // Find FAQ section (any heading containing FAQ)
  const faqSectionMatch = rawContent.match(
    /##\s+FAQ[^\n]*\n([\s\S]*?)(?=\n##\s|\n---\s*\n[^-]|$)/i
  );
  if (!faqSectionMatch) return [];

  const faqSection = faqSectionMatch[1];
  const items = [];

  // Match **Question** followed by answer text until next **
  const questionRegex = /\*\*([^*]+)\*\*\s*\n+([\s\S]*?)(?=\n\*\*|\n---\s*\n|$)/g;
  let match;
  while ((match = questionRegex.exec(faqSection)) !== null) {
    const question = match[1].trim();
    // Strip markdown links [text](url) → text, and trim whitespace
    const answer = match[2]
      .trim()
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    if (question && answer) {
      items.push({ question, answer });
    }
  }
  return items;
}

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
        updated: data.updated || data.date || '',
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

  const faqItems = parseFaqItems(content);

  return {
    slug,
    title: data.title || 'Без назви',
    date: data.date || '',
    updated: data.updated || data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Загальне',
    tags: data.tags || [],
    image: data.image || null,
    readingTime: Math.ceil(stats.minutes),
    content: contentHtml,
    faqItems,
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
  let related = getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category);
  
  // If not enough related by category, add latest posts (excluding current)
  if (related.length < limit) {
    const latest = getAllPosts()
      .filter((p) => p.slug !== currentSlug && !related.find(r => r.slug === p.slug));
    related = [...related, ...latest].slice(0, limit);
  }

  return related.slice(0, limit);
}
