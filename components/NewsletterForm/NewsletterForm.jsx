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
          style={{ width: '100%' }}
        >
          Підписатись на Telegram 🚀
        </a>
      </div>
      <p className={styles.gdpr}>
        Найкраще з блогу, нові матеріали та інсайти — щодня в одному місці.
      </p>
    </div>
  );
}
