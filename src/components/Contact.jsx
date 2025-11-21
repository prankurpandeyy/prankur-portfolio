import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mail, MessageCircle, MapPin, Github, Linkedin, Twitter, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-coral opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400 opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
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
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-coral to-cyan-400 text-white border-2 border-black px-6 py-2 font-bold uppercase tracking-wide">
                Let's Connect
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Something{' '}
              <span className="gradient-text">Extraordinary?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Skip the back-and-forth emails. Book a free strategy call and let's discuss how I can help
              turn your vision into a reality. No pressure, just a conversation about your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Cal.com Booking */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Main CTA Card */}
              <motion.div
                className="glass-effect border-4 border-black p-8 rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-coral to-pink-500 p-4 rounded-lg border-2 border-black">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Book a Strategy Call</h3>
                    <p className="text-gray-600">15-30 minutes • Free consultation</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  During our call, we'll discuss:
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Your project goals and vision',
                    'Technical requirements and timeline',
                    'How I can help you succeed',
                    'Next steps to get started',
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="https://cal.com/prankurpandeyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full px-8 py-5 bg-gradient-to-r from-coral to-pink-500 text-white font-bold text-lg border-4 border-black shadow-xl text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule Your Free Call Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  ⚡ Usually responds within 24 hours
                </p>
              </motion.div>

              {/* Benefits Card */}
              <motion.div
                className="bg-gradient-to-br from-cyan-50 to-blue-50 border-4 border-black p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  Why Book a Call?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Get personalized advice for your project</li>
                  <li>✓ Discuss pricing and timeline upfront</li>
                  <li>✓ See if we're a good fit before committing</li>
                  <li>✓ Get answers to all your questions</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  className="glass-effect border-2 border-black p-6 rounded-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-coral p-3 rounded-lg border-2 border-black">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <a
                        href="mailto:pprankur@gmail.com"
                        className="text-coral hover:underline"
                      >
                        pprankur@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-effect border-2 border-black p-6 rounded-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-green-500 p-3 rounded-lg border-2 border-black">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">WhatsApp</h4>
                      <a
                        href="https://wa.me/917580909961"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral hover:underline"
                      >
                        +91-7580909961
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-effect border-2 border-black p-6 rounded-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500 p-3 rounded-lg border-2 border-black">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Location</h4>
                      <p className="text-gray-600">Available Worldwide (Remote)</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                className="glass-effect border-2 border-black p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <h4 className="font-bold text-lg mb-4">Connect on Social Media</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/prankurpandeyy', label: 'GitHub', color: 'bg-gray-900' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/prankurpandeyy', label: 'LinkedIn', color: 'bg-blue-600' },
                    { icon: Twitter, href: 'https://x.com/prankurpandeyy', label: 'Twitter', color: 'bg-black' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-lg border-2 border-black font-bold hover:scale-110 transition-transform`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                className="bg-gradient-to-r from-coral/10 to-cyan-400/10 border-4 border-black p-6 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-gray-600 mb-2">💼 Currently Available For</p>
                <p className="text-2xl font-bold gradient-text">
                  New Projects & Collaborations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
