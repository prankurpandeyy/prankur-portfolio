import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, FileText, BarChart3, Cloud, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web & Mobile App Development',
      description: 'I build scalable, high-performance applications using the MERN stack and React Native. From MVPs to enterprise solutions, I deliver code that\'s clean, maintainable, and ready to scale.',
      benefits: ['Fast time-to-market', 'Scalable architecture', 'Cross-platform mobile apps'],
      bgColor: 'bg-gradient-to-br from-pink-100 to-rose-200',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      borderColor: 'border-pink-400',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Technical Writing & Documentation',
      description: 'I transform complex technical concepts into clear, engaging content. My documentation helps teams onboard faster, reduces support tickets, and improves developer experience.',
      benefits: ['SEO-optimized content', 'Developer-friendly docs', 'Reduced support overhead'],
      bgColor: 'bg-gradient-to-br from-amber-100 to-yellow-200',
      iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
      borderColor: 'border-amber-400',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Data Analysis & Insights',
      description: 'I turn raw data into actionable insights using Python and modern analytics tools. Help your team make data-driven decisions that drive growth and optimize performance.',
      benefits: ['Actionable insights', 'Clear visualizations', 'Performance optimization'],
      bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      borderColor: 'border-blue-400',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'DevOps & Cloud Infrastructure',
      description: 'I streamline your development workflow with AWS, Docker, and CI/CD pipelines. Deploy faster, scale effortlessly, and maintain reliable systems that your team can count on.',
      benefits: ['Automated deployments', 'Scalable infrastructure', 'Reduced downtime'],
      bgColor: 'bg-gradient-to-br from-cyan-100 to-teal-200',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      borderColor: 'border-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 bg-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-pink-200 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
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
                What I Do Best
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Services That{' '}
              <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I don't just deliver code—I deliver solutions that solve real business problems,
              reduce costs, and accelerate growth.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02, rotateY: 2, rotateX: 2 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`${skill.bgColor} border-4 border-black p-8 rounded-lg relative overflow-hidden group h-full`}
                  transition={{ duration: 0.3 }}
                >
                    {/* Animated background element */}
                    <motion.div
                      className={`absolute top-0 right-0 w-40 h-40 ${skill.iconBg} opacity-10 rounded-full blur-2xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`${skill.iconBg} border-4 border-black p-4 w-fit mb-6 rounded-lg`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-white">
                          {skill.icon}
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                        {skill.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {skill.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {skill.benefits.map((benefit, idx) => (
                          <motion.div
                            key={benefit}
                            className="flex items-center gap-2 text-gray-800"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.15 + idx * 0.1 }}
                          >
                            <div className={`w-2 h-2 rounded-full ${skill.iconBg}`} />
                            <span className="font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href="https://cal.com/prankurpandeyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all group"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://cal.com/prankurpandeyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-coral to-pink-500 text-white font-bold text-lg border-4 border-black shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Ready to Get Started?
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
