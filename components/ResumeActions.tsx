'use client';

export default function ResumeActions() {
  return (
    <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => window.print()}
        style={{
          background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
          color: '#fff',
          border: 'none',
          padding: '0.6rem 1.4rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
        }}
      >
        ⬇ Download PDF
      </button>
      <a
        href="/"
        style={{
          background: 'rgba(255,255,255,0.08)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '0.6rem 1.2rem',
          borderRadius: '8px',
          fontWeight: 500,
          fontSize: '14px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        ← Back
      </a>
    </div>
  );
}
