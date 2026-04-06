import Link from 'next/link';

export const metadata = {
  title: 'Послуги та Консультації',
  description: 'Особисті консультації з впровадження AI, контент-стратегії та growth маркетингу.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Співпраця</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Консультації та AI-Консалтинг</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Допомагаю фаундерам та маркетологам впроваджувати AI-інструменти для систематизації процесів та збільшення доходів.
          </p>
        </div>
        
        <h2>Для кого це?</h2>
        <ul>
          <li><strong>Власникам бізнесу</strong>, які хочуть оптимізувати витрати на виготовлення контенту та автоматизувати рутину свого відділу.</li>
          <li><strong>Маркетологам</strong>, яким потрібно підвищити власну продуктивність у 3-5 разів за допомогою сучасного AI-стеку інструментів.</li>
          <li><strong>Експертам</strong>, яким необхідно вибудувати системну SEO та контент-стратегію для стабільного залучення органічних клієнтів.</li>
        </ul>

        <h2>Які проблеми я вирішую?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Впровадження AI у процеси</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              Проводжу аудит вашого поточного робочого процесу та допомагаю налаштувати екосистему (Claude, Perplexity, Make), яка забирає на себе більше половини операційної роботи.
            </p>
          </div>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Контент-стратегія та SEO</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              Розробляю покрокову структуру контент-кластерів для генерації органічного трафіку. Розбираємо, як зробити контент, який дійсно продає.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: 'var(--space-6)' }}>Що ви отримаєте на виході?</h2>
        <ul>
          <li>Індивідуальну дорожню карту впровадження інновацій у ваш бізнес.</li>
          <li>Готові протестовані шаблони (промпти) для роботи з ChatGPT/Claude під специфіку вашої ніші.</li>
          <li>Глибокий аудит поточного маркетингу та виявлення "вузьких місць", через які ви втрачаєте гроші.</li>
          <li>Чіткий алгоритм зменшення витрат на маркетинг без втрати якості.</li>
        </ul>

        <hr style={{ margin: 'var(--space-6) 0' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-secondary)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Давайте попрацюємо разом</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Напишіть мені в особисті повідомлення у Telegram. Коротко розкажіть про себе та свій проєкт, і ми обговоримо формат взаємодії без жодних зобов'язань.
          </p>
          <a
            href="https://t.me/tsand07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 'var(--space-4)', display: 'inline-flex', fontSize: '1rem', padding: '12px 24px', width: 'fit-content' }}
          >
            Написати в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
