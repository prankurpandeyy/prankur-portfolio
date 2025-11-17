import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      platform: 'FreeCodeCamp',
      date: 'Dec 15, 2024',
      title: 'Mastering React Hooks: A Comprehensive Guide',
      description: 'Deep dive into React Hooks with practical examples and best practices for building modern React applications.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
    },
    {
      platform: 'Dev.to',
      date: 'Nov 28, 2024',
      title: 'Building Scalable Node.js Applications',
      description: 'Learn how to architect Node.js applications that can handle millions of requests with optimal performance.',
      link: 'https://dev.to/prankurpandeyy',
    },
    {
      platform: 'Dev.to',
      date: 'Oct 12, 2024',
      title: 'The Complete Guide to MongoDB Optimization',
      description: 'Essential techniques for optimizing MongoDB queries and improving database performance in production.',
      link: 'https://dev.to/prankurpandeyy',
    },
    {
      platform: 'FreeCodeCamp',
      date: 'Sep 5, 2024',
      title: 'DevOps Best Practices for Modern Teams',
      description: 'A practical guide to implementing DevOps practices that streamline development and deployment workflows.',
      link: 'https://www.freecodecamp.org/news/author/prankurpandeyy/',
    },
  ];

  return (
    <section id="articles" className="py-16 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-4 border-black p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-coral font-bold text-sm uppercase">
                  {article.platform}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {article.description}
              </p>
              <a
                href={article.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-black font-bold hover:bg-coral hover:text-white hover:border-coral transition-all group"
              >
                Read Article
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
