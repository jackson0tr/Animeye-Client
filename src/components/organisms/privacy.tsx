"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/helpers/theme-provider";

const privacyData = [
  {
    question: "1. Information We Collect",
    answer: "We collect personal information from you when you:\n\n- Create an Account: Name, email address, password, and other basic details\n- Make a Purchase: Billing and shipping addresses, phone number, payment information\n- Subscribe to Our Newsletter: Email address\n- Contact Support: Email address, order number (if applicable), and details relevant to your inquiry\n\nWe may also collect non-personal information, such as device type, browser information, IP address, and usage data.",
  },
  {
    question: "2. How We Use Your Information",
    answer: "We use the information we collect for:\n\n- Order Processing: To fulfill your orders and manage transactions\n- Customer Support: To respond to your inquiries and resolve issues\n- Marketing Communication: To send newsletters, product updates, and promotional offers (if opted-in)\n- Website Improvement: To analyze usage patterns and enhance user experience",
  },
  {
    question: "3. Sharing of Information",
    answer: "We do not sell or share your personal information with third parties for marketing purposes. However, we may share information with:\n\n- Service Providers: Payment processors, shipping partners, and IT support\n- Legal Requirements: When required by law or to protect our legal rights",
  },
  {
    question: "4. Cookies and Tracking Technologies",
    answer: "Our website uses cookies to:\n\n- Recognize returning visitors and maintain preferences\n- Analyze usage data for service improvements\n\nYou can disable cookies in browser settings, but this may affect website functionality.",
  },
  {
    question: "5. Data Security",
    answer: "We implement security measures including:\n- Encryption\n- Secure servers\n- Regular security audits\n\nNote: No internet transmission is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    question: "6. Data Retention",
    answer: "We retain your information only as long as necessary to:\n- Fulfill the purposes outlined in this policy\n- Comply with legal obligations",
  },
  {
    question: "7. Your Rights",
    answer: "You have the right to:\n- Access your personal data\n- Update/correct inaccurate information\n- Request data deletion (subject to legal requirements)\n- Opt-out of marketing communications",
  },
  {
    question: "8. Children's Privacy",
    answer: "We do not knowingly collect information from individuals under 13. If we become aware of such data, we will promptly delete it.",
  },
  {
    question: "9. Policy Updates",
    answer: "We may update this policy periodically. Significant changes will be communicated via:\n- Website notifications\n- Email (for subscribed users)",
  },
  {
    question: "10. Contact Us",
    answer: "For questions or concerns about this Privacy Policy:\n\n**Email:** hello@animeye.co\n**Phone:** +20 114 452 3002",
  },
];

const Privacy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-4xl ${theme === 'dark' ? 'text-[var(--success)]' : 'text-[var(--pink)]'} mb-8 text-start`}>
          Privacy Policy
        </h2>

        <motion.div
          className="flex flex-col space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {privacyData.map((item, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}}
              className="border-b border-gray-200"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 text-left flex justify-between !bg-transparent items-center"
                whileHover={{ backgroundColor: "#f8fafc" }}
              >
                <h3 className={`text-lg font-semibold pr-4 ${
                  theme === "dark" ? "text-[var(--pink)]" : "text-[var(--primary)]"
                }`}>
                  {item.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className={`w-6 h-6 ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[#26225E]'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 px-7">
                      <p className={`text-opacity-80 leading-relaxed whitespace-pre-line ${
                        theme === "dark" ? "text-[var(--accent)]" : "text-[var(--primary)]"
                      }`}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Privacy;