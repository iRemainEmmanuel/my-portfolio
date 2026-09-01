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
        <div class="space-y-8">

          <div>
            <p>
              <strong class="text-white">EICTA Technologies</strong> | Founder, CEO & Software Developer
            </p>
            <p class="ml-4 mt-1 text-gray-400">
              23<sup>rd</sup> April, 2024 – Present
            </p>

            <ul class="list-disc list-inside space-y-2 mt-4">
              <li class="ml-4">
                Founded and lead EICTA Technologies, a Software Development, IT & Business Solutions Company.
              </li>
              <li class="ml-4">
                Lead the development of websites, software, and digital solutions designed around real business needs.
              </li>
              <li class="ml-4">
                Oversee business strategy, project management, product development, and client relationships.
              </li>
              <li class="ml-4">
                Develop full-stack solutions using technologies including React, Next.js, Node.js, Firebase, Tailwind CSS, and databases.
              </li>
              <li class="ml-4">
                Help businesses adopt practical technology solutions that improve their digital presence, workflows, and operations.
              </li>
            </ul>
          </div>

          <hr class="border-white/10" />

          <div>
            <p>
              <strong class="text-white">ShopLink</strong> | Founder & Product Lead
            </p>
            <p class="ml-4 mt-1 text-gray-400">
              23<sup>rd</sup> May, 2025 – Present
            </p>

            <ul class="list-disc list-inside space-y-2 mt-4">
              <li class="ml-4">
                Building ShopLink, an Internet Marketplace Platform connecting customers with local businesses and sellers.
              </li>
              <li class="ml-4">
                Lead product vision, development, and direction across the ShopLink ecosystem.
              </li>
              <li class="ml-4">
                Design and develop digital products focused on helping businesses establish an online presence and connect with customers.
              </li>
              <li class="ml-4">
                Work across product architecture, user experience, features, integrations, and continuous product improvement.
              </li>
            </ul>
          </div>

          <hr class="border-white/10" />

          <div>
            <p>
              <strong class="text-white">Codveda Technologies</strong> | Web Development Intern
            </p>
            <p class="ml-4 mt-1 text-gray-400">
              14<sup>th</sup> September, 2025 – 14<sup>th</sup> October, 2025
            </p>

            <ul class="list-disc list-inside space-y-2 mt-4">
              <li class="ml-4">
                Gained practical experience working in a professional web development environment.
              </li>
              <li class="ml-4">
                Contributed to responsive web interfaces using HTML, CSS, JavaScript, and React.js.
              </li>
              <li class="ml-4">
                Participated in development, testing, debugging, and deployment activities.
              </li>
              <li class="ml-4">
                Strengthened practical skills in Git, collaboration, problem-solving, and modern development workflows.
              </li>
              <li class="ml-4">
                Worked on real-world development tasks while learning professional software development practices.
              </li>
            </ul>
          </div>

        </div>
      `,
    },

    {
      title: 'Education',
      content: `
        <div class="space-y-6">

          <div>
            <p>
              <strong class="text-white">Zambia University College of Technology</strong>
            </p>
            <p class="ml-4 mt-1 text-gray-400">
              Bachelor of Software Engineering | Currently Pursuing
            </p>
          </div>

          <div>
            <p>
              <strong class="text-white">Mungwi Boys' Provincial STEM Secondary School</strong>
            </p>
            <p class="ml-4 mt-1 text-gray-400">
              Secondary Education | 2021 – 2023
            </p>
          </div>

        </div>
      `,
    },

    {
      title: 'Achievements & Recognition',
      content: `
        <div class="space-y-6">

          <div>
            <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">
              2025 ZICTA ICT Innovation Program – Shortlisted Innovator
            </h2>
            <p class="mt-2">
              Selected among the top 100 candidates out of more than 500 applicants
              for Zambia's national ICT innovation program by ZICTA.
            </p>
          </div>

          <div>
            <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">
              Tech Innovator Advocate 2024/2025
            </h2>
            <p class="mt-2">
              Encouraged aspiring software developers to explore emerging technologies,
              develop their technical skills, and build meaningful professional connections.
            </p>
          </div>

          <div>
            <h2 style="font-weight: 600; font-size: 1.1rem; color: #fff;">
              Founder Of The Year Awards (FOYA) – Nominee
            </h2>
            <p class="mt-2">
              Recognized as a nominee for Founder Of The Year Awards in recognition
              of entrepreneurial work and efforts toward building technology-driven solutions.
            </p>
          </div>

        </div>
      `,
    },

    {
      title: 'Certifications & Training',
      content: `
        <ul class="list-disc list-inside space-y-3">
          <li>
            AI Software Development – Northrise University
          </li>
          <li>
            Full-Stack Web Development – Udemy
          </li>
          <li>
            Graphic Design with Adobe Photoshop, Adobe Illustrator and InDesign – Udemy
          </li>
          <li>
            Web Design and Creation with WordPress – Shumba Training Center
          </li>
          <li>
            Certificate in Theology – God of Covenant Bible Institute
          </li>
        </ul>
      `,
    },

    {
      title: 'Languages',
      content: `
        <ul class="list-disc list-inside space-y-3">
          <li>
            <strong>English</strong>: Native
          </li>
          <li>
            <strong>Bemba</strong>: Native
          </li>
          <li>
            <strong>ChiNyanja</strong>: Fluent
          </li>
          <li>
            <strong>ChiTumbuka</strong>: Conversational
          </li>
        </ul>
      `,
    },
  ];

  return (
    <section
      id="qualifications"
      className="min-h-screen bg-black py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            My Experience
          </span>

          <h2 className="section-title">
            My Qualifications
          </h2>

          <div className="section-title-underline"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">

          {qualificationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >

              <button
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left text-xl sm:text-2xl font-semibold text-white hover:bg-white/10 transition-colors"
                onClick={() => toggleSection(index)}
                aria-expanded={openSection === index}
              >
                {item.title}

                <motion.span
                  animate={{
                    rotate: openSection === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ChevronDownIcon className="w-6 h-6" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openSection === index && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="p-4 sm:p-6 border-t border-white/10 text-gray-300 text-base sm:text-lg"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
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