import { motion } from 'framer-motion';
import TermsAccordion from './TermsAccordion';
import { Github, Linkedin, Twitter, Mail, MessageCircle } from 'lucide-react';

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
    'Contact',
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">DEV.PORTFOLIO</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Building the future, one line of code at a time.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <motion.a
                href="https://github.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 border-2 border-gray-700 text-white hover:bg-coral hover:border-coral transition-all rounded"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 border-2 border-gray-700 text-white hover:bg-coral hover:border-coral transition-all rounded"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 border-2 border-gray-700 text-white hover:bg-coral hover:border-coral transition-all rounded"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:pprankur@gmail.com"
                className="p-2 bg-gray-800 border-2 border-gray-700 text-white hover:bg-coral hover:border-coral transition-all rounded"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/917580909961"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 border-2 border-gray-700 text-white hover:bg-coral hover:border-coral transition-all rounded"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
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
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-coral transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-coral transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
