import Link from 'next/link';

export const metadata = {
  title: 'Сторінку не знайдено (404)',
};

export default function NotFound() {
  return (
    <div className="container" style={{ padding: 'var(--space-8) 0', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--accent)', lineHeight: 1 }}>404</h1>
      <h2 style={{ marginBottom: 'var(--space-3)' }}>Схоже, такої сторінки не існує</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto var(--space-4)' }}>
        Можливо, ви ввели неправильну адресу, або сторінка була переміщена чи видалена. 
        Не переймайтеся, ось що можна почитати натомість:
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center' }}>
        <Link href="/blog" className="btn btn--primary">
          Читати блог
        </Link>
        <Link href="/" className="btn btn--ghost">
          На головну
        </Link>
      </div>
    </div>
  );
}
