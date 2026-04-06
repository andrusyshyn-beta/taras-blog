import styles from './page.module.css';

const tools = [
  {
    id: 'n8n',
    name: 'n8n (Cloud)',
    category: 'Automation',
    description: 'Мій №1 інструмент для побудови складних AI-агентів. Дозволяє візуально створювати воркфлоу, які обробляють тисячі запитів без вашої участі.',
    rating: '★★★★★',
    link: 'https://n8n.io/',
    cta: 'Запустити автоматизацію'
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation',
    description: 'Найзручніший сервіс для зв\'язки сотень додатків без коду. Ідеально підходить для маркетингових воронок та збору даних.',
    rating: '★★★★★',
    link: 'https://www.make.com/',
    cta: 'Спробувати Make'
  },
  {
    id: 'antigravity',
    name: 'Antigravity AI',
    category: 'AI Coding Agent',
    description: 'Інтелектуальний агент, який допомагає мені писати цей блог, дебажити код та впроваджувати AI-рішення за лічені години.',
    rating: '★★★★★',
    link: 'https://gemini.google.com/',
    cta: 'Спробувати AI'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'AI Voice',
    description: 'Найбільш реалістична генерація голосу. Використовую для озвучування статей та створення контенту, який неможливо відрізнити від людини.',
    rating: '★★★★★',
    link: 'https://elevenlabs.io/',
    cta: 'Озвучити текст'
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'AI Video',
    description: 'Революція у відео-маркетингу. Створюю AI-аватарів, які говорять моїм голосом і генерують відео-контент 24/7.',
    rating: '★★★★★',
    link: 'https://www.heygen.com/',
    cta: 'Створити аватара'
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Web Hosting',
    description: 'Де я хощу свої проекти та self-hosted інструменти. Швидко, надійно та за адекватну ціну для розробників.',
    rating: '★★★★★',
    link: 'https://www.hostinger.com/',
    cta: 'Отримати хостинг'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI Assistant',
    description: 'Мій основний інструмент для написання коду та аналізу даних. Найбільш інтелектуальний ШІ на сьогодні.',
    rating: '★★★★★',
    link: 'https://claude.ai/',
    cta: 'Спробувати Claude'
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
