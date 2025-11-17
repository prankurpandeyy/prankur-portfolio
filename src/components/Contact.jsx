import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const services = [
    'MVP Development',
    'Technical Blog',
    'Technical Documentation',
    'Consulting',
    'Other',
  ];

  return (
    <section id="contact" className="py-16 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Let's turn your ideas into
              reality!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-coral" />
                <a
                  href="mailto:pprankur@gmail.com"
                  className="text-gray-800 hover:text-coral transition-colors"
                >
                  pprankur@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-coral" />
                <a
                  href="https://wa.me/917580909961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-coral transition-colors"
                >
                  +91-7580909961
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-coral" />
                <span className="text-gray-800">Available Worldwide (Remote)</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://github.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-black font-bold hover:bg-coral hover:text-white hover:border-coral transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 inline mr-2" />
                Github
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-black font-bold hover:bg-coral hover:text-white hover:border-coral transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 inline mr-2" />
                Linkedin
              </motion.a>
              <motion.a
                href="https://x.com/prankurpandeyy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-black font-bold hover:bg-coral hover:text-white hover:border-coral transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5 inline mr-2" />
                Twitter
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:border-coral focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:border-coral focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="service" className="block font-bold mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:border-coral focus:outline-none transition-colors bg-white"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-black focus:border-coral focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-coral text-white font-bold border-4 border-black hover:bg-coral-dark transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
