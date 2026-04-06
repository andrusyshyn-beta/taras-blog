import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/en/', label: 'Home' },
  { href: '/en/blog', label: 'Blog' },
  { href: '/en/about', label: 'About Me' },
  { href: '/en/newsletter', label: 'Newsletter' },
];

const categories = [
  { href: '/en/blog?category=Tech', label: 'Tech' },
  { href: '/en/blog?category=Marketing', label: 'Marketing' },
  { href: '/en/blog?category=Business', label: 'Business' },
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
          <Link href="/en/" className={styles.logo}>
            <img src="/logo.svg" alt="Andrusyshyn Blog Logo" className={styles.logoIcon} />
            <span>Taras Andrusyshyn</span>
          </Link>
          <p className={styles.tagline}>
            Studying AI, writing about tech and marketing. My focus is practical content without fluff: tools, strategies, and case studies that actually work.
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
          <h4 className={styles.colTitle}>Navigation</h4>
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
          <h4 className={styles.colTitle}>Categories</h4>
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
            Subscribe to the Telegram channel — the best of the blog daily in one place.
          </p>
          <a
            href="https://t.me/lab_of_autonomy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            style={{ marginTop: '12px', display: 'inline-flex' }}
          >
            Subscribe →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {year} Taras Andrusyshyn. All rights reserved.</span>
            <div className={styles.legal}>
              <Link href="/en/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="/en/terms" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
