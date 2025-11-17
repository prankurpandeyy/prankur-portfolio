import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard. Built with modern web technologies for optimal performance and user experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Available on both web and mobile platforms.',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      title: 'Developer Portfolio Builder',
      description: 'A customizable portfolio builder that allows developers to showcase their work with beautiful templates. Features include analytics, SEO optimization, and custom domains.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'API Documentation Generator',
      description: 'An intelligent API documentation generator that automatically creates comprehensive, interactive documentation from code annotations. Supports multiple frameworks and formats.',
      tags: ['Node.js', 'Express', 'Swagger'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-4 border-black p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  {project.title}
                  <a
                    href={project.link}
                    className="text-coral hover:text-coral-dark transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 border-2 border-black text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
