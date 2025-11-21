import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';
import GlareCard from './GlareCard';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      company: 'TechVentures',
      content: 'Prankur delivered an exceptional MVP that exceeded our expectations. The code quality and attention to detail were outstanding. Highly recommended!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Inc',
      content: 'The technical documentation Prankur created for our API was comprehensive and developer-friendly. It significantly reduced our onboarding time.',
      rating: 5,
      image: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'CloudScale',
      content: 'Working with Prankur was a breeze. He understood our requirements quickly and delivered a scalable solution that we continue to use today.',
      rating: 5,
      image: '👩‍💼',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-br from-gray-50 to-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-amber-200 opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
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
                Testimonials
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              What Clients{' '}
              <span className="gradient-text">Say About Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what clients have to say about working with me.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <GlareCard className="group">
                  <motion.div
                    className="bg-white border-4 border-black p-8 rounded-lg h-full relative overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                    >
                      <Quote className="w-12 h-12 text-coral" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.15 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

