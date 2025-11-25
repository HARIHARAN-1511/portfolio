'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiTarget, FiTrendingUp } from 'react-icons/fi'
import NextImage from 'next/image'
import mainImg from '../assets/images/mainimg.jpg'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'React/Next.js', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'Machine Learning', level: 85 },
  { name: 'MongoDB/SQL', level: 80 },
  { name: 'OpenAI API/GenAI', level: 85 },
]

const interests = [
  { icon: FiUser, title: 'AI Research', desc: 'Exploring cutting-edge AI technologies' },
  { icon: FiTarget, title: 'Problem Solving', desc: 'Building innovative solutions' },
  { icon: FiTrendingUp, title: 'Continuous Learning', desc: 'Staying ahead of technology trends' },
]

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="section-title text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
            {/* Image - mainimg.jpg (left) */}
            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl"
            >
              <NextImage
                src={mainImg}
                alt="Profile"
                width={400}
                height={500}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>

            {/* Summary (from resume image) */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-space-grotesk font-bold text-blue-400 mb-4">Profile & Highlights</h3>
              <p className="text-slate-300 leading-relaxed">Full Stack Engineer & AI/ML enthusiast based in Chennai, India. I build scalable web applications (React / Next.js, Node.js) and data-driven AI solutions — integrating ML models, GenAI APIs and polished frontend experiences.</p>

              <ul className="text-slate-400 list-disc list-inside space-y-2">
                <li>Recent experience as an Incubation Trainee working on ML frameworks and production-ready pipelines.</li>
                <li>Built AI-driven projects (mock-interview platform, multimodal emotion recognition) using TensorFlow / PyTorch and modern web stacks.</li>
                <li>Active in hackathons and published work related to ML and student-performance evaluation.</li>
              </ul>

              {/* resume image link intentionally removed per request */}
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-space-grotesk font-bold text-blue-400 mb-6">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interests Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-dark p-6 text-center group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <interest.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-200 mb-2">{interest.title}</h4>
                  <p className="text-slate-400 text-sm">{interest.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
