import { motion } from 'framer-motion';

const AnimatedGradientBorder = ({ children, className = '', borderWidth = 4 }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          padding: `${borderWidth}px`,
          background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #FF6B6B)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute inset-0 bg-white rounded-lg" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradientBorder;

