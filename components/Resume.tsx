'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDownload, HiEye, HiDocument, HiStar } from 'react-icons/hi'

export default function Resume() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })


  // Use Google Drive link provided (opens resume in Drive viewer)
  const resumeUrl = 'https://drive.google.com/file/d/1srDKakL3yzQSNVv9-h2vJTSTIRl1LBIV/view?usp=sharing'

  const handleDownload = () => {
    // Drive viewer will be opened (user can download from Drive UI)
    window.open(resumeUrl, '_blank')
  }

  const handlePreview = () => {
    // Open Google Drive resume viewer
    window.open(resumeUrl, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    // Use the same dark background as other sections and reduce vertical padding so the
    // resume section is more compact on the page.
    <section id="resume" className="py-12 px-4 sm:px-6 lg:px-8 relative bg-[#1e293b]">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              My <span className="text-gradient">Resume</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p 
              className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Download my resume to get a comprehensive overview of my skills, experience, and achievements
            </motion.p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={cardVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="card-dark p-6 md:p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236C63FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* Resume Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6 shadow-2xl"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <HiDocument className="w-12 h-12 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-2xl font-bold text-slate-100 mb-3"
                  variants={itemVariants}
                >
                  Professional Resume
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-sm text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Get a detailed overview of my educational background, technical skills, 
                  project experience, and achievements. My resume showcases my journey 
                  in AI/ML and software development.
                </motion.p>

                {/* Highlights removed per request */}

                {/* Action Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  {/* Download button removed per request */}

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-full font-semibold transition-all duration-200 group"
                  >
                    <HiEye className="w-5 h-5 group-hover:text-primary-600" />
                    <span>Preview Online</span>
                  </a>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  variants={itemVariants}
                  className="mt-6 p-3 bg-transparent rounded-lg border border-slate-700/30"
                >
                  <p className="text-sm text-slate-400">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} • 
                    <strong> Format:</strong> PDF • 
                    <strong> Size:</strong> ~2MB
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          {/* Closing CTA removed per request */}
        </motion.div>
      </div>
    </section>
  )
}
