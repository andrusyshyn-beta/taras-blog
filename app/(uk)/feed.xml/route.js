import { getAllPosts } from '@/lib/posts';

export async function GET() {
  const posts = getAllPosts();
  const site_url = 'https://taras-blog.vercel.app';

  const feedItems = posts.map((post) => {
    return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${site_url}/blog/${post.slug}</link>
        <guid>${site_url}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>
    `;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Taras Andrusyshyn | Блог</title>
        <link>${site_url}</link>
        <description>Практичний блог про штучний інтелект, автоматизацію та growth-маркетинг.</description>
        <language>uk</language>
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

