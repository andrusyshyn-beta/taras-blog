import Link from 'next/link';
import NewsletterForm from '@/components/en/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export const metadata = {
  title: 'About Me',
  description: 'Taras Andrusyshyn — studying AI, writing about tech and marketing. Practical content without fluff.',
  alternates: {
    canonical: 'https://taras-blog.vercel.app/en/about',
    languages: {
      'uk-UA': 'https://taras-blog.vercel.app/about',
      'en-US': 'https://taras-blog.vercel.app/en/about',
    },
  },
};

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Taras Andrusyshyn',
  alternateName: 'Тарас Андрусишин',
  url: 'https://taras-blog.vercel.app/en/about',
  image: 'https://taras-blog.vercel.app/images/taras-photo.jpg',
  jobTitle: 'AI Developer & Growth Marketer',
  description: 'Marketer and AI developer with 9+ years in digital. Managed $500k+ in ad budgets. Co-founder of ITBS and a web studio.',
  knowsAbout: [
    'AI Tools', 'Prompt Engineering', 'Growth Marketing',
    'Content Strategy', 'Marketing Automation', 'Paid Traffic',
    'Solo Entrepreneurship', 'Make.com', 'n8n', 'Claude AI', 'GPT-4o',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Co-founder & CEO of ITBS (IT Business School)', credentialCategory: 'Entrepreneurship' },
    { '@type': 'EducationalOccupationalCredential', name: 'Co-founder of web studio and marketing agency (2016)', credentialCategory: 'Marketing' },
  ],
  sameAs: [
    'https://ain.ua/ru/2018/01/31/it-business-school-podvodit-itogi-pervogo-vypuska-kursa-seo-it-autsors-kompanij/',
    'https://www.facebook.com/andrusyshyn.ts',
    'https://www.threads.net/@ts_andrusyshyn',
    'https://t.me/lab_of_autonomy',
    'https://t.me/tsand07',
    'https://www.linkedin.com/in/taras-andrusyshyn-0008bb3b5/',
  ],
  email: 'andrusyshyn.ts@gmail.com',
};

const timeline = [
  { year: '2026', title: 'Launched personal media hub', desc: 'Centralized all content on my own website.' },
  { year: '2017', title: 'Co-founder & CEO of ITBS (IT Business School)', desc: 'Launched one of the first specialized IT schools for those who want to start their own IT company. Featured in AIN.ua.' },
  { year: '2016', title: 'Co-founder of web studio and marketing agency', desc: '' },
  { year: '2015', title: 'Paid Traffic', desc: 'Started working with paid traffic: Google Ads, Yandex Direct, Facebook, Instagram.' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <div className={styles.page}>
      <div className="container">
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>
                <img src="/images/taras-photo.jpg" alt="Taras Andrusyshyn" className={styles.avatarImage} />
              </div>
            </div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.label}>About Me</span>
            <h1>Hi, I am Taras Andrusyshyn 👋</h1>
            <p className={styles.heroDesc}>
              I study AI, write about tech and marketing. My focus is practical content: working tools, strategies, and case studies.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://t.me/lab_of_autonomy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Telegram</a>
              <a href="https://www.linkedin.com/in/taras-andrusyshyn-0008bb3b5/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
               <a href="https://www.facebook.com/andrusyshyn.ts" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
              <a href="https://www.threads.net/@ts_andrusyshyn" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Threads</a>
              <a href="mailto:andrusyshyn.ts@gmail.com" className={styles.socialLink}>Email</a>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Left column */}
          <div className={styles.main}>
            {/* About */}
            <section className={styles.section}>
              <h2>What I Do</h2>
              <div className={styles.prose}>
                <p>
                  I am a marketer and AI developer.
                </p>
                <p>
                  My main mission is to show that one person today can replace a whole team if they correctly apply AI. I am convinced founders need to adopt AI into their businesses as fast as possible while it still gives a competitive edge.
                </p>
                <p>
                  Main topics: <strong>AI tools</strong>, <strong>growth marketing</strong>, <strong>content strategy</strong>, <strong>paid and organic traffic</strong>, <strong>analytics</strong>, <strong>automation</strong> and building digital systems. I only write about things I have practical experience in.
                </p>
                <p>
                  Built a web studio and an IT school from scratch as a co-founder and CEO.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section className={styles.section}>
              <h2>My Journey</h2>
              <div className={styles.timeline}>
                {timeline.map((item) => (
                  <div key={item.year} className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineContent}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Collaboration */}
            <section className={styles.section}>
              <h2>Collaboration</h2>
              <div className={styles.prose}>
                <p>
                  Open to partnerships, guest posts, interviews, and ad integrations (only with products I personally use).
                </p>
                <p>
                  To contact me, write to my <a href="https://t.me/tsand07" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>personal Telegram (@tsand07)</a>.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Skills */}
            <div className={styles.sideCard}>
              <h3>Expertise</h3>
              <div className={styles.skills}>
                {['AI Tools', 'Content Marketing', 'SEO', 'Growth Hacking', 'Email Marketing', 'Automation', 'Analytics', 'Social Media', 'Paid Traffic', 'Organic Content'].map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className={styles.sideCard}>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>$500k+</span>
                  <span className={styles.statLabel}>managed ad budgets</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>40+</span>
                  <span className={styles.statLabel}>successful projects</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>9+</span>
                  <span className={styles.statLabel}>years in digital</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.sideCard}>
              <h3>Newsletter</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Weekly digest about tech and marketing.
              </p>
              <NewsletterForm compact />
            </div>
          </aside>
        </div>
      </div>
      </div>
    </>
  );
}

