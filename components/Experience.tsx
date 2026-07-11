'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GitPullRequest, GitMerge, Star } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const experiences = [
  {
    id: 'mathesar',
    role: 'Open Source Contributor',
    company: 'Mathesar',
    companyUrl: 'https://github.com/mathesar-foundation/mathesar',
    type: 'Open Source',
    period: '2024 — Present',
    description:
      'Contributing to Mathesar, an open-source web application that provides a spreadsheet-like interface for PostgreSQL databases. Collaborating with a global team of maintainers through GitHub, submitting pull requests, performing code reviews, and improving the user experience and documentation.',
    highlights: [
      { icon: GitPullRequest, text: 'Worked in a Linux-based development environment' },
      { icon: FiGithub, text: 'Experienced in terminal-based workflows' },
      { icon: GitMerge, text: 'Used Git and GitHub for collaboration' },
      { icon: Star, text: 'Contributed to a project with 2k+ GitHub stars' },
    ],
    accent: '#22c55e',
    border: 'border-emerald-500/20',
    bg: 'from-emerald-500/10 to-emerald-600/5',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="py-28 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <Briefcase size={12} />
            Experience
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            Where I&apos;ve contributed
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Real-world contribution experience through open-source collaboration.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent hidden sm:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="relative sm:pl-20 mb-8"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-emerald-500/60 hidden sm:flex items-center justify-center -translate-x-1/2"
                style={{ backgroundColor: '#080808' }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Card */}
              <div
                className={`glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${exp.bg} border ${exp.border} group hover:border-emerald-400/30 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                        style={{ color: exp.accent, borderColor: `${exp.accent}40`, backgroundColor: `${exp.accent}10` }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-xl">{exp.role}</h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                    >
                      @ {exp.company} ↗
                    </a>
                  </div>
                  <span className="text-slate-500 text-sm font-medium bg-white/5 px-3 py-1 rounded-lg">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.highlights.map(({ icon: HIcon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-slate-400">
                      <div
                        className="p-1.5 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${exp.accent}15`, color: exp.accent }}
                      >
                        <HIcon size={13} />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
