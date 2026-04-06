import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/blog', label: 'Блог' },
  { href: '/about', label: 'Про мене' },
  { href: '/newsletter', label: 'Newsletter' },
];

const categories = [
  { href: '/blog?category=Технології', label: 'Технології' },
  { href: '/blog?category=Маркетинг', label: 'Маркетинг' },
  { href: '/blog?category=Бізнес', label: 'Бізнес' },
];

const socials = [
  { href: 'https://www.facebook.com/andrusyshyn.ts', label: 'Facebook' },
  { href: 'https://www.instagram.com/ts_andrusyshyn', label: 'Instagram' },
  { href: 'https://www.threads.net/@ts_andrusyshyn', label: 'Threads' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.svg" alt="Andrusyshyn Blog Logo" className={styles.logoIcon} />
            <span>Taras Andrusyshyn</span>
          </Link>
          <p className={styles.tagline}>
            Вивчаю ШІ, пишу про технології та маркетинг. Мій фокус — практичний контент без зайвої теорії: інструменти, стратегії, кейси, що реально працюють.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Навігація</h4>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Категорії</h4>
          <ul className={styles.links}>
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.link}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Telegram */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Telegram</h4>
          <p className={styles.colDesc}>
            Підпишись на Telegram-канал — найкраще з блогу щодня в одному місці.
          </p>
          <a
            href="https://t.me/lab_of_autonomy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            style={{ marginTop: '12px', display: 'inline-flex' }}
          >
            Підписатись →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {year} Taras Andrusyshyn. Усі права захищені.</span>
            <div className={styles.legal}>
              <Link href="/privacy" className={styles.legalLink}>Конфіденційність</Link>
              <Link href="/terms" className={styles.legalLink}>Умови</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
