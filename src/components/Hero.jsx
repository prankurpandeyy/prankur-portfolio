import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 overflow-hidden particle-bg border-b-4 border-black"
    >
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-coral opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8"
          >
            <motion.span
              className="bg-gradient-to-r from-coral to-cyan-400 text-white border-2 border-black px-6 py-3 font-bold uppercase tracking-wide shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{
                boxShadow: [
                  '0 10px 20px rgba(255, 107, 107, 0.3)',
                  '0 15px 30px rgba(78, 205, 196, 0.4)',
                  '0 10px 20px rgba(255, 107, 107, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Available for Projects
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="block">Turn Your Vision Into</span>
            <span className="block gradient-text animate-gradient">
              Digital Reality
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-700">
              Full-Stack Developer & Technical Writer
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4"
          >
            I don't just write code—I craft solutions that{' '}
            <span className="font-bold text-coral">drive revenue</span>,{' '}
            <span className="font-bold text-cyan-500">scale effortlessly</span>, and{' '}
            <span className="font-bold text-purple-500">delight users</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          >
            From MVP development to technical documentation, I help ambitious founders and teams
            ship products faster, document better, and scale smarter. Ready to build something extraordinary?
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.a
              href="https://cal.com/prankurpandeyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-coral to-pink-500 text-white font-bold text-lg border-4 border-black shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-coral"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#projects"
              className="px-10 py-5 bg-white text-black font-bold text-lg border-4 border-black shadow-2xl hover:bg-gray-50 transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects Delivered', icon: '🚀' },
              { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Support Available', icon: '💬' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect p-6 rounded-lg border-2 border-black"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-coral rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
