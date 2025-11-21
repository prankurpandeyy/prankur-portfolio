import { motion } from 'framer-motion';

const GlowBorder = ({ children, className = '', glowColor = 'coral' }) => {
  const glowColors = {
    coral: 'rgba(255, 107, 107, 0.5)',
    cyan: 'rgba(78, 205, 196, 0.5)',
    pink: 'rgba(255, 107, 107, 0.5)',
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${glowColors[glowColor] || glowColors.coral}, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowBorder;

