import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TermsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const terms = [
    {
      title: 'Terms of Service',
      content: `These Terms of Service ("Terms") govern your access to and use of our services. By using our services, you agree to be bound by these Terms.

1. Acceptance of Terms: By accessing or using this portfolio website, you acknowledge that you have read, understood, and agree to be bound by these Terms.

2. Use of Services: You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services in any way that violates any applicable laws or regulations.

3. Intellectual Property: All content, features, and functionality of this website are owned by the developer and are protected by international copyright, trademark, and other intellectual property laws.

4. Limitation of Liability: The developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.

5. Modifications: We reserve the right to modify these Terms at any time. Your continued use of the services after any such changes constitutes your acceptance of the new Terms.`,
    },
    {
      title: 'Privacy Policy',
      content: `Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

1. Information We Collect: We may collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.

2. How We Use Your Information: We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and send you updates about our services.

3. Information Sharing: We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

4. Data Security: We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

5. Your Rights: You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.

6. Cookies: We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

7. Changes to Privacy Policy: We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.`,
    },
    {
      title: 'Cookie Policy',
      content: `This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website.

1. What Are Cookies: Cookies are small data files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.

2. Types of Cookies We Use:
   - Essential Cookies: These cookies are necessary for the website to function properly.
   - Analytics Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
   - Preference Cookies: These cookies remember your preferences and settings.

3. Third-Party Cookies: We may also use third-party cookies, such as Google Analytics, to analyze website traffic and usage patterns.

4. Managing Cookies: You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies. However, disabling cookies may impact your ability to use certain features of our website.

5. Updates to Cookie Policy: We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.`,
    },
    {
      title: 'Refund Policy',
      content: `This Refund Policy outlines the terms and conditions for refunds on our services.

1. Service Deliverables: Once a service has been delivered and accepted by the client, refunds are generally not available unless otherwise specified in the service agreement.

2. Refund Requests: All refund requests must be submitted in writing within 2 day of service delivery. Requests should include detailed reasons for the refund request.

3. Eligibility for Refunds:
   - Refunds may be considered for services not delivered as described in the service agreement.
   - Partial refunds may be provided for partially completed work, at our discretion.
   - No refunds will be provided for work that has been accepted by the client.
   - No refunds will be given for resuming service after initial deposit and work has commenced.

4. Processing Time: Approved refunds will be processed within 14 business days using the original payment method.

5. Non-Refundable Items: Custom development work, consultation fees, and third-party service fees are generally non-refundable unless otherwise agreed upon in writing.

6. Disputes: If you are not satisfied with our refund decision, please contact us to discuss alternative solutions.`,
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold mb-4 text-white">Terms & Conditions</h4>
      {terms.map((term, index) => (
        <div key={index} className="border-2 border-gray-700 overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 bg-gray-800 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
          >
            <span className="font-bold text-white">{term.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-coral" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-800 text-gray-300 leading-relaxed whitespace-pre-line">
                  {term.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default TermsAccordion;

