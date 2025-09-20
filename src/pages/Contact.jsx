import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Let Formspree handle the submission
      const form = e.target;
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Reset form after submission
        setFormData({
          name: '',
          subject: '',
          email: '',
          message: ''
        });
        alert('Message sent successfully! I will get back to you soon.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'Shoot Me An Email',
      icon: EnvelopeIcon,
      link: 'mailto:mwambaemmanuel005@gmail.com'
    },
    {
      title: 'Phone',
      value: '+260966271989',
      icon: PhoneIcon,
      link: 'https://wa.me/260966271989?text=Hello%20Emmanuel%2C%20may%20I%20know%20more%20about%20your%20services',
    },
    {
      title: 'Location',
      value: 'Ndola, Zambia',
      icon: MapPinIcon,
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/emmanuel-mwamba-677186301/'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/emmanuel_graceovermoney/'
    },
    {
      name: 'Facebook',
      icon: faFacebookF,
      url: 'https://www.facebook.com/emmanuelmwambagraceovermoneyofficial'
    },
    {
      name: 'X',
      icon: faXTwitter,
      url: 'https://x.com/EM_GOM_'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact Me</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-2 sm:space-y-3">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 sm:gap-3 group"
                  >
                    <div className="p-2 sm:p-3 bg-[#00ff88]/10 rounded-lg group-hover:bg-[#00ff88]/20 transition-colors">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold mb-0.5">{info.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-2 sm:p-3 bg-[#00ff88]/10 rounded-lg hover:bg-[#00ff88]/20 transition-colors"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ff88]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Send Me a Message</h3>
            <form 
              action="https://formspree.io/f/xqaqjgjy" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-3 sm:space-y-4"
            >
              <input type="hidden" name="_replyto" value="mwambaemmanuel005@gmail.com" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Emmanuel Dennis'
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff88] text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff88] text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Your email'
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff88] text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='Your message goes here'
                  rows="4"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff88] text-white text-sm sm:text-base resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 