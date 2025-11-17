import { motion } from 'framer-motion';
import { Code, Smartphone, FileText, BarChart3, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web and Mobile App Development',
      description: 'Building modern, scalable web applications with MERN stack and React Native for cross-platform mobile development. Creating responsive, user-friendly experiences for both web and mobile platforms.',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-200',
      borderColor: 'border-pink-300',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Technical Writing',
      description: 'Creating comprehensive documentation, tutorials, and technical articles that make complex concepts accessible. Specializing in developer-focused content for platforms like Dev.to and FreeCodeCamp.',
      bgColor: 'bg-amber-100',
      iconBg: 'bg-amber-200',
      borderColor: 'border-amber-300',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Data Analysis',
      description: 'Analyzing complex datasets using Python and modern data processing tools. Extracting actionable insights and presenting findings through clear visualizations and comprehensive reports.',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-200',
      borderColor: 'border-blue-300',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'DevOps Work',
      description: 'Streamlining development workflows with AWS cloud infrastructure, CI/CD pipelines, Docker containerization, and automated deployments. Ensuring scalable, reliable, and efficient systems.',
      bgColor: 'bg-cyan-100',
      iconBg: 'bg-cyan-200',
      borderColor: 'border-cyan-300',
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`${skill.bgColor} border-4 border-black p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${skill.iconBg} opacity-20 transform rotate-45 translate-x-8 -translate-y-8 group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`${skill.iconBg} border-4 border-black p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-gray-900">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  {skill.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
