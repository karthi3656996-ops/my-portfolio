'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';
import {
  SiPython, SiJavascript, SiHtml5, SiMysql,
  SiTensorflow, SiPytorch, SiOpencv,
  SiReact, SiNextdotjs, SiFastapi,
  SiGit, SiDocker,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiGithub as SiGH } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-indigo-500/20 to-indigo-600/5',
    border: 'border-indigo-500/20',
    dot: 'bg-indigo-500',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#3b82f6' },
      { name: 'Java', Icon: FaJava, color: '#f97316' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#eab308' },
      { name: 'HTML5', Icon: SiHtml5, color: '#f97316' },
      { name: 'CSS3', Icon: null, color: '#3b82f6', emoji: '🎨' },
      { name: 'SQL', Icon: SiMysql, color: '#06b6d4' },
    ],
  },
  {
    title: 'AI / ML',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-500',
    skills: [
      { name: 'AI-Based Web Apps', Icon: null, color: '#f8fafc', emoji: '🤖' },
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#ef4444' },
      { name: 'PyTorch', Icon: SiPytorch, color: '#f97316' },
      { name: 'OpenCV', Icon: SiOpencv, color: '#22c55e' },
      { name: 'MediaPipe', Icon: null, color: '#06b6d4', emoji: '🖐️' },
    ],
  },
  {
    title: 'Web & Frameworks',
    color: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/20',
    dot: 'bg-violet-500',
    skills: [
      { name: 'Frontend Development', Icon: null, color: '#f8fafc', emoji: '🌐' },
      { name: 'UI/UX Design', Icon: null, color: '#f8fafc', emoji: '🎨' },
      { name: 'React', Icon: SiReact, color: '#06b6d4' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#f8fafc' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#22c55e' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-500',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#f97316' },
      { name: 'GitHub', Icon: FiGithub, color: '#f8fafc' },
      { name: 'Docker', Icon: SiDocker, color: '#3b82f6' },
      { name: 'Azure', Icon: null, color: '#3b82f6', emoji: '☁️' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <Layers size={12} />
            Skills
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            Technologies I work with
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            A curated stack spanning AI research, backend engineering, and modern frontend development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${category.color} border ${category.border}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${category.dot}`} />
                <h3 className="text-white font-semibold text-sm tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 text-slate-300 text-sm font-medium hover:border-white/15 hover:text-white transition-all cursor-default"
                  >
                    {skill.Icon ? (
                      <skill.Icon style={{ color: skill.color }} size={16} />
                    ) : (
                      <span className="text-base leading-none">{skill.emoji}</span>
                    )}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
