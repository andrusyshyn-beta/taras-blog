export default function robots() {
  return {
    rules: [
      // Major AI crawlers — explicit allow
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      // All other bots
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://taras-blog.vercel.app/sitemap.xml',
  };
}

