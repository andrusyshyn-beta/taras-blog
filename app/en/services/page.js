import Link from 'next/link';

export const metadata = {
  title: 'Services - Build Your Autonomous AI Business | Taras Andrusyshyn',
  description: 'Helping solo entrepreneurs implement automation and AI agents to scale without hiring workers.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Expertise</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Scale Business, <span className="text-accent">Not Your Team</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            I help founders transform traditional businesses into autonomous AI-first models. Complete marketing and development automation.
          </p>
        </div>
        
        <h2>Who can I help?</h2>
        <ul>
          <li><strong>Traditional Business Owners</strong> who want to radically cut costs and boost team productivity using AI agents.</li>
          <li><strong>Experts & Professionals</strong> who dream of leaving employment to build their own autonomous solo business using my "Blueprint."</li>
          <li><strong>Early-stage Startups</strong> who want to lay an AI-first architecture from day one, avoiding team bloating.</li>
        </ul>

        <h2>Collaboration Formats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Corporate AI Optimization</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              I audit your company and implement systems that take over the work of entire departments. It is not just "help"; it is replacing routine with algorithms.
            </p>
          </div>
          <div style={{ padding: 'var(--space-4)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Solo Empire Launchpad</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
              I help high-level specialists leave employment and become autonomous units. I provide a step-by-step plan: from personal branding to an AI stack that works for you.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: 'var(--space-6)' }}>What will you get?</h2>
        <ul>
          <li>A personalized roadmap for implementing innovations into your business.</li>
          <li>Ready-made tested templates (prompts) for ChatGPT/Claude tailored to your niche.</li>
          <li>A deep audit of current marketing to find bottlenecks where you are losing money.</li>
          <li>A clear algorithm for cutting marketing costs without sacrificing quality.</li>
        </ul>

        <hr style={{ margin: 'var(--space-6) 0' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-secondary)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Let's work together</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Drop me a DM on Telegram. Briefly tell me about your project, and we will discuss collaboration options with no obligations.
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
