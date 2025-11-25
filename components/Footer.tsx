'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/HARIHARAN-1511', color: 'text-blue-400 hover:text-blue-300' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/hariharanthirumalairajan', color: 'text-blue-400 hover:text-blue-300' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-700 bg-[#1e293b]">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} Hariharan T. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with Next.js, React & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} transition-colors duration-200`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
          >
            <FiCode className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
