import styles from './page.module.css';

const tools = [
  {
    id: 'antigravity',
    name: 'Antigravity AI',
    category: 'AI Coding Agent',
    description: 'My #1 tool for autonomous development and automation. An intelligent agent that helps me build this blog, debug code, and implement AI solutions in hours.',
    rating: '★★★★★',
    link: 'https://gemini.google.com/',
    cta: 'Try Antigravity'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistant',
    description: 'My primary tool for architectural decisions and deep data analysis. The most intelligent AI today for working with complex context.',
    rating: '★★★★★',
    link: 'https://claude.ai/',
    cta: 'Try Claude'
  },
  {
    id: 'n8n',
    name: 'n8n (Cloud)',
    category: 'Automation',
    description: 'The central nervous system of my projects. Allows visual creation of workflows that process thousands of requests without your intervention.',
    rating: '★★★★★',
    link: 'https://n8n.io/',
    cta: 'Start Automation'
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation',
    description: 'The most convenient service for quickly connecting marketing tools without code. Ideal for simple funnels and data collection.',
    rating: '★★★★★',
    link: 'https://www.make.com/',
    cta: 'Try Make'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'AI Voice',
    description: 'The most realistic voice generation in 2026. I use it for narrating articles and creating content indistinguishable from human speech.',
    rating: '★★★★★',
    link: 'https://elevenlabs.io/',
    cta: 'Generate Voice'
  }
];

export const metadata = {
  title: 'Tools I Use | Taras Andrusyshyn',
  description: 'A list of proven AI services, software, and resources for marketing automation and development.',
};

export default function ToolsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.intro}>
        <h1 className={styles.title}>My Stack</h1>
        <p className={styles.description}>
          A list of tools I actually use to build autonomous systems, 
          marketing, and development. Only what has been tested in practice.
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
        if you sign up, at no additional cost to you. I only recommend what actually brings results.
      </p>
    </div>
  );
}
