'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Database, Globe
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'Vite', level: 90 },
      { name: 'React.js', level: 90 },
      { name: 'JavaScript/TypeScript', level: 93 },
      { name: 'Tailwind CSS', level: 88 },
    ],
    color: 'from-cyan-400 to-blue-500', // brighter on black
  },
  {
    title: 'Backend / AI Development',
    icon: Database,
    skills: [
      { name: 'REST APIs', level: 50 },
      { name: 'Sanity CMS', level: 76 },
      { name: 'Agentic AI', level: 70 },
      { name: 'Python', level: 80 },
    ],
    color: 'from-green-400 to-lime-500',
  },
]

function SkillBar({ skill, index, isVisible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-white/70 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function SkillSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and methodologies that I use to
            create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl w-full"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-white/10 border-white/30'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-semibold">{category.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isVisible={isInView}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
