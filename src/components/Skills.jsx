import { motion } from 'framer-motion';
import { Code, Smartphone, FileText, Settings } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'MERN Stack Development',
      description: 'Building robust full-stack applications with MongoDB, Express, React, and Node.js. Creating scalable RESTful APIs and modern user interfaces.',
      bgColor: 'bg-pink-100',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'React Native',
      description: 'Developing cross-platform mobile applications with React Native. Delivering native performance with a single codebase for iOS and Android.',
      bgColor: 'bg-cyan-100',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Technical Writing',
      description: 'Creating comprehensive documentation, tutorials, and technical articles. Making complex concepts accessible to developers of all levels.',
      bgColor: 'bg-amber-100',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'DevOps',
      description: 'Streamlining development workflows with CI/CD pipelines, containerization, and cloud infrastructure. Ensuring reliable deployments.',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Do Best
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${skill.bgColor} border-4 border-black p-8 hover:shadow-2xl transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white border-2 border-black p-3 flex-shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
