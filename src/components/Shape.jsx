import React from "react";
import { motion } from "framer-motion";

const Shape = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        className="drop-shadow-2xl"
      >
        {/* Horizontal grid lines */}
        {Array.from({ length: 16 }, (_, i) => (
          <motion.ellipse
            key={`h-${i}`}
            cx="160"
            cy="160"
            rx="140"
            ry={10 + i * 8}
            fill="none"
            stroke="#00aaff"
            strokeWidth="1"
            opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical grid lines */}
        {Array.from({ length: 16 }, (_, i) => (
          <motion.ellipse
            key={`v-${i}`}
            cx="160"
            cy="160"
            rx={10 + i * 8}
            ry="140"
            fill="none"
            stroke="#00aaff"
            strokeWidth="1"
            opacity="0.8"
            transform={`rotate(${i * 11.25} 160 160)`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center glow point */}
        <circle cx="160" cy="160" r="2" fill="#00aaff" opacity="0.9">
          <animate
            attributeName="r"
            values="2;4;2"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0.5;0.9"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.svg>
    </div>
  );
};

export default Shape;
