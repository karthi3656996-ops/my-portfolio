'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    id: 'internshala-selection',
    title: 'Certificate of Selection',
    issuer: 'Internshala',
    type: 'Internship',
    date: 'July 07, 2026',
    description: 'Selected for AI Web Development internship at InAmigos Foundation through Internshala. Issued to Karthi Keyan from Yenepoya Institute Of Technology.',
    color: '#06b6d4',
    bg: 'from-cyan-500/15 to-cyan-600/5',
    border: 'border-cyan-500/25',
    image: '/certificate.png',
    verifyUrl: 'https://internshala.com/verify_certificate',
  },
  {
    id: 'mathesar-oss',
    title: 'Open Source Contributor',
    issuer: 'Mathesar Foundation',
    type: 'Open Source',
    date: '2024',
    description: 'Recognized for meaningful contributions to the Mathesar open-source project through pull requests and code reviews on GitHub.',
    color: '#22c55e',
    bg: 'from-emerald-500/15 to-emerald-600/5',
    border: 'border-emerald-500/25',
    image: null,
    verifyUrl: 'https://github.com/mathesar-foundation/mathesar',
  },
  {
    id: 'linkedin-python',
    title: 'Python for Data Science & AI',
    issuer: 'LinkedIn Learning',
    type: 'LinkedIn Learning',
    date: '2024',
    description: 'Comprehensive course covering Python programming for data science, machine learning, and AI applications.',
    color: '#0077b5',
    bg: 'from-blue-500/15 to-blue-600/5',
    border: 'border-blue-500/25',
    image: null,
    verifyUrl: null,
  },
  {
    id: 'linkedin-ml',
    title: 'Machine Learning Foundations',
    issuer: 'LinkedIn Learning',
    type: 'LinkedIn Learning',
    date: '2024',
    description: 'Covers core ML concepts including supervised learning, neural networks, model evaluation, and deployment strategies.',
    color: '#0077b5',
    bg: 'from-blue-500/15 to-blue-600/5',
    border: 'border-blue-500/25',
    image: null,
    verifyUrl: null,
  },
  {
    id: 'linkedin-cv',
    title: 'Computer Vision Fundamentals',
    issuer: 'LinkedIn Learning',
    type: 'LinkedIn Learning',
    date: '2024',
    description: 'Deep dive into computer vision techniques using OpenCV and deep learning for image recognition tasks.',
    color: '#06b6d4',
    bg: 'from-cyan-500/15 to-cyan-600/5',
    border: 'border-cyan-500/25',
    image: null,
    verifyUrl: null,
  },
  {
    id: 'linkedin-genai',
    title: 'Generative AI Essentials',
    issuer: 'LinkedIn Learning',
    type: 'LinkedIn Learning',
    date: '2024',
    description: 'Explores large language models, diffusion models, and practical applications of generative AI in products.',
    color: '#a855f7',
    bg: 'from-violet-500/15 to-violet-600/5',
    border: 'border-violet-500/25',
    image: null,
    verifyUrl: null,
  },
];

const typeColors: Record<string, string> = {
  Internship: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  'Open Source': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'LinkedIn Learning': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <Award size={12} />
            Certifications
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            Learning &amp; Recognition
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Certifications, achievements, and learning milestones in AI, ML, and software development.
          </p>
        </motion.div>

        {/* Featured certificate with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 glass rounded-2xl overflow-hidden border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-blue-600/5"
        >
          <div className="flex flex-col md:flex-row">
            {/* Certificate thumbnail */}
            <div
              className="relative md:w-80 h-52 md:h-auto cursor-zoom-in flex-shrink-0 overflow-hidden bg-white group"
              onClick={() => setLightbox('/certificate.png')}
            >
              <Image
                src="/certificate.png"
                alt="Internshala Certificate of Selection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {/* Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full border text-cyan-400 bg-cyan-400/10 border-cyan-400/20">
                  Internship Selection
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar size={11} /> July 07, 2026
                </span>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl mb-1">Certificate of Selection</h3>
                <p className="text-cyan-400 font-medium text-sm">Internshala</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Karthi Keyan</strong> from{' '}
                <strong className="text-white">Yenepoya Institute Of Technology</strong> has successfully secured an{' '}
                <strong className="text-white">AI Web Development</strong> internship at{' '}
                <strong className="text-white">InAmigos Foundation</strong> through Internshala.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setLightbox('/certificate.png')}
                  className="btn-primary text-sm py-2 px-4"
                >
                  <ZoomIn size={14} /> View Certificate
                </button>
                <a
                  href="https://internshala.com/verify_certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4"
                >
                  <ExternalLink size={14} /> Verify
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of certs */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.slice(1).map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className={`glass rounded-2xl p-5 flex flex-col gap-3 bg-gradient-to-br ${cert.bg} border ${cert.border} group transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                  <Award size={18} />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${typeColors[cert.type] || 'text-slate-400 bg-white/5 border-white/10'}`}>
                  {cert.type}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs font-medium" style={{ color: cert.color }}>{cert.issuer}</p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{cert.description}</p>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                  <Calendar size={11} /> {cert.date}
                </div>
                {cert.verifyUrl && (
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors">
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Certificate"
              width={900}
              height={640}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
