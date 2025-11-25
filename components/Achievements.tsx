'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBook, FiUsers, FiTrendingUp } from 'react-icons/fi'

const achievements = [
  {
    category: 'Hackathons',
    icon: FiTrendingUp,
    items: [
      {
        title: 'GenAI Hackathon 2024',
        subtitle: 'Intel + KPR Institute',
        description: 'Competed in GenAI Hackathon, developing real-world AI solutions in a collaborative, fast-paced environment.',
      },
      {
        title: 'HackVerse 2025',
        subtitle: 'SRMIST Ramapuram',
        description: 'Participated in HackVerse during TEXUS\'25, showcasing innovative problem-solving skills, organized by SRM Institute of Science and Technology.',
      },
    ],
  },
  {
    category: 'Publications',
    icon: FiBook,
    items: [
      {
        title: 'IEEE ICESIC-2024',
        subtitle: 'Research Paper',
        description: 'A Competency Learning and Student-Centric Predictive Model for Evaluating Student Performance Using Ensemble Learning',
      },
      {
        title: 'IJERCSE (2025)',
        subtitle: 'Research Paper',
        description: 'Multimodal Emotion Recognition Using CNN, Transformer Models, and Deep Learning',
      },
    ],
  },
  {
    category: 'Extra-curricular',
    icon: FiUsers,
    items: [
      {
        title: 'Event Organizer',
        subtitle: '2 Minutes to Talent',
        description: 'Organized an event "2 Minutes to Talent", providing a platform for students to showcase creativity and talent.',
      },
    ],
  },
]

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="achievements" className="section-padding relative">
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
            <h2 className="section-title text-gradient mb-4">Achievements</h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, categoryIndex) => (
              <motion.div
                key={achievement.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card-dark p-6 relative overflow-hidden group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-bold text-slate-200">
                    {achievement.category}
                  </h3>
                </div>

                {/* Achievement Items */}
                <div className="space-y-6">
                  {achievement.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                      className="relative pl-4 border-l-2 border-blue-600/30"
                    >
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-indigo-400 text-sm font-medium mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
