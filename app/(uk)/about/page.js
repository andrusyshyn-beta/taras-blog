import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Про мене',
  description: 'Taras Andrusyshyn — вивчаю ШІ, пишу про технології та маркетинг. Практичний контент без зайвої теорії.',
  alternates: {
    canonical: 'https://taras-blog.vercel.app/about',
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
  url: 'https://taras-blog.vercel.app/about',
  image: 'https://taras-blog.vercel.app/images/taras-photo.jpg',
  jobTitle: 'AI Developer & Growth Marketer',
  description: 'Маркетолог та AI-розробник. 9+ років у digital. Керував рекламними бюджетами $500k+. Співзасновник ITBS та веб-студії.',
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
  { year: '2026', title: 'Запуск особистого медіа-хабу', desc: 'Централізував весь контент на власному сайті.' },
  { year: '2017', title: 'Співзасновник та CEO ITBS (IT Business School)', desc: 'Запустив одну з перших профільних IT шкіл для тих хто хоче відкрити свою IT компанію. Згадувався в AIN.ua.' },
  { year: '2016', title: 'Співзасновник веб-студії та маркетингового агентства', desc: '' },
  { year: '2015', title: 'Платний трафік', desc: 'Почав займатись платним трафіком: Google Adwords, Yandex Direct, Facebook, Instagram.' },
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
                <img src="/images/taras-photo.jpg" alt="Тарас Андрусишин" className={styles.avatarImage} />
              </div>
            </div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.label}>Про мене</span>
            <h1>Привіт, я Тарас Андрусишин 👋</h1>
            <p className={styles.heroDesc}>
              Вивчаю ШІ, пишу про технології та маркетинг. Мій фокус — практичний контент без зайвої теорії: інструменти, стратегії, кейси, що реально працюють.
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
              <h2>Чим займаюсь</h2>
              <div className={styles.prose}>
                <p>
                  Я маркетолог та АІ розробник.
                </p>
                <p>
                  Моя головна місія — показати, що одна людина сьогодні може замінити цілу команду, якщо правильно впроваджує AI. Я переконаний, що фаундерам потрібно впроваджувати штучний інтелект у свій бізнес якомога швидше, поки це ще дає значну конкурентну перевагу.
                </p>
                <p>
                  Основні теми: <strong>AI-інструменти</strong>, <strong>growth marketing</strong>, <strong>content strategy</strong>, <strong>платний та органічний трафік</strong>, <strong>аналітика</strong>, <strong>автоматизація</strong> та побудова digital-систем. Пишу тільки про те, у чому маю практичний досвід.
                </p>
                <p>
                  З нуля будував веб-студію та IT школу як співзасновник та CEO.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section className={styles.section}>
              <h2>Коротко про шлях</h2>
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
              <h2>Співпраця</h2>
              <div className={styles.prose}>
                <p>
                  Відкритий до партнерств, гостьових постів, інтерв&apos;ю та рекламних інтеграцій (тільки з продуктами, якими сам користуюсь).
                </p>
                <p>
                  Для зв&apos;язку зі мною пишіть в <a href="https://t.me/tsand07" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>особистий Telegram (@tsand07)</a>.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Skills */}
            <div className={styles.sideCard}>
              <h3>Експертиза</h3>
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
                  <span className={styles.statLabel}>керованих рекламних бюджетів</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>40+</span>
                  <span className={styles.statLabel}>успішно реалізованих проєктів</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>9+</span>
                  <span className={styles.statLabel}>років у digital</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.sideCard}>
              <h3>Newsletter</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Щотижневий дайджест про технології та маркетинг.
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
