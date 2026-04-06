import NewsletterForm from '@/components/en/NewsletterForm/NewsletterForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Newsletter',
  description: 'Subscribe to the weekly digest about tech and marketing from Taras Andrusyshyn.',
};

const perks = [
  { icon: '🧠', title: 'Deep Analysis', desc: 'Not a superficial overview, but an in-depth breakdown — what, why, and how to use it.' },
  { icon: '🛠️', title: 'Practical Tools', desc: 'Only proven AI tools and services that I use myself.' },
  { icon: '📈', title: 'Growth Cases', desc: 'Real examples of growth strategies and their outcomes.' },
  { icon: '⚡', title: 'Once a Week', desc: 'No spam. Only the most important things you need to know this week.' },
];

export default function NewsletterPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Newsletter</span>
          <h1>Tech and marketing in your inbox</h1>
          <p className={styles.desc}>
            Once a week I send a digest: the best AI tools, marketing strategies, and digital cases. No fluff, no clickbait — only what is actually useful.
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
              <span>500+ readers already subscribed</span>
            </div>
            <h2>Subscribe for free</h2>
            <p>You can unsubscribe at any time with one click.</p>
            <NewsletterForm />
          </div>
          <div className={styles.signupVisual}>
            <div className={styles.emailPreview}>
              <div className={styles.emailHeader}>
                <span className={styles.emailFrom}>taras@andrusyshyn.com</span>
                <span className={styles.emailSubject}>Weekly Digest #42</span>
              </div>
              <div className={styles.emailBody}>
                <p>👋 Hello!</p>
                <p>This week:</p>
                <ul>
                  <li>🤖 5 AI tools for marketers</li>
                  <li>📊 Case: how to increase email conversion by 40%</li>
                  <li>🔗 Top articles of the week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className={styles.perks}>
          <h2>What you will get</h2>
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
          <h2>Ready to start?</h2>
          <p>No commitments. Subscribe — and get the first digest next week.</p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
