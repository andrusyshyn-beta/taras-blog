import Link from 'next/link';

export const metadata = {
  title: 'Послуги - Побудуй свій автономний AI-бізнес | Taras Andrusyshyn',
  description: 'Допомагаю соло-підприємцям впроваджувати автоматизацію та AI-агентів для масштабування без найму працівників.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Експертиза</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Масштабуйте бізнес, <span className="text-accent">а не команду</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Допомагаю фаундерам трансформувати класичний бізнес в автономну AI-first модель. Повна автоматизація маркетингу та розробки.
          </p>
        </div>
        
        <h2>Кому я зможу допомогти?</h2>
        <ul>
          <li><strong>Власникам класичних компаній</strong>, які хочуть радикально знизити витрати та підвищити продуктивність команди за рахунок AI-агентів.</li>
          <li><strong>Експертам та фахівцям</strong>, які мріють піти з найму та побудувати власний автономний соло-бізнес за моїм "Blueprint".</li>
          <li><strong>Стартапам на ранніх стадіях</strong>, які хочуть закласти AI-first архітектуру з першого дня, щоб не залежати від роздування штату.</li>
        </ul>

        <h2>Формати співпраці</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>AI-Оптимізація бізнесу</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              Проводжу аудит вашої компанії та впроваджую системи, які забирають на себе роботу цілих відділів. Це не про "допомогу", це про заміну рутини алгоритмами.
            </p>
          </div>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Запуск Соло-імперії</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              Допомагаю спеціалістам високого рівня вийти з найму та стати автономними одиницями. Даю покроковий план: від особистого бренду до AI-стеку, що працює замість штату.
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
