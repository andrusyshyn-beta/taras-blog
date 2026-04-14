import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Архітектура автономного бізнесу | Taras Andrusyshyn',
  description: 'Покрокова карта масштабування експерта на 100х через приватні ІІ-агенти та автономні системи.',
};

export default function ArchitecturePage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>Vision 2026</span>
          <h1 className={styles.title}>Autonomous Business Architecture</h1>
          <p className={styles.subtitle}>
            Система, де ваш інтелект стає ядром, а армія агентів — нескінченно масштабованим інструментом виконання.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.architectureGrid}>
            
            {/* Рівень 1: Візія */}
            <div className={styles.archCard}>
              <div className={styles.num}>01</div>
              <div className={styles.cardHeader}>
                <h3>Solo Founder Model</h3>
                <span className={styles.tag}>Foundation</span>
              </div>
              <p>Перехід від моделі "найму людей" до моделі "керування капіталом агентів". Одна людина генерує цінність корпорації.</p>
              <Link href="/blog/solo-founder-model-2026" className={styles.link}>Читати маніфест →</Link>
            </div>

            {/* Рівень 2: Виконання */}
            <div className={styles.archCard}>
              <div className={styles.num}>02</div>
              <div className={styles.cardHeader}>
                <h3>Autonomous Developer</h3>
                <span className={styles.tag}>Execution</span>
              </div>
              <p>Здатність збирати власні Micro-SaaS продукти без знання коду. ШІ як ваш технічний партнер 24/7.</p>
              <Link href="/blog/autonomous-developer-2026" className={styles.link}>Розбір стеку →</Link>
            </div>

            {/* Рівень 3: Мозок */}
            <div className={styles.archCard + ' ' + styles.cardFeatured}>
              <div className={styles.num}>03</div>
              <div className={styles.cardHeader}>
                <h3>Judgment-as-a-Service</h3>
                <span className={styles.tag}>Moat</span>
              </div>
              <p>Оцифрування вашого експертного судження. Створення приватного агента, який приймає рішення точно як ви.</p>
              <Link href="/blog/judgment-as-a-service-pillar" className={styles.link}>Дивитись архітектуру →</Link>
            </div>

            {/* Рівень 4: Просування */}
            <div className={styles.archCard}>
              <div className={styles.num}>04</div>
              <div className={styles.cardHeader}>
                <h3>GEO Strategy</h3>
                <span className={styles.tag}>Visibility</span>
              </div>
              <p>Оптимізація під ШІ-пошук. Зробіть так, щоб ChatGPT, Perplexity та Google AI цитували вашу експертизу.</p>
              <Link href="/blog/ai-seo-manifesto-2026" className={styles.link}>Гайд з GEO →</Link>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Готові до масштабування?</h2>
            <p>Приєднуйтесь до лабораторії, де ми будуємо та впроваджуємо ці системи щодня.</p>
            <a href="https://t.me/lab_of_autonomy" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Telegram Лабораторія →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
