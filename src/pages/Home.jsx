import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative" aria-label="Home">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-10" />
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center opacity-20"
          role="presentation"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <header className="section-header">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="section-tag"
            >
              Hello World!
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title"
            >
              I'm <span className="text-[#00ff88]">Emmanuel</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="section-title-underline"
              aria-hidden="true"
            ></motion.div>
          </header>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-300 mb-8"
          >
            A passionate Software Engineering Student, Full Stack Web Developer and Aspiring Full Stack Engineer crafting beautiful and functional web experiences
          </motion.h2>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Main navigation"
          >
            <a href="#contact" className="btn-primary" aria-label="Get in touch">
              Get in Touch
            </a>
            <a href="#projects" className="btn-secondary" aria-label="View my work">
              View My Work
            </a>
          </motion.nav>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#00ff88] transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDownIcon className="w-6 h-6 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
};

export default Home; 