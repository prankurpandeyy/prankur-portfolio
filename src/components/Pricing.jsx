import { motion } from 'framer-motion';
import { Code, FileText, BookOpen } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'MVP Development',
      price: '$900',
      bgColor: 'bg-pink-100',
      features: [
        'Full-stack web application',
        'Responsive design',
        'Basic authentication',
        'Database integration',
        '2 weeks delivery',
        '1 month support',
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Technical Blog',
      price: '$500',
      bgColor: 'bg-amber-100',
      features: [
        '2000-3000 words',
        'SEO optimized',
        'Code examples included',
        'Original research',
        '1 week delivery',
        '2 revisions included',
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Technical Documentation',
      price: '$1000',
      bgColor: 'bg-cyan-100',
      features: [
        'Complete API docs',
        'User guides',
        'Developer tutorials',
        'Interactive examples',
        'Unlimited revisions',
        'Ongoing maintenance',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services & Pricing
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${plan.bgColor} border-4 border-black p-8 hover:shadow-2xl transition-all duration-300 flex flex-col`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-white border-2 border-black p-4 w-fit mb-6">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-coral">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-coral mr-2 font-bold">✓</span>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className="block text-center px-6 py-4 bg-coral text-white font-bold border-4 border-black hover:bg-coral-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
