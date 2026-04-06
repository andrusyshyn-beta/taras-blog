import styles from './page.module.css';

const tools = [
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistant',
    description: 'Мій основний інструмент для написання коду та аналізу даних. Найбільш "людяний" та розумний ШІ на ринку сьогодні.',
    rating: '★★★★★',
    link: 'https://claude.ai/',
    cta: 'Спробувати Claude'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Search & Research',
    description: 'Забудьте про Google. Цей сервіс видає готові відповіді з посиланнями на джерела. Економить години пошуку.',
    rating: '★★★★★',
    link: 'https://www.perplexity.ai/',
    cta: 'Відкрити Perplexity'
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    category: 'Content Marketing',
    description: 'Найкращий інструмент для масштабування маркетингу. Генерація SEO-текстів, оголошень та листів з вашим Tone of Voice.',
    rating: '★★★★★',
    link: 'https://www.jasper.ai/',
    cta: 'Зареєструватись'
  },
  {
    id: 'telegram',
    name: 'Lab of Autonomy',
    category: 'Community',
    description: 'Моя спільнота в Telegram, де я ділюся кейсами автоматизації, які не потрапляють у відкритий блог.',
    rating: '★★★★★',
    link: 'https://t.me/lab_of_autonomy',
    cta: 'Приєднатись'
  }
];

export const metadata = {
  title: 'Інструменти, які я використовую | Taras Andrusyshyn',
  description: 'Список перевірених AI-сервісів, софту та ресурсів для автоматизації маркетингу та розробки.',
};

export default function ToolsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.intro}>
        <h1 className={styles.title}>Мій Стек</h1>
        <p className={styles.description}>
          Список інструментів, якими я реально користуюся для побудови автономних систем, 
          маркетингу та розробки. Тільки те, що перевірено на практиці.
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
        * Деякі з посилань вище є партнерськими. Це означає, що я можу отримати невелику комісію, 
        якщо ви оформите підписку, без жодних додаткових витрат для вас. Я рекомендую тільки те, 
        що реально приносить результат.
      </p>
    </div>
  );
}
