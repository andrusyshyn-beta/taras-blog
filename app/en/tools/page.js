import styles from './page.module.css';

const tools = [
  {
    id: 'n8n',
    name: 'n8n (Cloud)',
    category: 'Automation',
    description: 'My #1 tool for building complex AI agents. Visually design workflows that handle thousands of requests autonomously.',
    rating: '★★★★★',
    link: 'https://n8n.io/',
    cta: 'Start Automating'
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation',
    description: 'The easiest way to connect hundreds of apps without code. Perfect for marketing funnels and data collection.',
    rating: '★★★★★',
    link: 'https://www.make.com/',
    cta: 'Try Make'
  },
  {
    id: 'antigravity',
    name: 'Antigravity AI',
    category: 'AI Coding Agent',
    description: 'An intelligent agent that helps me write this blog, debug code, and implement AI solutions in hours.',
    rating: '★★★★★',
    link: '#',
    cta: 'How it works?'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'AI Voice',
    description: 'The most realistic AI voice generator. Used for narrating articles and creating human-like digital content.',
    rating: '★★★★★',
    link: 'https://elevenlabs.io/',
    cta: 'Voice Over'
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'AI Video',
    description: 'A revolution in video marketing. I use it to create AI avatars that speak in my voice and generate content 24/7.',
    rating: '★★★★★',
    link: 'https://www.heygen.com/',
    cta: 'Create Avatar'
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Web Hosting',
    description: 'Where I host my projects and self-hosted tools. Fast, reliable, and fairly priced for developers.',
    rating: '★★★★★',
    link: 'https://www.hostinger.com/',
    cta: 'Get Hosting'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistant',
    description: 'My primary tool for coding and data analysis. The most intelligent and human-like AI on the market.',
    rating: '★★★★★',
    link: 'https://claude.ai/',
    cta: 'Try Claude'
  }
];

export const metadata = {
  title: 'Tools I Use | Taras Andrusyshyn',
  description: 'A curated list of AI services, software, and resources I use for marketing automation and development.',
};

export default function ToolsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.intro}>
        <h1 className={styles.title}>The Stack</h1>
        <p className={styles.description}>
          A list of the tools I actually use to build autonomous systems, 
          marketing, and development. Only what is proven in practice.
        </p>
      </section>

      <div className={styles.grid}>
        {tools.map((tool) => (
          <div key={tool.id} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.category}>{tool.category}</span>
              <span className={styles.rating}>{tool.rating}</span>
            </div>
            <h2 className={styles.toolName}>{tool.name}</h2>
            <p className={styles.toolDesc}>{tool.description}</p>
            <div className={styles.footer}>
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                {tool.cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.disclosure}>
        * Some of the links above are affiliate links. This means I may receive a small commission 
        if you subscribe, at no additional cost to you. I only recommend what actually delivers results.
      </p>
    </div>
  );
}
