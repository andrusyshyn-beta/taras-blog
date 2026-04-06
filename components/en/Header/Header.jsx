'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/lib/theme-context';
import styles from './Header.module.css';

const navLinks = [
  { href: '/en', label: 'Home' },
  { href: '/en/blog', label: 'Blog' },
  { href: '/en/about', label: 'About Me' },
  { href: '/en/services', label: 'Services' },
  { href: '/en/newsletter', label: 'Newsletter' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/andrusyshyn.ts', icon: 'f', label: 'Facebook' },
  { href: 'https://www.instagram.com/ts_andrusyshyn', icon: '◎', label: 'Instagram' },
  { href: 'https://www.threads.net/@ts_andrusyshyn', icon: '@', label: 'Threads' },
];

function toggleMenu() {
  const overlay = document.getElementById('en-mobile-overlay');
  const burger = document.getElementById('en-burger-btn');
  if (!overlay || !burger) return;
  const isOpen = overlay.style.display === 'flex';
  overlay.style.display = isOpen ? 'none' : 'flex';
  burger.setAttribute('data-open', isOpen ? 'false' : 'true');
}

function closeMenu() {
  const overlay = document.getElementById('en-mobile-overlay');
  const burger = document.getElementById('en-burger-btn');
  if (overlay) overlay.style.display = 'none';
  if (burger) burger.setAttribute('data-open', 'false');
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>

          <Link href="/en/" className={styles.logo}>
            <img src="/logo.svg" alt="Logo" className={styles.logoIcon} />
            <span className={styles.logoText}>Taras Andrusyshyn</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.socials}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={styles.socialLink} aria-label={s.label}>{s.icon}</a>
              ))}
            </div>

            <div className={styles.langSwitch}>
              <Link href={(pathname || '').replace(/^\/en/, '') || '/'} className={styles.langBtn}>UA</Link>
              <Link href={pathname || '/en'} className={`${styles.langBtn} ${styles.active}`}>EN</Link>
            </div>

            <button onClick={toggleTheme} className={styles.themeToggle} type="button" aria-label="Theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <a href="https://t.me/tsand07" target="_blank" rel="noopener noreferrer"
              className={`btn btn--primary btn--sm ${styles.ctaBtn}`}>
              Contact Me →
            </a>
          </div>

          <button
            id="en-burger-btn"
            type="button"
            className={styles.burger}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      <div
        id="en-mobile-overlay"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100%', height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          backgroundColor: '#0a0a0a',
          zIndex: 99999,
        }}
      >
        <button
          type="button"
          onClick={closeMenu}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '48px', height: '48px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#f0f0f0',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          ✕
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                display: 'block',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#7c6aff',
                textDecoration: 'none',
                padding: '10px 48px',
                borderRadius: '12px',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/tsand07"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #7c6aff, #a78bfa)',
            color: '#fff',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          Contact Me →
        </a>
      </div>
    </>
  );
}
