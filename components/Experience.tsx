'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Incubation Trainee (Mentee)',
    company: 'Kanini Software Solutions',
    location: 'Chennai, Tamil Nadu',
    period: 'Feb 2025 - Present',
    type: 'Full-time',
    description: 'Engaged in an industry mentorship program, gaining expertise in data analysis, professional development, and soft skills. Currently working on a Multi-agent Framework that can parse through repositories and generate a success report, and also give feedback with the help of Lang chain, Lan graph libraries.',
    technologies: ['LangChain', 'LangGraph', 'Python', 'Multi-agent Systems'],
    achievements: [
      'Developing advanced multi-agent framework for repository analysis',
      'Gaining expertise in data analysis and professional development',
      'Working with cutting-edge AI frameworks'
    ]
  },
  {
    title: 'Freelance Web Developer',
    company: 'PSVIT Solution (psvitsolution.in)',
    location: 'Chennai, Tamil Nadu',
    period: 'Sep 2025 - Present',
    type: 'Freelance',
    description: 'Developed and launched the official company website for PSVIT Solution, spotlighting the brand\'s commitment to operational excellence and customer satisfaction across IT equipment rentals—including printers, scanners, and copiers. Collaborated with stakeholders to deliver a responsive, consultancy-focused platform that supports diverse business sectors.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Web Development'],
    achievements: [
      'Successfully launched official company website',
      'Enhanced customer engagement across business sectors',
      'Delivered responsive, consultancy-focused platform'
    ]
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="experience" className="section-padding relative">
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
            <h2 className="section-title text-gradient mb-4">Experience</h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-dark p-8 relative overflow-hidden group"
              >
                {/* Gradient Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700"></div>
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 pl-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FiBriefcase className="w-5 h-5 text-blue-400" />
                        <h3 className="text-2xl font-space-grotesk font-bold text-slate-200">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 flex-wrap text-slate-300">
                        <span className="font-semibold text-blue-400">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm">
                          <FiMapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <FiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-400 text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-slate-800/50 border border-indigo-600/30 text-indigo-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-blue-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

