import { getAllPosts } from '@/lib/posts-en';

export async function GET() {
  const posts = getAllPosts();
  const site_url = 'https://taras-blog.vercel.app';

  const feedItems = posts.map((post) => {
    return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${site_url}/en/blog/${post.slug}</link>
        <guid>${site_url}/en/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>
    `;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Taras Andrusyshyn | Blog</title>
        <link>${site_url}</link>
        <description>Practical blog on Artificial Intelligence, automation, and growth marketing.</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${feedItems}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

