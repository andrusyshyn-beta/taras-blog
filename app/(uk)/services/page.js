import Link from 'next/link';

export const metadata = {
  title: 'Послуги - Побудова автономного бізнесу та Micro-SaaS | Taras Andrusyshyn',
  description: 'Експертна допомога в автоматизації бізнесу, побудові Micro-SaaS на основі ваших даних та створенні кастомних AI-агентів.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Експертиза та рішення</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Оберіть свій рівень <span className="text-accent">автономності</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Від швидкого запуску рекламних креативів до розробки повноцінної Micro-SaaS архітектури.
          </p>
        </div>

        {/* ===== Complex Projects Section ===== */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <h2 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--accent)' }}>Комплексні проекти (Стратегія)</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          {/* Service 1 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>AI-Автоматизація бізнесу</h3>
              <span className="tag--accent">Strategic</span>
            </div>
            <p>Проводжу аудит процесів і впроваджую AI-системи, які повністю автоматизують роботу відділів (маркетинг, продажі, операції, підтримка).</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Результат:</strong> 80% процесів виконують AI-агенти. Витрати падають, продуктивність росте.</p>
          </div>

          {/* Service 2 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>Micro-SaaS на основі ваших даних</h3>
              <span className="tag--accent">Product</span>
            </div>
            <p>Допомагаю нішевим експертам монетизувати свої унікальні знання. Створюємо продукт, який використовує ваші дані + LLM і продає результат клієнтам.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Результат:</strong> Власний автономний продукт, що працює 24/7 і приносить пасивний дохід.</p>
          </div>

          {/* Service 3 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>Agent as a Service — AaaS</h3>
              <span className="tag--accent">New 2026</span>
            </div>
            <p>Створюю кастомних AI-агентів, які продають не інструмент, а **готовий результат** (аналіз, lead, план) з прямим ROI.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Результат:</strong> Агент, що працює на ваших даних та приносить вимірюваний прибуток.</p>
          </div>
        </div>

        {/* ===== Tactical Services Section ===== */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <h2 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--accent)' }}>Швидкі рішення (Тактика)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Послуги, що закривають конкретну задачу за лічені дні.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>Платна реклама (AI-First)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Налаштування Google Ads та Meta Ads з фокусом на AI-сигнали та Conversion API для максимального ROAS.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>Розробка сайтів та Landing</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Створення висококонверсійних сайтів, повністю оптимізованих для людей та ШІ-краулерів (GEO-ready).</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>GEO (Search AI Optimization)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Стратегія виведення вашого бренду в джерела відповідей ChatGPT, Perplexity та Gemini.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>AI-Відеокреативи</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Створення рекламних роликів з використанням AI-аватарів та ElevenLabs голосу. Високий CTR без витрат на продакшн.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>Експрес AI-Аудит</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>60-хвилиний розбір вашого маркетингу та процесів: де саме ви втрачаєте гроші через рутину.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'rgba(var(--accent-rgb), 0.03)' }}>
            <h4 style={{ marginTop: 0 }}>Ваш запит?</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Потрібна кастомна інтеграція або навчання команди промпт-інжинірингу? Пишіть — обговоримо.</p>
          </div>
        </div>

        {/* ===== Final CTA ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(var(--accent-rgb), 0.05)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--accent)' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Яке завдання вирішуємо першим?</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Напишіть мені в Telegram. Ми швидко визначимо, чи підійде вам готове тактичне рішення, чи варто закладати фундамент комплексного проекту.
          </p>
          <a
            href="https://t.me/tsand07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 'var(--space-4)', display: 'inline-flex', fontSize: '1.1rem', padding: '14px 28px', width: 'fit-content' }}
          >
            Написати в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
