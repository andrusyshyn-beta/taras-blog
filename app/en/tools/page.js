import styles from './page.module.css';

const tools = [
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistant',
    description: 'My primary tool for coding and data analysis. The most intelligent and human-like AI on the market.',
    rating: '★★★★★',
    link: 'https://claude.ai/',
    cta: 'Try Claude'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Search & Research',
    description: 'Stop using Google. This service gives direct answers with source links. Saves hours of search time.',
    rating: '★★★★★',
    link: 'https://www.perplexity.ai/',
    cta: 'Open Perplexity'
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    category: 'Content Marketing',
    description: 'The best tool for scaling marketing efforts. Generate SEO copy, ads, and emails with your brand voice.',
    rating: '★★★★★',
    link: 'https://www.jasper.ai/',
    cta: 'Sign Up'
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
