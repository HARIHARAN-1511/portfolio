'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

const projects = [
  {
    title: 'AI-Driven Mock Interview Platform',
    description: 'Built a RAG-powered mock interview assistant that asks context-aware questions from PDF material and validates candidate answers. Designed backend analysis modules for grammar, tone, and speech disfluencies, integrated with real-time feedback APIs and Next.js frontend dashboards.',
    technologies: ['FastAPI', 'Flask', 'ChromaDB', 'Cloudflare', 'TensorFlow', 'Keras', 'LLM'],
    image: '🎤',
    gradient: 'from-blue-600 to-blue-700',
    github: 'https://github.com/Krishna311204/mock-interviewer',
    featured: true,
  },
  {
    title: 'AI-Based Smart Study Hub',
    description: 'Created a smart learning platform with features like PDF summarization, interactive quizzes, task management, and AI chatbot assistance. Enhanced productivity for students and professionals with intelligent learning tools.',
    technologies: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'AI SDK'],
    image: '📚',
    gradient: 'from-blue-600 to-indigo-600',
    github: 'https://github.com/HARIHARAN-1511/ai-based-smart-study-hub.git',
    featured: true,
  },
  {
    title: 'AI-Powered Disease Classifier',
    description: 'Developed a web-based AI platform using TensorFlow.js and Flask for real-time risk predictions of diabetes, heart disease, and Parkinson\'s disease. Designed interactive interfaces and an admin panel, ensuring privacy by running all predictions locally in the browser.',
    technologies: ['TensorFlow.js', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'Flask'],
    image: '🏥',
    gradient: 'from-indigo-600 to-blue-600',
    github: 'https://github.com/HARIHARAN-1511/disease-classifier-.git',
    featured: false,
  },
]

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="section-padding relative bg-[#1e293b]">
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
            <h2 className="section-title text-gradient mb-4">Projects</h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              A collection of my work showcasing expertise in AI/ML, web development, and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid - Alternate Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`card-dark p-6 relative overflow-hidden group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Project Icon/Image */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.image}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-space-grotesk font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm">Code</span>
                      </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${project.gradient} opacity-5 rounded-tl-full`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
