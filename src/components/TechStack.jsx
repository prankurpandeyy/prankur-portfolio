import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    // MERN Stack
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'JavaScript', icon: '📜' },
    
    // Python
    { name: 'Python', icon: '🐍' },
    
    // DevOps & AWS
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Jenkins', icon: '🤖' },
    
    // GitHub
    { name: 'GitHub', icon: '🐙' },
    { name: 'GitHub Actions', icon: '⚡' },
    
    // React Native
    { name: 'React Native', icon: '📱' },
    { name: 'Android', icon: '🤖' },
    
    // Technical Writing
    { name: 'Markdown', icon: '📝' },
    { name: 'Documentation', icon: '📚' },
  ];

  return (
    <section className="py-16 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mb-2"></div>
          <p className="text-gray-600 text-lg">Technologies I work with daily</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="bg-white border-2 border-black p-4 text-center hover:shadow-lg hover:border-coral transition-all cursor-pointer group"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-sm font-semibold text-gray-800">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
