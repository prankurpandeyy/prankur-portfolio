import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, FileText, BookOpen, Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "MVP Development",
      price: "$1100",
      period: "Starting at",
      bgColor: "bg-gradient-to-br from-pink-100 to-rose-200",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
      features: [
        "Full-stack web/mobile application",
        "Responsive design (mobile-first)",
        "User authentication & authorization",
        "Database design & integration",
        "End-to-end testing",
        "Deployment & hosting setup",
        "4-6 weeks delivery timeline",
        "1 month post-launch support",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Technical Blog",
      price: "$500",
      period: "Per article",
      bgColor: "bg-gradient-to-br from-amber-100 to-yellow-200",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
      features: [
        "3000-6000 words comprehensive content",
        "SEO optimized for maximum reach",
        "Code examples & snippets included",
        "Original research & insights",
        "1 week delivery guarantee",
        "2 rounds of revisions included",
        "Social media promotion support",
        "Performance analytics report",
      ],
      popular: true,
      cta: "Order Now",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Technical Documentation",
      price: "$1200",
      period: "Starting at",
      bgColor: "bg-gradient-to-br from-cyan-100 to-teal-200",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
      features: [
        "Complete API documentation",
        "User guides & tutorials",
        "Developer onboarding docs",
        "Interactive code examples",
        "Unlimited revisions included",
        "Ongoing maintenance & updates",
        "Multi-format export (PDF, HTML, MD)",
        "Version control integration",
      ],
      popular: false,
      cta: "Get Started",
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
    <section id="pricing" className="relative py-20 bg-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200 opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
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
          animate={inView ? "visible" : "hidden"}
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
                Pricing
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Transparent Pricing,{' '}
              <span className="gradient-text">No Surprises</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the service that fits your needs. All packages include free consultation,
              clear timelines, and ongoing support. Custom packages available upon request.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <span className="bg-gradient-to-r from-coral to-pink-500 text-white border-2 border-black px-4 py-1 font-bold text-sm uppercase shadow-lg">
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <motion.div
                  className={`${plan.bgColor} border-4 border-black p-8 rounded-lg flex flex-col h-full relative overflow-hidden ${
                    plan.popular ? 'shadow-2xl scale-105' : ''
                  }`}
                  whileHover={{ y: -8, scale: plan.popular ? 1.08 : 1.02, rotateY: 2, rotateX: 2 }}
                  style={{ perspective: 1000 }}
                  transition={{ duration: 0.3 }}
                >
                    {/* Decorative element */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 ${plan.iconBg} opacity-10 rounded-full blur-2xl`}
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
                        className={`${plan.iconBg} border-4 border-black p-4 w-fit mb-6 rounded-lg`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-white">{plan.icon}</div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.period}</p>

                      {/* Price */}
                      <div className="mb-6">
                        <span className="text-5xl md:text-6xl font-bold gradient-text">
                          {plan.price}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
                          >
                            <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.a
                        href="https://cal.com/prankurpandeyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center px-6 py-4 font-bold border-4 border-black transition-all ${
                          plan.popular
                            ? 'bg-gradient-to-r from-coral to-pink-500 text-white shadow-xl'
                            : 'bg-white text-black hover:bg-coral hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {plan.cta}
                          <ArrowRight className="w-4 h-4" />
                        </span>
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
            className="text-center"
          >
            <div className="glass-effect border-4 border-black p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Every project is unique. Let's discuss your specific requirements
                and create a custom package tailored to your needs and budget.
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
                  Schedule a Free Consultation
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

export default Pricing;
