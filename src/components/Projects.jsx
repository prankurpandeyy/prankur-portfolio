import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import GlareCard from './GlareCard';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard. Built with modern web technologies for optimal performance and user experience.',
      results: 'Increased conversion rate by 35%',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Available on both web and mobile platforms.',
      results: 'Improved team productivity by 40%',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Developer Portfolio Builder',
      description: 'A customizable portfolio builder that allows developers to showcase their work with beautiful templates. Features include analytics, SEO optimization, and custom domains.',
      results: 'Helped 500+ developers land jobs',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'API Documentation Generator',
      description: 'An intelligent API documentation generator that automatically creates comprehensive, interactive documentation from code annotations. Supports multiple frameworks and formats.',
      results: 'Reduced documentation time by 60%',
      tags: ['Node.js', 'Express', 'Swagger'],
      link: '#',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-50 to-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
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
                Portfolio
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Projects That{' '}
              <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every project I build is designed to solve real problems, drive business growth,
              and exceed expectations. Here's a glimpse of what's possible.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlareCard className="group h-full">
                  <motion.div
                    className="bg-white border-4 border-black p-8 rounded-lg relative overflow-hidden h-full"
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient accent */}
                    <motion.div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold flex-1 group-hover:text-coral transition-colors">
                        {project.title}
                      </h3>
                      <motion.a
                        href={project.link}
                        className="text-coral hover:text-coral-dark transition-colors"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>

                    {/* Results badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-100 border-2 border-green-500 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Sparkles className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-bold text-green-800">{project.results}</span>
                    </motion.div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 border-2 border-black text-sm font-semibold rounded-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-coral font-bold group"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </motion.div>
                </GlareCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-effect border-4 border-black p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Your Next Project?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Let's discuss how I can help bring your vision to life with a solution
                that's scalable, maintainable, and built for success.
              </p>
              <motion.a
                href="https://cal.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gradient-to-r from-coral to-pink-500 text-white font-bold text-lg border-4 border-black shadow-2xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
