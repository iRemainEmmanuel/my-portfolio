import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the component is in view

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const incrementTime = 50; // milliseconds

      const timer = setInterval(() => {
        start += target / (duration / incrementTime);
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.round(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
};

export default Counter; 