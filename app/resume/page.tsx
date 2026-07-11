import type { Metadata } from 'next';
import ResumeActions from '@/components/ResumeActions';

export const metadata: Metadata = {
  title: 'Resume — Karthikeyan M',
  description: 'Resume of Karthikeyan M — B.Tech AI & ML Student, Full Stack Developer, Open Source Contributor',
};

export default function ResumePage() {
  return (
    <>
      {/* Print button — hidden when printing */}
      <ResumeActions />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #f8fafc; }
        .resume-wrapper {
          max-width: 860px;
          margin: 2rem auto 4rem;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
        }
        /* Header */
        .resume-header {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%);
          color: #fff;
          padding: 2.5rem 2.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .resume-avatar {
          width: 90px; height: 90px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.4);
          object-fit: cover;
          flex-shrink: 0;
        }
        .resume-header h1 {
          font-size: 2rem; font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }
        .resume-header .subtitle {
          font-size: 0.95rem; color: rgba(255,255,255,0.75);
          font-weight: 500; margin-bottom: 0.6rem;
        }
        .resume-header .tags {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
        }
        .resume-header .tag {
          font-size: 0.7rem; font-weight: 600;
          padding: 0.25rem 0.7rem; border-radius: 100px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        /* Contact bar */
        .contact-bar {
          background: #6366f1;
          color: #fff;
          padding: 0.75rem 2.5rem;
          display: flex; flex-wrap: wrap; gap: 1.5rem;
          font-size: 0.8rem; font-weight: 500;
        }
        .contact-bar a { color: #fff; text-decoration: none; }
        .contact-bar span { opacity: 0.85; }
        /* Body */
        .resume-body {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        /* Sidebar */
        .sidebar {
          background: #f1f5f9;
          padding: 2rem 1.5rem;
          border-right: 1px solid #e2e8f0;
        }
        /* Main */
        .main-col {
          padding: 2rem 2rem;
        }
        /* Section */
        .section { margin-bottom: 1.75rem; }
        .section-title {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #6366f1;
          border-bottom: 2px solid #6366f1;
          padding-bottom: 0.35rem; margin-bottom: 1rem;
        }
        /* Skills */
        .skill-group { margin-bottom: 1rem; }
        .skill-group-title { font-size: 0.75rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem; }
        .skill-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .skill-chip {
          font-size: 0.7rem; padding: 0.2rem 0.6rem;
          border-radius: 4px; background: #e0e7ff;
          color: #3730a3; font-weight: 500;
          border: 1px solid #c7d2fe;
        }
        /* Education */
        .edu-item { margin-bottom: 0.75rem; }
        .edu-degree { font-size: 0.82rem; font-weight: 700; color: #111827; }
        .edu-school { font-size: 0.75rem; color: #6366f1; font-weight: 600; }
        .edu-date { font-size: 0.7rem; color: #9ca3af; margin-top: 0.15rem; }
        /* Contact info sidebar */
        .contact-item { font-size: 0.75rem; color: #4b5563; margin-bottom: 0.5rem; line-height: 1.5; }
        .contact-item strong { color: #111827; display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.1rem; }
        /* Project cards */
        .project { margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid #f1f5f9; }
        .project:last-child { border-bottom: none; }
        .project-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; }
        .project-title { font-size: 0.9rem; font-weight: 700; color: #111827; }
        .project-link { font-size: 0.7rem; color: #6366f1; text-decoration: none; white-space: nowrap; }
        .project-desc { font-size: 0.78rem; color: #4b5563; line-height: 1.6; margin-bottom: 0.4rem; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .project-tag { font-size: 0.65rem; padding: 0.15rem 0.5rem; border-radius: 3px; background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; font-weight: 500; }
        /* Experience */
        .exp-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.35rem; }
        .exp-role { font-size: 0.88rem; font-weight: 700; color: #111827; }
        .exp-company { font-size: 0.78rem; color: #6366f1; font-weight: 600; }
        .exp-date { font-size: 0.72rem; color: #9ca3af; white-space: nowrap; }
        .exp-desc { font-size: 0.78rem; color: #4b5563; line-height: 1.6; }
        .exp-bullets { margin-top: 0.4rem; padding-left: 1rem; }
        .exp-bullets li { font-size: 0.78rem; color: #4b5563; margin-bottom: 0.2rem; line-height: 1.5; }
        /* Cert */
        .cert-item { margin-bottom: 0.6rem; }
        .cert-name { font-size: 0.8rem; font-weight: 600; color: #111827; }
        .cert-issuer { font-size: 0.72rem; color: #6366f1; }
        .cert-date { font-size: 0.68rem; color: #9ca3af; }
        /* Print */
        .no-print { }
        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
          .resume-wrapper {
            margin: 0; border-radius: 0;
            box-shadow: none;
            max-width: 100%;
          }
        }
        @page { margin: 0; size: A4; }
      `}</style>

      <div className="resume-wrapper no-print-margin">
        {/* Header */}
        <div className="resume-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.png" alt="Karthikeyan M" className="resume-avatar" />
          <div>
            <h1>Karthikeyan M</h1>
            <div className="subtitle">B.Tech AI &amp; ML — Yenepoya University</div>
            <div className="tags">
              <span className="tag">AI Engineer</span>
              <span className="tag">ML Developer</span>
              <span className="tag">Full Stack Dev</span>
              <span className="tag">Open Source Contributor</span>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="contact-bar">
          <span>📧 <a href="mailto:karthi3656996@gmail.com">karthi3656996@gmail.com</a></span>
          <span>📱 7904942972</span>
          <span>🐙 <a href="https://github.com/karthi3656996-ops">github.com/karthi3656996-ops</a></span>
          <span>💼 <a href="https://www.linkedin.com/in/karthi-keyan-980103379">linkedin.com/in/karthi-keyan</a></span>
          <span>📍 Erode, Tamil Nadu</span>
        </div>

        {/* Body */}
        <div className="resume-body">
          {/* Sidebar */}
          <div className="sidebar">
            {/* Education */}
            <div className="section">
              <div className="section-title">Education</div>
              <div className="edu-item">
                <div className="edu-degree">B.Tech AI &amp; Machine Learning</div>
                <div className="edu-school">Yenepoya University</div>
                <div className="edu-date">2025 – 2029</div>
              </div>
            </div>

            {/* Skills */}
            <div className="section">
              <div className="section-title">Skills</div>
              <div className="skill-group">
                <div className="skill-group-title">Languages</div>
                <div className="skill-chips">
                  {['Python','Java','JavaScript','HTML5','CSS3','SQL'].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-title">AI / ML</div>
                <div className="skill-chips">
                  {['TensorFlow','PyTorch','OpenCV','MediaPipe'].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-title">Web</div>
                <div className="skill-chips">
                  {['React','Next.js','FastAPI'].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-title">Tools</div>
                <div className="skill-chips">
                  {['Git','GitHub','Docker','Azure'].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="section">
              <div className="section-title">Certifications</div>
              <div className="cert-item">
                <div className="cert-name">Certificate of Selection</div>
                <div className="cert-issuer">Internshala · InAmigos Foundation</div>
                <div className="cert-date">July 2026 · AI Web Development</div>
              </div>
              <div className="cert-item">
                <div className="cert-name">Open Source Contributor</div>
                <div className="cert-issuer">Mathesar Foundation</div>
                <div className="cert-date">2024</div>
              </div>
              <div className="cert-item">
                <div className="cert-name">Python for Data Science &amp; AI</div>
                <div className="cert-issuer">LinkedIn Learning</div>
                <div className="cert-date">2024</div>
              </div>
            </div>

            {/* Interests */}
            <div className="section">
              <div className="section-title">Interests</div>
              <div className="skill-chips">
                {['Generative AI','Computer Vision','LLMs','UI/UX Design','Open Source'].map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Main column */}
          <div className="main-col">
            {/* Summary */}
            <div className="section">
              <div className="section-title">Summary</div>
              <p style={{fontSize:'0.82rem', color:'#4b5563', lineHeight:1.7}}>
                Passionate B.Tech AI &amp; ML student at Yenepoya University building AI-powered applications and modern full-stack web experiences. Experienced with machine learning, computer vision, and open-source collaboration. Selected for AI Web Development internship at InAmigos Foundation through Internshala (July 2026).
              </p>
            </div>

            {/* Projects */}
            <div className="section">
              <div className="section-title">Projects</div>

              <div className="project">
                <div className="project-header">
                  <span className="project-title">Elysia — AI Sign Language Translator</span>
                  <a href="https://github.com/karthi3656996-ops" className="project-link">GitHub ↗</a>
                </div>
                <p className="project-desc">
                  Real-time AI-powered sign language translation system using computer vision and ML to bridge communication gaps for the deaf and hard-of-hearing community. Performs hand gesture detection with high accuracy.
                </p>
                <div className="project-tags">
                  {['Python','OpenCV','MediaPipe','TensorFlow','Computer Vision'].map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>

              <div className="project">
                <div className="project-header">
                  <span className="project-title">AI Notes Generator</span>
                  <a href="https://github.com/karthi3656996-ops/ai-notes-generator" className="project-link">GitHub ↗</a>
                </div>
                <p className="project-desc">
                  AI-powered study notes generator that converts raw study materials into clean, structured notes using AI-powered summarization with Gemini integration. Built with FastAPI backend and React frontend.
                </p>
                <div className="project-tags">
                  {['Python','FastAPI','React','Gemini API','Next.js'].map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>

              <div className="project">
                <div className="project-header">
                  <span className="project-title">CometChat — Real-Time Chat App</span>
                  <a href="https://github.com/karthi3656996-ops/cometchat-demo" className="project-link">GitHub ↗</a>
                </div>
                <p className="project-desc">
                  Full-featured real-time chat application with secure authentication, instant messaging, multi-room support, and modern UI. Implemented WebSocket-based messaging with end-to-end encrypted sessions.
                </p>
                <div className="project-tags">
                  {['React','WebSockets','Authentication','Real-time','JavaScript'].map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="section">
              <div className="section-title">Experience</div>
              <div>
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Open Source Contributor</div>
                    <div className="exp-company">Mathesar Foundation</div>
                  </div>
                  <div className="exp-date">2024 — Present</div>
                </div>
                <ul className="exp-bullets">
                  <li>Contributed to Mathesar, an open-source PostgreSQL spreadsheet web app with 2k+ GitHub stars</li>
                  <li>Submitted and merged pull requests; performed code reviews with global maintainers</li>
                  <li>Collaborated via GitHub Issues, Discussions, and upstream workflows</li>
                </ul>
              </div>

              <div style={{marginTop:'1rem'}}>
                <div className="exp-header">
                  <div>
                    <div className="exp-role">AI Web Development Intern (Selected)</div>
                    <div className="exp-company">InAmigos Foundation · via Internshala</div>
                  </div>
                  <div className="exp-date">July 2026</div>
                </div>
                <p className="exp-desc">
                  Selected for AI Web Development internship through Internshala from Yenepoya Institute Of Technology. Certificate Number: aoclqr7jeka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
