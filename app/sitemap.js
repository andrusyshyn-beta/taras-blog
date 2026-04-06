import { getAllPosts as getUkPosts } from '@/lib/posts';
import { getAllPosts as getEnPosts } from '@/lib/posts-en';

export default function sitemap() {
  const baseUrl = 'https://taras-blog.vercel.app';
  const ukPosts = getUkPosts();
  const enPosts = getEnPosts();

  const ukBlogUrls = ukPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const enBlogUrls = enPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticPages = [
    '',
    '/about',
    '/blog',
    '/newsletter',
    '/privacy',
    '/terms',
    '/services',
    '/tools',
  ];

  const ukUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '/blog' || page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));

  const enUrls = staticPages.map((page) => ({
    url: `${baseUrl}/en${page === '' ? '/' : page}`,
    lastModified: new Date(),
    changeFrequency: page === '/blog' || page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));

  return [...ukUrls, ...enUrls, ...ukBlogUrls, ...enBlogUrls];
}

