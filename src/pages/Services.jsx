import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  DeviceTabletIcon,
  PaintBrushIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const modalRef = useRef(null);

  const servicesData = [
    {
      icon: WrenchScrewdriverIcon,
      title: 'Web Development',
      description: 'Building responsive and scalable websites and applications using contemporary technologies to ensure robust performance and maintainability.',
      details: `
Overview
I build fast, responsive, and scalable websites and web apps tailored to your needs. Whether you're an entrepreneur, business, or personal brand, I help bring your digital vision to life.

What’s Included
- Full-stack development with React, Next.js, Tailwind, Supabase, Node.js
- Mobile-friendly, accessible interfaces
- Integration with Firebase, third-party APIs, and CMS platforms
- Performance optimization and SEO-friendly code
- Git-based collaboration & modern workflows

What to Expect
- Custom UI/UX design and consultation
- Scalable architecture from day one
- Testing, debugging, and deployment setup
- Ongoing support and guidance post-launch

Additional Info
Ideal for portfolios, business sites, SaaS apps, and MVPs. Every site is tailored, clean-coded, and designed to grow with your brand.`,
    },
    {
      icon: DeviceTabletIcon,
      title: 'IT Consulting',
      description: 'Providing strategic technical guidance to facilitate effective digital transformation and optimize technology solutions.',
      details: `
Overview
I offer personalized technical consulting services to help individuals, startups, and growing businesses make the right digital decisions.

What’s Included
- Systems design & technical architecture
- Tech stack selection based on goals and budget
- Cloud infrastructure recommendations (e.g., AWS, Vercel, Supabase)
- Team structuring, tooling, and best practices
- Cybersecurity and data handling consultations

What to Expect
- 1-on-1 consultation calls (Zoom or WhatsApp)
- Clear, jargon-free recommendations
- Documentation & tech roadmap
- Follow-up support as needed

Additional Info
Best for founders, non-tech entrepreneurs, or teams scaling digital operations. I simplify the complex and provide real-world solutions you can act on.`,
    },
    {
      icon: SparklesIcon,
      title: 'Branding Consultation',
      description: 'Defining and refining brand identity, messaging, and positioning to establish a consistent and impactful market presence.',
      details: `
Overview
Strong branding helps you connect with your audience. I help you clarify and refine your brand voice, visuals, and message for consistency across platforms.

What’s Included
- Brand audit: logo, colors, typography, voice
- Visual identity system & moodboard creation
- Messaging refinement for clarity and consistency
- Brand style guide recommendations
- Competitive landscape review

What to Expect
- Deep-dive session about your brand goals
- Visual references and alignment feedback
- Suggestions you can implement or have me design

Additional Info
Ideal for small businesses, influencers, and creatives looking to upgrade their online presence and build audience trust through a consistent identity.`,
    },
    {
      icon: ChatBubbleLeftEllipsisIcon,
      title: 'Social Media Management',
      description: 'Delivering strategic oversight and execution of social media initiatives to enhance brand visibility and audience engagement.',
      details: `
Overview
I manage your social media presence to build engagement, grow reach, and keep your brand voice consistent.

What’s Included
- Content planning and post scheduling
- Captions, hashtags, and branded templates
- Graphic creation and reels/snippets (as needed)
- Monthly performance reporting
- Engagement and inbox management (on request)

What to Expect
- Strategy session to understand your goals
- Calendar-based scheduling for consistency
- Transparent results tracking

Additional Info
This service is great for solopreneurs, brands, churches, and creators. Let me handle the content so you can focus on your mission.`,
    },
//     {
//       icon: PaintBrushIcon,
//       title: 'Graphic Design',
//       description: 'Designing impactful graphics and brand materials for digital and print to enhance brand communication and presence.',
//       details: `
// Overview
// I provide custom graphics that represent your brand beautifully — both digitally and in print.

// What’s Included
// - Logo design and brand assets
// - Social media post templates
// - Event flyers, posters, brochures
// - Presentation/pitch deck design
// - Web graphics, banners, and thumbnails

// What to Expect
// - Collaborative design process with feedback loops
// - High-resolution and web-optimized exports
// - Source files on delivery (if requested)

// Additional Info
// I design with strategy and intention — not just aesthetics. Every piece aims to represent your values and connect with your audience effectively.`,
//     },
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
    <section id="services" className="min-h-screen bg-black py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#00ff88] uppercase tracking-widest font-medium text-sm">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">My Services</h2>
          <div className="mx-auto mt-2 w-20 h-1 bg-[#00ff88] rounded"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm passionate about helping businesses and individuals bring their visions to life through beautiful, functional, and user-friendly digital experiences.
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
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center">{service.description}</p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setActiveService(service)}
                  className="text-[#00ff88] text-sm font-medium underline hover:no-underline"
                >
                  See More
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
              >
                &times;
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#00ff88]/10 p-3 rounded-full">
                  <activeService.icon className="w-7 h-7 text-[#00ff88]" />
                </div>
                <h3 className="text-2xl font-bold">{activeService.title}</h3>
              </div>
              <pre className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                {activeService.details}
              </pre>
              <a
                href={`https://wa.me/260966271989?text=Hi%20Emmanuel%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(activeService.title)}%20service.%20Can%20you%20tell%20me%20more%3F`}
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
