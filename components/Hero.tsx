'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FileText, ArrowDown, FolderOpen } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

const roles = ['AI & Machine Learning Student', 'Full Stack Developer', 'Open Source Contributor'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[4px]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability (65-75% black) */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Subtle ambient gradients over the video */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              B.Tech Student · Yenepoya University X Kalvium
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-4 leading-[1.05]"
            >
              Karthikeyan{' '}
              <span className="gradient-text">M</span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="relative flex items-center justify-center h-8 w-[270px] rounded-full bg-white/5 border border-white/10 overflow-hidden">
                <AnimatePresence>
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="text-sm font-medium text-slate-300 absolute whitespace-nowrap"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              I build <span className="text-white font-medium">AI-powered applications</span> and modern{' '}
              <span className="text-white font-medium">full-stack web experiences</span>. Passionate about
              machine learning, web development, and creating impactful solutions through technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={scrollToProjects}
                id="hero-projects-btn"
                className="btn-primary"
              >
                <FolderOpen size={16} />
                View Projects
              </button>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-btn"
                className="btn-secondary"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/karthi3656996-ops"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
              >
                <FiGithub size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/karthi-keyan-980103379"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0 relative"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 to-cyan-400/30 blur-2xl scale-110 animate-pulse-slow" />

            {/* Gradient border ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/30">
              <div className="rounded-full overflow-hidden w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-[#111]">
                <Image
                  src="/profile.png"
                  alt="Karthikeyan M"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badge — Available */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#111]/90 border border-emerald-500/30 backdrop-blur-sm shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-semibold whitespace-nowrap">Open to Opportunities</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex gap-8 justify-center lg:justify-start mt-16 text-center"
        >
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '16+', label: 'Technologies' },
            { value: '2026', label: 'Internshala Certified' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold font-display gradient-text">{stat.value}</span>
              <span className="text-xs text-slate-500 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce-subtle" />
      </motion.div>
    </section>
  );
}
