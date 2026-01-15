import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Qualifications = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const qualificationsData = [
    {
      title: 'Professional Experience',
      content: `
      <ul class="list-disc list-inside space-y-2">
        <p><strong>EICTA Technologies</strong> | Founder, CEO & Software Engineer</strong></p>
        <p class="ml-4">23<sup>rd</sup> April, 2024 – Present</p>
        <li class="ml-4">Leads the development of scalable web and mobile applications, integrating modern technologies to meet diverse client needs.</li>
        <li class="ml-4">Oversees business strategy, project management, and client acquisition, driving the company’s growth and innovation.</li>
        <li class="ml-4">Engineers full-stack solutions using technologies like React, Node.js, Firebase, and Tailwind CSS for high-performance applications.</li>
      </ul> 
       <br />
      <hr />
       <br />
      <ul class="list-disc list-inside space-y-2">
        <p><strong>ShopLink Market </strong> | Visionary Founder & CEO</strong></p>
        <p class="ml-4">23<sup>rd</sup> May, 2025 – Present</p>
        <li class="ml-4">Leads product innovation and business growth, driving our mission to transform how communities connect and thrive through digital commerce.</li>
        <li class="ml-4">Oversees business strategy, and leading our mission to connect communities through digital commerce.</li>
        <li class="ml-4">Guides vision and operations, building digital solutions that connect people, products, and possibilities.</li>
        <li class="ml-4">Champions business strategy and user experience, committed to redefining digital commerce for everyday communities.</li>
        <li class="ml-4">Directs company growth and innovation, ensuring our platform meets the evolving needs of connected communities.</li>
      </ul>
       <br />
      <hr />
       <br />
      <ul class="list-disc list-inside space-y-2">
        <p><strong>Codveda Technologies </strong> | Web Development Intern</strong></p>
        <p class="ml-4">14<sup>th</sup> September, 2025 – 14<sup>th</sup> October, 2025</p>
        <li class="ml-4">Gained practical experience in front-end and back-end web development during a structured one-month internship.</li>
        <li class="ml-4">Assisted in building responsive and user-friendly web pages using HTML, CSS, JavaScript, and React.js.</li>
        <li class="ml-4">Collaborated on real-world projects, contributing to code development, testing, and deployment.</li>
        <li class="ml-4">Learned best practices in web development, version control with Git, and working in a professional development environment.</li>
        <li class="ml-4">Strengthened problem-solving skills by debugging, optimizing code, and implementing functional features.</li>
      </ul>
      `,
    },
    {
      title: 'Education',
      content: `
      <ul class="list-disc list-inside space-y-2">
        <p><strong>Zambia University College of Technology</strong></p>
        <p class="ml-4">Bachelor Degree, Software Engineering</p>
      </ul> <br />
       <ul class="list-disc list-inside space-y-2">
        <p><strong>Mungwi Boys' Provincial STEM Secondary School</strong></p>
        <p class="ml-4">High School, 2021 - 2023</p>
      </ul>
      `,
    },
    {
      title: 'Achievements',
      content: `
       <ul class="list-disc list-inside space-y-2">
        <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">2025 ZICTA ICT Innovation Program – Shortlisted Innovator</h2>
        <p>Selected among the top 100 candidates out of 500+ applicants for Zambia’s national ICT innovation program by ZICTA.</p>
        <br>
       <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">Tech Innovator Advocate 2024/2025</h2>
        <p>Encouraged aspiring Software Engineers / Developers to embrace new technologies and network for career growth.</p> 
        <br />
       <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">Motivational Speaker 2024</h2>
        <p>Inspired peers through talks on self-improvements, career goals, career development and staying motiavted as an individual.</p>
      `,
    },
    {
      title: 'Certifications',
      content: `
       <ul class="list-disc list-inside space-y-2">
        <li>Full-Stack Web Development – Udemy</li>
        <li>Graphic Design with Adobe PhotoShop and Adobe Illustrator – Udemy</li>
        <li>Web Design and Creation with WordPress – Shumba Training Center</li>
        <li>Nominee – Founder Of The Year Awards (FOYA)</li>
      </ul>
      `,
    },
    {
      title: 'Languages',
      content: `
       <ul class="list-disc list-inside space-y-2">
        <li><strong>English</strong>: Native</li>
        <li><strong>Bemba</strong>: Native</li>
        <li><strong>ChiNyanja</strong>: Fluent</li>
        <li><strong>ChiTumbuka</strong>: Conversational</li>
         </ul>
      `,
    },
  ];

  return (
    <section id="qualifications" className="min-h-screen bg-black py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Experience</span>
          <h2 className="section-title">My Qualifications</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {qualificationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left text-xl sm:text-2xl font-semibold text-white hover:bg-white/10 transition-colors"
                onClick={() => toggleSection(index)}
              >
                {item.title}
                <motion.span
                  animate={{ rotate: openSection === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-6 h-6" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 sm:p-6 border-t border-white/10 text-gray-300 text-base sm:text-lg"
                  >
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications; 