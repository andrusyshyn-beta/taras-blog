import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found (404)',
};

export default function NotFound() {
  return (
    <div className="container" style={{ padding: 'var(--space-8) 0', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--accent)', lineHeight: 1 }}>404</h1>
      <h2 style={{ marginBottom: 'var(--space-3)' }}>Looks like this page does not exist</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto var(--space-4)' }}>
        Perhaps you entered the wrong address, or the page was moved or deleted. 
        Don't worry, here is what you can read instead:
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center' }}>
        <Link href="/en/blog" className="btn btn--primary">
          Read Blog
        </Link>
        <Link href="/en/" className="btn btn--ghost">
          Home
        </Link>
      </div>
    </div>
  );
}
