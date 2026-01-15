import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 'portfolio-1',
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills, built with React.js and Framer Motion for smooth animations.',
      image: '/images/project1.png',
      technologies: ['React.js', 'Node.js','Tailwind CSS', 'Framer Motion'],
      github: '',
      live: 'https://mwambae.vercel.app',
      category: 'Web',
    },
    {
      id: 'portfolio-2',
      title: 'EICTA Technologies',
      description: 'A professional corporate website showcasing EICTA Technologies services, expertise, and client success stories. Built with React.js and Node.js for optimal performance.',
      image: '/images/project2.png',
      technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
      github: '',
      live: 'https://eictatechnologies.vercel.app',
      category: 'Web',
    },
     {
      id: 'portfolio-3',
      title: 'Church',
      description: 'A modern, spiritually engaging website designed for churches and ministries. Fully customizable to suit any congregation’s needs, it showcases sermons, events, ministries, and more. Built with React.js and Node.js to ensure smooth performance, accessibility, and a strong online presence for reaching believers globally. — And it’s available for sale and easy to personalize.',
      image: '/images/project3.png',
      technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
      github: '',
      live: 'https://church-emma.vercel.app',
      category: 'Web',
    },
      {
      id: 'portfolio-4',
      title: 'ShopLink Market',
      description: 'An innovative and user-friendly multi-vendor e-commerce platform built for seamless online shopping. ShopLink Market connects buyers and sellers with ease, offering a smooth browsing experience, product showcases, and secure transactions. Developed with React.js and Node.js to ensure fast performance, scalability, and global accessibility. — Still under development.',
      image: '/images/project4.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Firestore Database', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Axios', 'React Context', 'React Hooks'],
      github: '',
      live: '',
      category: ['Web', 'App'],
    },
     {
      id: 'portfolio-5',
      title: 'ShopLink Lite',
      description: 'A simple, powerful platform designed to help small businesses create their online presence and connect with customers through WhatsApp.',
      image: '/images/project5.png',
      technologies: ['React', 'Node.js', 'Firesrore  Database', 'React Router', 'Axios', 'React Context', 'React Hooks','Tailwind CSS'],
      github: '',
      live: 'www.shoplink-lite.store',
      category: ['Web', 'App']
    },
    {
      id: 'portfolio-6',
      title: 'Creative Studios / Photographers',
      description: 'A sleek, fully customizable website crafted for photographers and creative studios. Designed to beautifully showcase photo galleries, services, and contact options. Built with HTML, CSS, Bootstrap, and JavaScript for responsive performance and client-focused flexibility. — And it’s available for sale and easy to personalize.',
      image: '/images/project6.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: '',
      live: '',
      // live: 'https://emma-photofolio-studio.vercel.app',
      category: 'Web',
    },
    {
      id: 'portfolio-7',
      title: 'Construction Company',
      description: 'A professional and fully customizable website tailored for construction companies. Designed to showcase services, past projects, team profiles, and client testimonials with clarity and impact. Built with HTML, CSS, Bootstrap, and JavaScrip to ensure responsive design, fast performance, and easy customization. Perfect for any construction or engineering business needs. — And it’s available for sale and easy to personalize.',
      image: '/images/project7.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: '',
      live: '',
      category: 'Web',
    },
    // {
    //   id: 'portfolio-8',
    //   title: 'Website for a Church, *For Sale*',
    //   description: 'A modern and spiritually engaging website designed for a church community. Showcasing the ministry, sermons, and events. Built with React and Node.js for seamless performance, accessibility, and connection with believers worldwide.',
    //   image: '/images/project3.png',
    //   technologies: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
    //   github: '',
    //   live: 'https://church-emma.vercel.app',
    //   category: 'Web',
    // },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') {
      return true;
    }
    return Array.isArray(project.category)
  ? project.category.includes(filter)
  : project.category === filter;
  });

  return (
    <section id="projects" className="min-h-screen bg-black py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Projects</span>
          <h2 className="section-title">Developer Portfolio</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Web', 'App', /*'Other'*/].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                filter === cat ? 'bg-[#00ff88] text-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg overflow-hidden group h-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mx-2"
                  >
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mx-2"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs sm:text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 