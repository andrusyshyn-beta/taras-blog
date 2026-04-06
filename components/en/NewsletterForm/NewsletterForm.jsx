'use client';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm({ compact = false }) {
  return (
    <div className={`${styles.form} ${compact ? styles.compact : ''}`}>
      <div className="form-group">
        <a
          href="https://t.me/lab_of_autonomy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          style={{ width: '100%', justifyContent: 'center', maxWidth: compact ? '250px' : '300px' }}
        >
          Subscribe on Telegram 🚀
        </a>
      </div>
      <p className={styles.gdpr}>
        The best of the blog, new materials and insights — daily in one place.
      </p>
    </div>
  );
}
