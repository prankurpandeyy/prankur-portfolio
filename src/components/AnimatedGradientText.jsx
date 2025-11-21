import { motion } from 'framer-motion';

const AnimatedGradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FF6B6B 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '100% center', '0% center'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedGradientText;

