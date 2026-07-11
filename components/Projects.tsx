'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FolderGit2, Hand, MessageSquare, FileText } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 'elysia',
    title: 'Elysia',
    subtitle: 'Speak Beyond Silence',
    description:
      'Elysia is an AI-powered web app that converts sign language hand gestures into real-time text and speech, helping deaf and mute people communicate easily using AI and computer vision.',
    icon: Hand,
    accent: '#6366f1',
    accentBg: 'from-indigo-500/20 to-indigo-600/5',
    border: 'border-indigo-500/20',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Computer Vision'],
    github: 'https://github.com/karthi3656996-ops',
    demo: null,
  },
  {
    id: 'ai-notes',
    title: 'Noteify',
    subtitle: 'Turn Notes into Knowledge',
    description:
      'AI Study Notes Generator is a web-based app that converts raw study materials into clean, organized notes using AI-powered summarization with Gemini integration.',
    icon: FileText,
    accent: '#06b6d4',
    accentBg: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
    tags: ['Python', 'FastAPI', 'React', 'LLM APIs', 'Next.js'],
    github: 'https://github.com/karthi3656996-ops/ai-notes-generator',
    demo: null,
  },
  {
    id: 'cometchat',
    title: 'CometChat',
    subtitle: 'Real-Time Chat Application',
    description:
      'A full-featured real-time chat application with secure authentication, instant messaging, and a modern UI. Features end-to-end encrypted messaging, user presence indicators, and multi-room support.',
    icon: MessageSquare,
    accent: '#a855f7',
    accentBg: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/20',
    tags: ['React', 'WebSockets', 'Authentication', 'Real-time', 'JavaScript'],
    github: 'https://github.com/karthi3656996-ops/cometchat-demo',
    demo: null,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <FolderGit2 size={12} />
            Projects
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            Things I&apos;ve built
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            A selection of projects that showcase my skills across AI, ML, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-4 bg-gradient-to-br ${project.accentBg} border ${project.border} group relative overflow-hidden`}
              >
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: project.accent }}
                />

                <div className="flex items-start justify-between">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
                        title="View on GitHub"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-display font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-xs font-medium" style={{ color: project.accent }}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
