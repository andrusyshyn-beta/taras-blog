import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Taras Andrusyshyn blog.',
};

export default function PrivacyPage() {
  return (
    <div className="container--narrow" style={{ padding: 'var(--space-7) 0' }}>
      <div className="prose">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: March 2026</em></p>
        
        <h2>1. General Provisions</h2>
        <p>This Privacy Policy establishes the procedure for receiving, storing, processing, using, and disclosing user personal data. We have great respect for the confidential (personal) information of all persons who have visited the site without exception.</p>
        
        <h2>2. Data Collection and Usage</h2>
        <p>When leaving comments or subscribing to the Newsletter, we may collect the following data: your name, email address. This information is used exclusively to provide you with answers or an information newsletter.</p>
        
        <h2>3. Analytics and Cookies</h2>
        <p>The site uses cookies to improve the user experience and collect depersonalized visit statistics (for example, via Google Analytics / PostHog). This helps us understand what content is most relevant to you.</p>
        
        <h2>4. Data Protection</h2>
        <p>We use widely accepted standards of technological and operational protection of information from loss, misuse, alteration, or destruction.</p>
        
        <h2>5. Contacts</h2>
        <p>If you have any questions regarding this Privacy Policy, you can contact us at: <a href="mailto:andrusyshyn.ts@gmail.com">andrusyshyn.ts@gmail.com</a>.</p>
        
        <br />
        <Link href="/en/" className="btn btn--primary btn--sm">← Home</Link>
      </div>
    </div>
  );
}
