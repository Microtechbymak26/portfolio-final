'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Zap, Heart } from 'lucide-react';


const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing every pixel and millisecond for the best user experience possible.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Bringing genuine enthusiasm and dedication to every project I work on.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          I'm Muhammad Ateeb, a passionate Full-Stack Developer with expertise in modern web development and cross-platform solutions. I build seamless digital experiences that are responsive, scalable, and user-focused.

Alongside traditional web development, I'm actively exploring the power of Agentic AI — developing intelligent agents that automate tasks and solve real-world problems. My goal is to bring these smart systems into practical applications that improve everyday workflows and create real impact.

Whether it’s building web apps or integrating intelligent agents, I’m always striving to blend innovation with usability.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Expertise</h3>
            <p className="text-white/80 leading-relaxed text-lg">
            As a dedicated full-stack developer, I specialize in building modern, responsive web applications.
  My experience spans a wide range of frameworks and technologies, enabling me to choose the most effective
  tools for each project's unique requirements.

            </p>
            <p className="text-white/80 leading-relaxed text-lg">
            From crafting sleek frontends with React and Next.js to developing robust backends using Node.js and Sanity,
  I deliver end-to-end solutions that are scalable and efficient. My skillset also includes designing
  high-performance user interfaces and building clean, maintainable architectures tailored for growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-white/90">🌐 Web Development: React, Next.js, Vite</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span className="text-white/90">🎨 UI Styling: Tailwind CSS, Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-white/90">🧠 CMS: Sanity.io (Content Management)</span>
              </div>
              <div className="flex items-center space-x-3">
  <div className="w-2 h-2 bg-green-400 rounded-full" />
  <span className="text-white/90">🛠 Tools: Git, GitHub, Figma</span>
</div>

            </div>
            
          </motion.div>

          {/* Right Column - Avatar Block */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative"
>
  <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
    <img
      src="/images/hand.webp"
      alt="My Avatar"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>



        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white text-center mb-3">
                {feature.title}
              </h4>
              <p className="text-white/70 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
