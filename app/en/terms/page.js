import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service of Taras Andrusyshyn blog.',
};

export default function TermsPage() {
  return (
    <div className="container--narrow" style={{ padding: 'var(--space-7) 0' }}>
      <div className="prose">
        <h1>Terms of Service</h1>
        <p><em>Last updated: March 2026</em></p>
        
        <h2>1. Terms of Content Use</h2>
        <p>All materials (articles, guides, instructions) posted on this site are copyrighted. You can use them for non-commercial purposes, provided you include an active (clickable) link to the original material page at <a href="https://taras-blog.vercel.app">taras-blog.vercel.app</a>.</p>
        
        <h2>2. Disclaimer</h2>
        <p>The content on the site is provided "as is". The author is not responsible for any financial loss, damage, or inability to get the desired result when implementing the described marketing or AI strategies into your business. You use any tools at your own risk.</p>
        
        <h2>3. Third Party Links</h2>
        <p>The site may contain links to third-party websites or services that are not owned or controlled by us (for example, links to AI tools). We assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services.</p>
        
        <h2>4. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. The up-to-date version will always be available on this page.</p>
        
        <br />
        <Link href="/en/" className="btn btn--primary btn--sm">← Home</Link>
      </div>
    </div>
  );
}

