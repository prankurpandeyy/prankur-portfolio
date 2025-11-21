import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';

const Articles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Real articles from FreeCodeCamp and Dev.to
  const articles = [
    // FreeCodeCamp Articles
    {
      platform: 'FreeCodeCamp',
      date: '3 days ago',
      title: 'How to Build a Portfolio Website Using Figma and AI Tools – A Guide for Developers',
      description: 'A comprehensive guide for developers on creating portfolio websites using Figma and modern AI tools.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '3 months ago',
      title: 'Learn Key System Design Principles Behind High-Traffic Platforms Like Gaming and Job Discovery',
      description: 'Understanding the system design principles that power high-traffic platforms in gaming and job discovery industries.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '8 months ago',
      title: 'How to Become a Full-Stack Developer in 2025 (and Get a Job) – A Handbook for Beginners',
      description: 'A complete handbook for beginners looking to become full-stack developers and land their first job in 2025.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '9 months ago',
      title: 'How to Build a Replit Clone with Socket.io, Monaco Editor, and Copilotkit',
      description: 'Learn to build a Replit clone using Socket.io for real-time collaboration, Monaco Editor, and Copilotkit for AI assistance.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '10 months ago',
      title: 'How to Talk to Any Database Using AI – Build Your Own SQL Query Data Extractor',
      description: 'Build an AI-powered SQL query data extractor that can communicate with any database using natural language.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '1 year ago',
      title: 'How to Build a CSS Component Library and Improve Your Web Development Skills',
      description: 'Master CSS by building your own component library and improve your web development skills through hands-on practice.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '1 year ago',
      title: 'React Best Practices Every Developer Should Know',
      description: 'Essential React best practices that every developer should know to write cleaner, more maintainable code.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '1 year ago',
      title: 'New React 19 Features You Should Know – Explained with Code Examples',
      description: 'Explore the new features in React 19 with practical code examples and learn how to leverage them in your projects.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      platform: 'FreeCodeCamp',
      date: '1 year ago',
      title: 'Learn React Hooks – Common Hooks Explained with Code Examples',
      description: 'A comprehensive guide to React Hooks with code examples covering useState, useEffect, useContext, and more.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
      gradient: 'from-blue-500 to-cyan-600',
    },
    // Dev.to Articles
    {
      platform: 'Dev.to',
      date: 'Nov 18, 2024',
      title: 'How to Build a Portfolio Website Using Figma and AI Tools',
      description: 'Step-by-step guide on building a portfolio website using Figma design tools and modern AI-powered development tools.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Nov 6, 2024',
      title: 'AI in Frontend Development: Lessons from Testing Modern Figma-to-Code Tools like V0, Builder.io, and Kombai',
      description: 'Real-world insights from testing modern AI-powered Figma-to-code tools and their impact on frontend development workflows.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Sep 14, 2024',
      title: '12 Minutes to Master React: All the Concepts You Need to Know',
      description: 'A quick but comprehensive guide covering all essential React concepts you need to know in just 12 minutes.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Sep 2, 2024',
      title: 'From Zero to Hero: Build Your First React Native App in 1 Hour',
      description: 'Complete tutorial on building your first React Native mobile app from scratch in just one hour.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Aug 30, 2024',
      title: '10 Game-Changing VS Code Extensions Every Dev is Using in 2024',
      description: 'Discover the top 10 VS Code extensions that are revolutionizing developer productivity in 2024.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Jun 23, 2024',
      title: 'Build Your Own Productivity App in React JS Using Mock APIs: A Step-by-Step Guide for 2024',
      description: 'Learn to build a productivity app in React JS using mock APIs with this comprehensive step-by-step guide.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Jun 23, 2024',
      title: 'Leveraging Salesforce MuleSoft for Seamless Data Integration',
      description: 'Explore how to use Salesforce MuleSoft for seamless data integration across different systems and platforms.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Apr 5, 2024',
      title: 'Build a YouTube Clone in React JS: Create Your Own Video Library App from Scratch!',
      description: 'Complete guide to building a YouTube clone in React JS, creating your own video library application from scratch.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Mar 29, 2024',
      title: 'Build a Full-Stack E-Commerce React App from Scratch: The Ultimate Guide',
      description: 'The ultimate guide to building a complete full-stack e-commerce application using React from scratch.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Mar 28, 2024',
      title: 'Salesforce AI for Better Data Management: Automating Data Cleansing and Duplication',
      description: 'Learn how to use Salesforce AI for better data management, automating data cleansing and duplication processes.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Jan 24, 2024',
      title: 'Git Security: Best Practices for Keeping Your Code Safe',
      description: 'Essential Git security best practices to keep your code safe and protect your repositories from vulnerabilities.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Jul 25, 2022',
      title: 'Master Front-End Basics: The Perfect Blend of HTML, CSS, and JS to Jumpstart Your React Journey',
      description: 'Master the fundamentals of front-end development with HTML, CSS, and JavaScript to prepare for your React journey.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'Jul 24, 2022',
      title: 'Create Your Own CSS Component Library: The Ultimate Hands-On Guide to Mastering CSS Through Practice',
      description: 'The ultimate hands-on guide to mastering CSS by creating your own component library through practical exercises.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      platform: 'Dev.to',
      date: 'May 12, 2022',
      title: '10 Essential JavaScript Concepts Every React Developer Must Master in 2024',
      description: 'The 10 essential JavaScript concepts that every React developer must master to write better code in 2024.',
      link: 'https://dev.to/prankurpandeyy',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  // Sort articles by date (most recent first)
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date.includes('ago') ? getDateFromRelative(a.date) : a.date);
    const dateB = new Date(b.date.includes('ago') ? getDateFromRelative(b.date) : b.date);
    return dateB - dateA;
  });

  function getDateFromRelative(relativeDate) {
    const now = new Date();
    if (relativeDate.includes('days ago')) {
      const days = parseInt(relativeDate);
      return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    } else if (relativeDate.includes('months ago')) {
      const months = parseInt(relativeDate);
      return new Date(now.getFullYear(), now.getMonth() - months, now.getDate());
    } else if (relativeDate.includes('year ago')) {
      return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    }
    return now;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section id="articles" className="relative py-20 bg-white border-b-4 border-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 opacity-5 rounded-full blur-3xl"
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
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-coral to-cyan-400 text-white border-2 border-black px-6 py-2 font-bold uppercase tracking-wide">
                Technical Writing
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Published{' '}
              <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {sortedArticles.length} articles published on FreeCodeCamp and Dev.to covering React, 
              Full-Stack Development, AI, and more.
            </p>
          </motion.div>

          {/* Articles Grid - Compact Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {sortedArticles.map((article, index) => (
              <motion.div
                key={`${article.platform}-${article.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{ perspective: 1000 }}
              >
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border-2 border-black p-5 rounded-lg relative overflow-hidden group h-full hover:shadow-xl transition-all"
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${article.gradient}`} />

                  {/* Platform Badge & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 bg-gradient-to-r ${article.gradient} text-white font-bold text-xs uppercase border border-black`}>
                      {article.platform === 'FreeCodeCamp' ? 'FCC' : 'DEV'}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{article.date}</span>
                  </div>

                  {/* Title - Compact */}
                  <h3 className="text-base md:text-lg font-bold mb-2.5 group-hover:text-coral transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description - Compact */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-1.5 text-coral text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Read</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="https://www.freecodecamp.org/news/author/prankurpandeyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold border-2 border-black hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All on FreeCodeCamp
            </motion.a>
            <motion.a
              href="https://dev.to/prankurpandeyy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold border-2 border-black hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All on Dev.to
            </motion.a>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-effect border-4 border-black p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Technical Content for Your Project?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                I can create comprehensive technical documentation, blog posts, and tutorials
                that help your users and developers succeed.
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
                  Discuss Your Content Needs
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

export default Articles;
