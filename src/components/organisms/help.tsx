"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/helpers/theme-provider";

const helpData = [
  {
    question: "1. How to Order",
    answer: "To place an order, simply:\n\n1. Browse through our products.\n2. Choose your favorite item.\n3. If it's customizable, click on \"Customize\".\n4. Add to cart and proceed to checkout.\n5. Choose your payment method and confirm the order.",
  },
  {
    question: "2. Product Customization",
    answer: "Any selected items are available for customization.\n- Upload reference images\n- Add notes or ideas\n- Choose preferred styles or colors",
  },
  {
    question: "3. Payment Methods",
    answer: "We currently accept:\n- ELSIE Cash\n- Bank transfer\n- Visa/MasterCard",
  },
  {
    question: "4. Shipping & Delivery",
    answer: "- Processing time: 3-7 business days (especially for customized items).\n- Delivery time: 2-6 business days after dispatch.\n- Shipping is available within Egypt.",
  },
  {
    question: "5. Returns & Exchanges",
    answer: "- We accept exchanges only if the item is damaged or incorrect.\n- Customized items cannot be returned.",
  },
  {
    question: "6. Contact Us",
    answer: "If you need help, feel free to contact us:\n\nInstagram: [@animeyestudio]\nWhatsApp: [+20 114 452 3002]\nEmail: [hello@animeye.co]",
  },
  {
    question: "7. FAQs",
    answer: "Q: Can I customize all products?\nA: No, only selected items are customizable.\n\nFor design updates, postal issues, or unforeseen circumstances, please contact us.",
  },
];


const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-4xl  ${theme === 'dark' ? 'text-[var(--success)]' : 'text-[var(--pink)]'} mb-8 text-start`}>
          Help
        </h2>

        <motion.div
          className="flex flex-col space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {helpData.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="border-b border-gray-200"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 text-left flex justify-between !bg-transparent items-center"
                whileHover={{ backgroundColor: "#f8fafc" }}
              >
                <h3
                  className={`text-lg font-semibold pr-4 ${
                    index === 0
                      ? theme === "dark" ? "text-[var(--success)]" : "text-[var(--primary)]"
                      : theme === "dark"
                      ? "text-[var(--pink)]"
                      : "text-[var(--primary)]"
                  }`}
                >
                  {item.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className={`w-6 h-6 ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[#26225E]'} `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
                    <div className="pb-4 px-7 text-[#26225E]">
                      <p
                        className={`text-opacity-80 leading-relaxed whitespace-pre-line ${
                          theme === "dark"
                            ? "text-[var(--accent)]"
                            : "text-[var(--primary)]"
                        }`}
                      >
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

export default Help;