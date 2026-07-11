'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Eye, Zap, User } from 'lucide-react';

const passions = [
  { icon: Brain, label: 'Machine Learning', color: 'text-indigo-400' },
  { icon: Eye, label: 'Computer Vision', color: 'text-cyan-400' },
  { icon: Zap, label: 'Generative AI', color: 'text-violet-400' },
  { icon: Code2, label: 'Full Stack AI', color: 'text-emerald-400' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left - text */}
          <div>
            <motion.div variants={fadeUp} className="section-label">
              <User size={12} />
              About Me
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight"
            >
              Passionate about building the{' '}
              <span className="gradient-text">AI-powered future</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-4">
              I&apos;m <strong className="text-white">Karthikeyan M</strong>, a B.Tech student (2025-2029) specializing in{' '}
              <span className="text-indigo-400">Artificial Intelligence & Machine Learning</span> at{' '}
              <span className="text-white font-medium">Yenepoya University X Kalvium</span>. My journey spans
              building computer vision systems, training deep learning models, and crafting full-stack AI applications
              that solve real-world problems.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-4">
              I&apos;m deeply fascinated by <span className="text-cyan-400">Generative AI</span> and the
              transformative potential it holds — from natural language understanding to creative applications. I combine
              my passion for AI with strong software engineering principles to build products that are not just smart,
              but also reliable and user-friendly.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              Beyond academics, I contribute to open-source projects like{' '}
              <span className="text-white font-medium">Mathesar</span>, collaborate with global developer communities,
              and continuously explore the latest breakthroughs in AI research.
            </motion.p>
          </div>

          {/* Right - passion cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {passions.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className={`${color} p-2 w-fit rounded-xl bg-white/5`}>
                  <Icon size={22} />
                </div>
                <span className="text-white font-semibold text-sm leading-tight">{label}</span>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="col-span-2 glass rounded-2xl p-6 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5"
            >
              <p className="text-slate-300 text-sm italic leading-relaxed">
                &quot;I build at the intersection of research and engineering — where neural networks meet production systems.&quot;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                  K
                </div>
                <span className="text-xs text-slate-500">Karthikeyan M</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
