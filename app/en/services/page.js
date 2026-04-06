import Link from 'next/link';

export const metadata = {
  title: 'Services & Consulting',
  description: 'Personal consulting on AI implementation, content strategy, and growth marketing.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Collaboration</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Consulting & AI Coaching</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            I help founders and marketers implement AI tools to systemize processes and increase revenue.
          </p>
        </div>
        
        <h2>Who is this for?</h2>
        <ul>
          <li><strong>Business Owners</strong> who want to optimize content creation costs and automate departmental routines.</li>
          <li><strong>Marketers</strong> who need to increase their productivity by 3-5x using a modern AI tech stack.</li>
          <li><strong>Experts</strong> who must build a systematic SEO and content strategy for steady organic client acquisition.</li>
        </ul>

        <h2>What problems do I solve?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>AI Implementation into Workflows</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              I audit your current workflow and help set up an ecosystem (Claude, Perplexity, Make) that takes off more than half of routine operations.
            </p>
          </div>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Content Strategy & SEO</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              I develop a step-by-step structure for content clusters to generate organic traffic. We analyze how to make content that actually sells.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: 'var(--space-6)' }}>What you will get?</h2>
        <ul>
          <li>An individual roadmap for adopting innovations into your business.</li>
          <li>Ready-made tested templates (prompts) for ChatGPT/Claude tailored to your niche.</li>
          <li>Deep audit of your current marketing and identification of bottlenecks where you are losing money.</li>
          <li>A clear algorithm for cutting marketing costs without losing quality.</li>
        </ul>

        <hr style={{ margin: 'var(--space-6) 0' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-secondary)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Let's work together</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Drop me a private message on Telegram. Briefly tell me about yourself and your project, and we will discuss collaboration options with no strings attached.
          </p>
          <a
            href="https://t.me/tsand07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 'var(--space-4)', display: 'inline-flex', fontSize: '1rem', padding: '12px 24px', width: 'fit-content' }}
          >
            Message on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
