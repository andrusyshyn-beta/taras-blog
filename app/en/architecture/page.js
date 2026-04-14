import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Autonomous Business Architecture | Taras Andrusyshyn',
  description: 'Step-by-step roadmap for 100x expert scaling through private AI agents and autonomous systems.',
};

export default function ArchitecturePage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>Vision 2026</span>
          <h1 className={styles.title}>Autonomous Business Architecture</h1>
          <p className={styles.subtitle}>
            A system where your intelligence becomes the core, and an army of agents becomes an infinitely scalable execution tool.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.architectureGrid}>
            
            {/* Level 1: Vision */}
            <div className={styles.archCard}>
              <div className={styles.num}>01</div>
              <div className={styles.cardHeader}>
                <h3>Solo Founder Model</h3>
                <span className={styles.tag}>Foundation</span>
              </div>
              <p>Shift from "hiring people" to "managing agent capital." One person generating the value of a corporation.</p>
              <Link href="/en/blog/solo-founder-model-2026" className={styles.link}>Read Manifesto →</Link>
            </div>

            {/* Level 2: Execution */}
            <div className={styles.archCard}>
              <div className={styles.num}>02</div>
              <div className={styles.cardHeader}>
                <h3>Autonomous Developer</h3>
                <span className={styles.tag}>Execution</span>
              </div>
              <p>Ability to build your own Micro-SaaS products without knowing code. AI as your 24/7 technical partner.</p>
              <Link href="/en/blog/anthropic-claude-code-leak" className={styles.link}>Stack Analysis →</Link>
            </div>

            {/* Level 3: Brain */}
            <div className={styles.archCard + ' ' + styles.cardFeatured}>
              <div className={styles.num}>03</div>
              <div className={styles.cardHeader}>
                <h3>Judgment-as-a-Service</h3>
                <span className={styles.tag}>Moat</span>
              </div>
              <p>Digitizing your expert judgment. Creating a private agent that makes decisions exactly like you do.</p>
              <Link href="/en/blog/judgment-as-a-service-pillar" className={styles.link}>View Architecture →</Link>
            </div>

            {/* Level 4: Visibility */}
            <div className={styles.archCard}>
              <div className={styles.num}>04</div>
              <div className={styles.cardHeader}>
                <h3>GEO Strategy</h3>
                <span className={styles.tag}>Visibility</span>
              </div>
              <p>Optimization for AI search. Make ChatGPT, Perplexity, and Google AI cite your expertise.</p>
              <Link href="/en/blog/ai-seo-manifesto-2026" className={styles.link}>GEO Guide →</Link>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to Scale?</h2>
            <p>Join the laboratory where we build and implement these systems every day.</p>
            <a href="https://t.me/lab_of_autonomy" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Telegram Laboratory →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
