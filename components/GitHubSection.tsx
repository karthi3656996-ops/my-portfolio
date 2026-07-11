'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const pinnedRepos = [
  {
    name: 'elysia',
    description: 'AI Sign Language Translator — real-time hand gesture recognition using OpenCV and MediaPipe.',
    stars: 12,
    forks: 3,
    language: 'Python',
    langColor: '#3b82f6',
    url: 'https://github.com/karthi3656996-ops',
  },
  {
    name: 'ai-notes-generator',
    description: 'AI-powered study notes generator built with FastAPI + React that synthesizes content using LLMs.',
    stars: 8,
    forks: 2,
    language: 'TypeScript',
    langColor: '#3b82f6',
    url: 'https://github.com/karthi3656996-ops/ai-notes-generator',
  },
  {
    name: 'cometchat-demo',
    description: 'Real-time chat application with secure login, WebSocket messaging, and a modern UI.',
    stars: 5,
    forks: 1,
    language: 'JavaScript',
    langColor: '#eab308',
    url: 'https://github.com/karthi3656996-ops/cometchat-demo',
  },
];

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="github" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <FiGithub size={12} />
            GitHub
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            My open source activity
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Consistent contributions, pinned repositories, and collaborative development.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-10">
          {/* Contribution Graph via image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 border border-white/8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold">Contribution Graph</h3>
              <a
                href="https://github.com/karthi3656996-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </div>
            <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/4f46e5/karthi3656996-ops"
                alt="GitHub Contribution Chart"
                className="w-full min-w-[600px]"
              />
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="glass rounded-2xl p-4 border border-white/8 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=karthi3656996-ops&show_icons=true&theme=transparent&title_color=6366f1&icon_color=06b6d4&text_color=94a3b8&border_color=ffffff10&hide_border=false&count_private=true"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>
            <div className="glass rounded-2xl p-4 border border-white/8 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=karthi3656996-ops&layout=compact&theme=transparent&title_color=6366f1&text_color=94a3b8&border_color=ffffff10&hide_border=false&langs_count=6"
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>

          {/* Pinned Repos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Pinned Repositories</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {pinnedRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="glass glass-hover rounded-xl p-4 flex flex-col gap-3 border border-white/8 group"
                >
                  <div className="flex items-start justify-between">
                    <FiGithub size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                    <ExternalLink size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{repo.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{repo.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-600 mt-auto">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={11} /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={11} /> {repo.forks}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
