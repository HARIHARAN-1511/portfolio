'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'hariharan151104@gmail.com',
    link: 'mailto:hariharan151104@gmail.com',
    color: 'teal',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9345991469',
    link: 'tel:+919345991469',
    color: 'cyan',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Chennai, India',
    link: '#',
    color: 'emerald',
  },
]

const socialLinks = [
  { icon: FiLinkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/hariharanthirumalairajan', color: 'cyan' },
  { icon: FiGithub, label: 'GitHub', link: 'https://github.com/HARIHARAN-1511', color: 'teal' },
]

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await resp.json()
      if (!resp.ok || !json.ok) {
        const err = json?.error || 'Failed to send message'
        throw new Error(err)
      }

      setFormData({ name: '', email: '', subject: '', message: '' })
      setSuccessMessage('Message sent — you should receive it in your email shortly.')
      setErrorMessage(null)
    } catch (err: any) {
      console.error(err)
      setErrorMessage('Failed to send message: ' + (err?.message || 'server error'))
      setSuccessMessage(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-gradient mb-4">Get In Touch</h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-space-grotesk font-bold text-slate-200 mb-6">
                  Let's Connect
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>
              {/* Inline feedback messages */}
              {successMessage && (
                <div className="rounded-md p-3 mb-4 bg-emerald-800/20 border border-emerald-700 text-emerald-300 text-sm">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="rounded-md p-3 mb-4 bg-rose-900/20 border border-rose-700 text-rose-300 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const colorClasses = {
                    teal: {
                      bg: 'from-blue-600/10 to-blue-700/10',
                      text: 'text-blue-400'
                    },
                    cyan: {
                      bg: 'from-blue-600/10 to-indigo-600/10',
                      text: 'text-blue-400'
                    },
                    emerald: {
                      bg: 'from-indigo-600/10 to-blue-600/10',
                      text: 'text-indigo-400'
                    }
                  }
                  const colors = colorClasses[info.color as keyof typeof colorClasses] || colorClasses.teal
                  
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="card-dark p-6 flex items-center gap-4 group cursor-pointer"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                        <p className="text-slate-200 font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-slate-300 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const colorClasses = {
                      teal: {
                        bg: 'from-blue-600/10 to-blue-700/10',
                        border: 'border-blue-600/30 hover:border-blue-500',
                        text: 'text-blue-400'
                      },
                      cyan: {
                        bg: 'from-blue-600/10 to-indigo-600/10',
                        border: 'border-blue-600/30 hover:border-blue-500',
                        text: 'text-blue-400'
                      },
                      emerald: {
                        bg: 'from-indigo-600/10 to-blue-600/10',
                        border: 'border-indigo-600/30 hover:border-indigo-500',
                        text: 'text-indigo-400'
                      }
                    }
                    const colors = colorClasses[social.color as keyof typeof colorClasses] || colorClasses.teal
                    
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center border ${colors.border} transition-all`}
                      >
                        <social.icon className={`w-6 h-6 ${colors.text}`} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="card-dark p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
