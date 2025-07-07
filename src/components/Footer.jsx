'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-5 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-white/60"
        >
          &copy; {new Date().getFullYear()} Ateeb Kashif. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-5"
        >
          <a
            href="https://github.com/Microtechbymak26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ateeb269/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:usubka786@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
