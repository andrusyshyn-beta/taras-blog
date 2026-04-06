import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Newsletter',
  description: 'Підпишись на щотижневий дайджест про технології та маркетинг від Тараса Андрусишина.',
};

const perks = [
  { icon: '🧠', title: 'Глибокий аналіз', desc: 'Не поверхневий огляд, а розбір по суті — що, чому і як це використати.' },
  { icon: '🛠️', title: 'Практичні інструменти', desc: 'Тільки перевірені AI-інструменти та сервіси, якими користуюсь сам.' },
  { icon: '📈', title: 'Growth-кейси', desc: 'Реальні приклади growth-стратегій та що з них вийшло.' },
  { icon: '⚡', title: '1 раз на тиждень', desc: 'Без спаму. Тільки найважливіше, що варто знати цього тижня.' },
];

export default function NewsletterPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Newsletter</span>
          <h1>Технології та маркетинг у твоїй поштовій скриньці</h1>
          <p className={styles.desc}>
            Раз на тиждень надсилаю добірку: найкращі AI-інструменти, маркетингові стратегії та digital-кейси. Без води, без клікбейту — тільки те, що реально корисно.
          </p>
        </div>

        {/* Signup box */}
        <div className={styles.signupBox}>
          <div className={styles.signupContent}>
            <div className={styles.subscribers}>
              <div className={styles.subscribersAvatars}>
                {['T', 'M', 'O', 'A'].map((l) => (
                  <div key={l} className={styles.miniAvatar}>{l}</div>
                ))}
              </div>
              <span>500+ читачів вже підписані</span>
            </div>
            <h2>Підпишись безкоштовно</h2>
            <p>Відписатись можна в будь-який момент одним кліком.</p>
            <NewsletterForm />
          </div>
          <div className={styles.signupVisual}>
            <div className={styles.emailPreview}>
              <div className={styles.emailHeader}>
                <span className={styles.emailFrom}>taras@andrusyshyn.com</span>
                <span className={styles.emailSubject}>Тижневий дайджест #42</span>
              </div>
              <div className={styles.emailBody}>
                <p>👋 Привіт!</p>
                <p>На цьому тижні:</p>
                <ul>
                  <li>🤖 5 AI-інструментів для маркетологів</li>
                  <li>📊 Кейс: як збільшити конверсію email на 40%</li>
                  <li>🔗 Найкращі матеріали тижня</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className={styles.perks}>
          <h2>Що отримаєш</h2>
          <div className={styles.perksGrid}>
            {perks.map((perk) => (
              <div key={perk.title} className={styles.perk}>
                <span className={styles.perkIcon}>{perk.icon}</span>
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <div className={styles.ctaBottom}>
          <h2>Готовий стартувати?</h2>
          <p>Без зобов&apos;язань. Підпишись — і перший дайджест отримаєш вже наступного тижня.</p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
