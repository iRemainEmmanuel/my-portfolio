import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full text-gray-400 hover:bg-[#00ff88] hover:text-black hover:shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 