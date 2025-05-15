"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/helpers/theme-provider";

const returnsData = [
  {
    question: "1. Eligibility for Returns",
    answer: "- Returns are accepted within \"14 days\" of receiving your order.\n- Products must be unused, in original condition with all packaging intact\n- No returns on \"custom-made\" or \"personalized items\" unless damaged/defective",
  },
  {
    question: "2. How to Initiate a Return*",
    answer: "1. Contact us at \"hello@animeye.co\" within 14 days\n2. Include order number, issue description, and photos (if applicable)\n3. We'll provide return shipping instructions and address",
  },
  {
    question: "3. Return Shipping*",
    answer: "- Customer covers return shipping costs unless item is damaged/defective",
  },
  {
    question: "4. Refunds*",
    answer: "- Inspection upon receipt\n- Approved refunds credited to original payment method\n- *Shipping costs are non-refundable*",
  },
  {
    question: "5. Damaged or Defective Items*",
    answer: "- Notify us within \"3 days\" of delivery\n- Full refund/exchange including return shipping costs",
  },
  {
    question: "6. Exchanges*",
    answer: "- No direct exchanges available\n- Initiate return and place new order",
  },
  {
    question: "7. Non-Returnable Items*",
    answer: "- Gift cards\n- Personalized/custom-designed products",
  },
  {
    question: "Contact Information",
    answer: "For return questions or assistance:\n\n**Email:** hello@animeye.co\n**Phone:** +20 114 452 3002",
  },
];

const Return = () => {
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
          Return Policy
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
          {returnsData.map((item, index) => (
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

export default Return;