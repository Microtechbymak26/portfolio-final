'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'A Html Css Javascript eCommerce web app',
    repo: 'https://github.com/Microtechbymak26/amazon-clone-website',
    demo: 'https://amazon-clone-website-taupe.vercel.app/',
    image: '/images/amazon.png',
  },
  {
    title: 'BurgerBite Restaurant',
    description: 'Landing page for a food brand, responsive and modern design.',
    repo: 'https://github.com/Microtechbymak26/Burger-landing-page',
    demo: 'https://burger-landing-page-nu.vercel.app/',
    image: '/images/burger.webp',
  },
  {
    title: 'Avion Website',
    description: 'Elegant ecommerce site using modern frontend tools.',
    repo: 'https://github.com/Microtechbymak26/Avion-website',
    demo: 'https://avion-website-by-mak-developer-microtechbymak26s-projects.vercel.app/',
    image: '/images/avion.png',
  },
  {
    title: 'Blog Website of Cars',
    description: 'A modern blog with Sanity backend and Next.js 14 App Router.',
    repo: 'https://github.com/Microtechbymak26/Blog-Website',
    demo: 'https://assignment-8-6yzn.vercel.app/',
    image: '/images/blog.png',
  },
  {
    title: 'Online Learning Platform',
    description: 'A clean UI with interactive learning modules.',
    repo: 'https://github.com/Microtechbymak26/Online-Learning-Platform',
    demo: 'https://next-js-assignment-6-74md.vercel.app/',
    image: '/images/platform.jpeg',
  },
  {
    title: 'Secure Data Encryption System',
    description: 'A secure data vault built with Streamlit and Python encryption.',
    repo: 'https://github.com/Microtechbymak26/Secure-Data-Encryption-System',
    demo: 'https://secure-e.streamlit.app/',
    image: '/images/data.jpeg',
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects & Repositories
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md hover:scale-105 transition-all"
            >
              <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              <div className="flex items-center gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline text-sm"
                >
                  Live Demo →
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
