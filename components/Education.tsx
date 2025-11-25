'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi'

const educationData = [
  {
    year: '2022 - 2026',
    degree: 'Bachelor of Technology (B. Tech)',
    field: 'Computer Science and Engineering',
    specialization: 'Specialization in AIML',
    institution: 'SRM University',
    cgpa: '8.67',
    highlights: ['AIML Specialization', 'Research Publications', 'Hackathon Winner'],
  },
]

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="education" className="section-padding relative bg-[#1e293b]">
      <div className="container-custom mx-auto">
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
            <h2 className="section-title text-gradient mb-4">Education</h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transform -translate-y-1/2"></div>
            
            {/* Timeline Items */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:mt-24'}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-[#131829] z-10"
                    style={{ left: index % 2 === 0 ? 'calc(100% - 3rem)' : 'calc(0% - 1.5rem)' }}
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                  </div>

                  {/* Card */}
                  <div className="card-dark p-8 relative overflow-hidden group h-full">
                    {/* Gradient Overlay */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 mb-4">
                        <FiCalendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm">{edu.year}</span>
                      </div>

                      {/* Degree */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                          <FiBook className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-space-grotesk font-bold text-slate-200 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-400 font-medium">{edu.field}</p>
                          {edu.specialization && (
                            <p className="text-blue-400 text-sm mt-1">{edu.specialization}</p>
                          )}
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-2 mb-4 text-slate-300">
                        <FiAward className="w-5 h-5 text-blue-400" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>

                      {/* CGPA */}
                      <div className="mb-4">
                        <span className="text-slate-400 text-sm">CGPA: </span>
                        <span className="text-indigo-400 font-bold text-lg">{edu.cgpa}</span>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-slate-800/50 border border-blue-600/30 text-blue-300 text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
