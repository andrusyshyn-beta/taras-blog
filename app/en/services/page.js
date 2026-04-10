import Link from 'next/link';

export const metadata = {
  title: 'Services - Autonomous Business Architecture & Micro-SaaS | Taras Andrusyshyn',
  description: 'Expert help in business automation, building Micro-SaaS on your data, and fast-action tactical AI services.',
};

export default function ServicesPage() {
  return (
    <div className="container--narrow" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
      <div className="prose">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag" style={{ marginBottom: '10px', display: 'inline-block' }}>Expertise & Solutions</span>
          <h1 style={{ marginTop: 0, marginBottom: 'var(--space-2)' }}>Choose Your Level of <span className="text-accent">Autonomy</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            From high-conversion AI video ads to full-scale Micro-SaaS architecture.
          </p>
        </div>

        {/* ===== Complex Projects Section ===== */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <h2 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--accent)' }}>Strategic Projects (Architecture)</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          {/* Service 1 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>AI Business Automation</h3>
              <span className="tag--accent">Strategic</span>
            </div>
            <p>I audit your workflows and implement AI systems that fully automate entire departments (marketing, sales, operations, support).</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Outcome:</strong> 80% of processes performed by AI agents. Costs drop, productivity skyrockets.</p>
          </div>

          {/* Service 2 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>Building Micro-SaaS on Your Data</h3>
              <span className="tag--accent">Product</span>
            </div>
            <p>I help niche experts monetize their unique knowledge. We build a product that leverages your data + LLMs to sell results to your clients.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Outcome:</strong> Your own autonomous product working 24/7, bringing passive revenue.</p>
          </div>

          {/* Service 3 */}
          <div style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
              <h3 style={{ marginTop: 0 }}>Agent as a Service — AaaS</h3>
              <span className="tag--accent">New 2026</span>
            </div>
            <p>I create custom AI agents that sell the **outcome**, not the tool. Clients pay for a specific analysis, lead, or a verified plan.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Outcome:</strong> An AI agent trained on your data delivering measurable, direct ROI.</p>
          </div>
        </div>

        {/* ===== Tactical Services Section ===== */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <h2 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--accent)' }}>Tactical Services (Fast-Action)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Focused services delivering results within days.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>Paid Ads (AI-First)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Optimizing Google & Meta Ads using high-intent AI signals and CAPI for maximum ROAS.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>Web & Landing Page Dev</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>High-conversion websites optimized for both human users and AI-search engines (GEO-ready).</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>GEO (Generative Engine Opt)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Strategy to get your brand cited in ChatGPT, Perplexity, and Gemini search sources.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>AI Video Ad Production</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Creating ads using AI avatars and ElevenLabs voices. High CTR without studio production costs.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginTop: 0 }}>60-Min AI Audit</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Express review of your marketing and workflows: finding quick wins for automation.</p>
          </div>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'rgba(var(--accent-rgb), 0.03)' }}>
            <h4 style={{ marginTop: 0 }}>Custom Request?</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Need a specific CRM integration or a custom AI workshop? Let’s chat about your project.</p>
          </div>
        </div>

        {/* ===== Final CTA ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(var(--accent-rgb), 0.05)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--accent)' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Which problem should we solve first?</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Message me on Telegram. We will quickly determine if a tactical solution fits or if we need to lay the architectural groundwork.
          </p>
          <a
            href="https://t.me/tsand07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 'var(--space-4)', display: 'inline-flex', fontSize: '1.1rem', padding: '14px 28px', width: 'fit-content' }}
          >
            Message on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
