'use client';

import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/karthi3656996-ops', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/karthi-keyan-980103379', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:karthi3656996@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
              K
            </div>
            <span className="text-slate-500 text-sm">
              Karthikeyan M · Built with{' '}
              <Heart size={12} className="inline text-indigo-400 mx-0.5" />
              & Next.js
            </span>
          </motion.div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs order-3 sm:order-2">
            © {new Date().getFullYear()} Karthikeyan M. All rights reserved.
          </p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 order-2 sm:order-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="p-2 rounded-lg text-slate-600 hover:text-white hover:bg-white/5 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
