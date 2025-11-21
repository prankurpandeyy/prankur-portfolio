import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    // MERN Stack
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express', icon: '🚂', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'JavaScript', icon: '📜', category: 'Language' },
    
    // Python
    { name: 'Python', icon: '🐍', category: 'Language' },
    
    // DevOps & AWS
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'CI/CD', icon: '🔄', category: 'DevOps' },
    { name: 'Jenkins', icon: '🤖', category: 'DevOps' },
    
    // GitHub
    { name: 'GitHub', icon: '🐙', category: 'Tools' },
    { name: 'GitHub Actions', icon: '⚡', category: 'DevOps' },
    
    // React Native
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Android', icon: '🤖', category: 'Mobile' },
    
    // Technical Writing
    { name: 'Markdown', icon: '📝', category: 'Writing' },
    { name: 'Documentation', icon: '📚', category: 'Writing' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-coral to-cyan-400 text-white border-2 border-black px-6 py-2 font-bold uppercase tracking-wide">
                Technologies
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Tools & Technologies I{' '}
              <span className="gradient-text">Master Daily</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I work with cutting-edge technologies to build modern, scalable solutions.
              From frontend frameworks to cloud infrastructure, I've got you covered.
            </p>
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.05, rotateY: 5, rotateX: 5 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="bg-white border-4 border-black p-6 text-center group cursor-pointer relative overflow-hidden h-full"
                  whileTap={{ scale: 0.95 }}
                >
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-coral/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                        animate={inView ? {
                          rotate: [0, 5, -5, 0],
                        } : {}}
                        transition={{
                          delay: 0.5 + index * 0.05,
                          duration: 0.5,
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <div className="text-sm font-bold text-gray-800 mb-1">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg">
              <span className="font-bold">Always learning:</span> I stay updated with the latest
              technologies and best practices to deliver cutting-edge solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
