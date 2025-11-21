import { motion } from 'framer-motion';
import TermsAccordion from './TermsAccordion';
import { Github, Linkedin, Twitter, Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'MVP Development',
    'Technical Writing',
    'Documentation',
    'Consulting',
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-coral opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="glass-effect border-4 border-white/20 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let's discuss how I can help bring your vision to life. Book a free consultation call today.
            </p>
            <motion.a
              href="https://cal.com/prankurpandeyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-coral to-pink-500 text-white font-bold text-lg border-4 border-white/30 shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Prankur Pandeyy</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Full-stack developer and technical writer building the future,
              one line of code at a time.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { icon: Github, href: 'https://github.com/prankurpandeyy', label: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: Linkedin, href: 'https://linkedin.com/in/prankurpandeyy', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: 'https://x.com/prankurpandeyy', label: 'Twitter', color: 'hover:bg-black' },
                { icon: Mail, href: 'mailto:pprankur@gmail.com', label: 'Email', color: 'hover:bg-coral' },
                { icon: MessageCircle, href: 'https://wa.me/917580909961', label: 'WhatsApp', color: 'hover:bg-green-500' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-gray-800 border-2 border-gray-700 text-white ${social.color} transition-all rounded-lg`}
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-coral transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#pricing');
                    }}
                    className="text-gray-400 hover:text-coral transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <motion.a
                href="https://cal.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-coral font-bold hover:text-pink-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Terms and Conditions Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 pt-8 border-t border-gray-700"
        >
          <TermsAccordion />
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 pt-8 border-t border-gray-700"
        >
          <p>© 2024 Prankur Pandey. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with ❤️ using React, Framer Motion, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
