'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, FileText, Send, MapPin, Phone } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const contactLinks = [
  {
    id: 'contact-phone',
    icon: Phone,
    label: 'Phone',
    value: '+91 7904942972',
    href: 'tel:7904942972',
    accent: '#10b981',
    bg: 'from-emerald-500/15 to-emerald-600/5',
    border: 'border-emerald-500/25',
  },
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'karthi3656996@gmail.com',
    href: 'mailto:karthi3656996@gmail.com',
    accent: '#6366f1',
    bg: 'from-indigo-500/15 to-indigo-600/5',
    border: 'border-indigo-500/25',
  },
  {
    id: 'contact-address',
    icon: MapPin,
    label: 'Address',
    value: '533E, Valli theivanai nagar, Erode - 12',
    href: '#',
    accent: '#f59e0b',
    bg: 'from-amber-500/15 to-amber-600/5',
    border: 'border-amber-500/25',
  },
  {
    id: 'contact-github',
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/karthi3656996-ops',
    href: 'https://github.com/karthi3656996-ops',
    accent: '#f8fafc',
    bg: 'from-slate-500/15 to-slate-600/5',
    border: 'border-slate-500/25',
  },
  {
    id: 'contact-linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/karthi-keyan-980103379',
    href: 'https://www.linkedin.com/in/karthi-keyan-980103379',
    accent: '#0077b5',
    bg: 'from-blue-500/15 to-blue-600/5',
    border: 'border-blue-500/25',
  },
  {
    id: 'contact-resume',
    icon: FileText,
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume',
    accent: '#22c55e',
    bg: 'from-emerald-500/15 to-emerald-600/5',
    border: 'border-emerald-500/25',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-600/12 blur-[120px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <Send size={12} />
            Contact
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            I&apos;m open to internship opportunities, research collaborations, and interesting projects.
            Feel free to reach out — I&apos;d love to connect.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-2xl mx-auto">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10"
          >
            <MapPin size={14} className="text-indigo-400" />
            <span>India · Open to Remote</span>
          </motion.div>

          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  id={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className={`glass rounded-2xl p-5 flex items-center gap-4 bg-gradient-to-br ${link.bg} border ${link.border} group transition-all duration-200 hover:shadow-lg`}
                >
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${link.accent}20`, color: link.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium mb-0.5">{link.label}</p>
                    <p className="text-white font-medium text-sm truncate group-hover:text-indigo-300 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-10 glass rounded-2xl p-8 text-center border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-cyan-500/15 blur-2xl" />
            <h3 className="text-white font-display font-bold text-xl mb-2 relative">
              Ready to collaborate?
            </h3>
            <p className="text-slate-400 text-sm mb-6 relative">
              Whether it&apos;s an internship, project, or just a chat about AI — my inbox is always open.
            </p>
            <a
              href="mailto:karthi3656996@gmail.com"
              id="contact-cta-btn"
              className="btn-primary inline-flex relative"
            >
              <Mail size={16} />
              Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
