'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MonogramLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Sequence 01 specification: Never block beyond 1.2s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="ceiue-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.2, 0, 0, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07111F] text-white pointer-events-none"
        >
          <div className="flex flex-col items-center text-center px-6">
            {/* Animated CEIUE Monogram SVG with gold line-draw */}
            <svg
              className="w-24 h-24 mb-6 text-[#C7A45D]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer sovereign geometric crest */}
              <motion.polygon
                points="50,6 92,28 92,72 50,94 8,72 8,28"
                stroke="#C7A45D"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              {/* Inner geometric lines connecting African horizons */}
              <motion.path
                d="M50 20 L50 80 M28 35 L72 35 M28 65 L72 65"
                stroke="#E1C783"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              />
              {/* Central golden core */}
              <motion.circle
                cx="50"
                cy="50"
                r="4.5"
                fill="#C7A45D"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              />
            </svg>

            {/* CEIUE Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="tracking-[0.25em] font-serif text-2xl text-[#FBF8F1] uppercase font-medium"
            >
              CEIUE
            </motion.div>

            {/* Baseline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-[#C7A45D]"
            >
              Ingénierie universitaire stratégique
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
