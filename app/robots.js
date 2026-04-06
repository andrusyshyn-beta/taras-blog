export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://taras-blog.vercel.app/sitemap.xml',
  };
}

