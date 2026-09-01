import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  Cog6ToothIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const modalRef = useRef(null);

  const servicesData = [
    {
      icon: CodeBracketIcon,
      title: 'Software Development',
      description:
        'Developing custom software and digital products that solve specific business problems and improve how businesses operate.',
      details: `
Overview
I develop custom software and digital products designed around specific problems, workflows, and business requirements. The goal is to create practical systems that make work easier, improve efficiency, and provide room for future growth.

What’s Included
- Custom web-based software development
- Business management systems and dashboards
- SaaS and MVP development
- Database design and integration
- Authentication and user management
- API and third-party service integrations

What to Expect
- A solution designed around your requirements
- Scalable technical architecture
- Practical and user-friendly interfaces
- Development, testing, and deployment support
- A foundation that can evolve as your needs grow

Additional Info
Ideal for businesses, entrepreneurs, and founders looking to turn an idea, manual process, or business requirement into a functional digital product.`,
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Web Development',
      description:
        'Building modern, responsive websites and web applications that are fast, scalable, and designed around real business needs.',
      details: `
Overview
I build modern websites and web applications that are responsive, reliable, and tailored to real business and user needs. From business websites to SaaS platforms and MVPs, I focus on creating digital experiences that are practical, scalable, and easy to maintain.

What’s Included
- Responsive website and web application development
- Modern frontend development with React, Next.js, and Tailwind CSS
- Backend and database integration
- Firebase and third-party API integrations
- Performance optimization and SEO-friendly development
- Git-based development and modern deployment workflows

What to Expect
- A solution built around your specific goals
- Clean, maintainable, and scalable code
- Mobile-friendly and accessible interfaces
- Testing, debugging, and deployment support
- Guidance throughout the development process

Additional Info
Ideal for business websites, portfolios, landing pages, SaaS platforms, dashboards, and MVPs. Each project is built with usability, performance, and future growth in mind.`,
    },
    {
      icon: ServerStackIcon,
      title: 'IT Solutions',
      description:
        'Helping businesses implement practical technology solutions that improve their day-to-day operations, connectivity, and digital workflows.',
      details: `
Overview
I help businesses identify and implement practical technology solutions that support their everyday operations. This can include setting up digital tools, improving workflows, and helping businesses make better use of the technology they already have.

What’s Included
- Business technology setup and configuration
- Digital tools and software implementation
- Connectivity and network-related solutions
- System and workflow recommendations
- Technology troubleshooting and support
- Integration of tools used in day-to-day operations

What to Expect
- Practical solutions based on your actual needs
- Clear guidance without unnecessary complexity
- Technology recommendations suited to your goals and budget
- Support with implementation and setup
- Solutions focused on reliability and usability

Additional Info
Ideal for small businesses and organizations that need practical help with their technology, digital tools, systems, and everyday workflows.`,
    },
    {
      icon: Cog6ToothIcon,
      title: 'Business Automation',
      description:
        'Turning repetitive business processes into streamlined digital workflows that save time, reduce manual work, and improve efficiency.',
      details: `
Overview
I help businesses reduce repetitive manual work by turning everyday processes into streamlined digital workflows. From automating routine tasks to connecting different tools and systems, the focus is on making business operations simpler and more efficient.

What’s Included
- Workflow automation
- Digital forms and data collection
- Automated notifications and communication
- System and tool integrations
- Data organization and management
- Custom automation solutions for repetitive processes

What to Expect
- Identification of processes that can be improved
- Practical automation recommendations
- Workflows designed around how your business operates
- Reduced repetitive and manual tasks
- Solutions that can scale alongside your operations

Additional Info
Ideal for businesses that spend too much time on repetitive tasks, manual data entry, follow-ups, record keeping, or processes that could be handled more efficiently with technology.`,
    },
    {
  icon: DocumentCheckIcon,
  title: 'Business Registration & Compliance',
  description:
    'Helping entrepreneurs and businesses navigate registration and compliance processes so they can establish and operate their businesses with confidence.',
  details: `
Overview
I assist entrepreneurs and businesses with practical business registration and compliance processes, helping simplify the steps involved in formally establishing and maintaining a business.

What’s Included
- PACRA business registration assistance
- Business name and company registration guidance
- TPIN registration assistance
- Tax registration and compliance guidance
- NAPSA registration assistance
- General business compliance support

What to Expect
- Clear guidance through the registration process
- Assistance with required documentation
- Help understanding the steps and requirements
- Practical support from registration to compliance
- A simpler process without unnecessary confusion

Additional Info
Ideal for entrepreneurs, startups, and small businesses looking to formalize their operations or get help navigating business registration and basic compliance requirements. Services are provided as administrative and process assistance and do not constitute legal or tax advice.`,
},
  ];

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveService(null);
      }
    }

    if (activeService) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeService]);

  return (
    <section
      id="services"
      className="min-h-screen bg-black py-16 md:py-24 lg:py-32 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#00ff88] uppercase tracking-widest font-medium text-sm">
            What I Do
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Services
          </h2>

          <div className="mx-auto mt-2 w-20 h-1 bg-[#00ff88] rounded"></div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Practical digital solutions designed to help businesses work
            smarter, operate better, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-lg p-6 shadow-lg"
            >
              <div className="bg-[#00ff88]/10 p-4 rounded-full w-fit mx-auto mb-5">
                <service.icon className="h-8 w-8 text-[#00ff88]" />
              </div>

              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm text-center">
                {service.description}
              </p>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setActiveService(service)}
                  className="text-[#00ff88] text-sm font-medium underline hover:no-underline"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Layer */}
        {activeService && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="bg-[#111] max-w-3xl w-full p-6 sm:p-10 rounded-lg relative shadow-xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl"
                aria-label="Close"
              >
                &times;
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#00ff88]/10 p-3 rounded-full">
                  <activeService.icon className="w-7 h-7 text-[#00ff88]" />
                </div>

                <h3 className="text-2xl font-bold">
                  {activeService.title}
                </h3>
              </div>

              <pre className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                {activeService.details}
              </pre>

              <a
                href={`https://wa.me/260966271989?text=Hi%20Emmanuel%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(
                  activeService.title
                )}%20service.%20Can%20you%20tell%20me%20more%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00ff88] text-black px-5 py-2 rounded hover:bg-[#00ff88]/90 transition font-medium"
              >
                Get Started on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;