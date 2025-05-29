"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/helpers/theme-provider";

const termsData = [
  {
    question: "1. Welcome to Animeye Studio",
    answer: "By securing and using the website, you agree to be found by the following Terms and Conditions. Please read these carefully. If you do not agree to those terms, you may not use our services.",
  },
  {
    question: "2. Use of the Website",
    answer: "- You must be at least 15 years old to make a purchase so this is for a time that permission of a person or guardian.\n- You agree on the site has enabled for any unlawful or prohibited purposes.\n- All copies are in two websites, including images, graphics, text, and tags, to the property of Animeye Studio and may not be used without permission.",
  },
  {
    question: "3. Product Descriptions",
    answer: "We aim to provide accurate and detailed descriptions of our products. However, slight variations may occur due to known displays, and individual hand-painted items may often qualify, giving users price a unique quality.",
  },
  {
    question: "4. Pricing and Payment",
    answer: "All prices are listed in EGP for an expanded retail map, to subject to changes without prior notice.\n- Payments must be completed in full before year orders; personalized and original.\n- Net interest may exceed $0.01million. Payable, and other best payment options at checkout.",
  },
  {
    question: "5. Shipping and Delivery",
    answer: "- We sell certain domestic and international shipping. Shipping fees and estimated delivery times are provided at checkout.\n- Once shipped, it can all benefit us making purchases more than year weekday.\n- Animeye Studio is not responsible for design due to customs, special issues, or wholesale circumstances.",
  },
  {
    question: "6. Return and Exchange Policy",
    answer: "- Returns and exchanges are accepted under specific conditions outlined in our Return Policy Rule in Return Policy.\n- Items must be amended from original condition, annual, and online if, during all delivery.\n- Consumers are terminated contracts are now scheduled unless there is a deficit.",
  },
  {
    question: "7. Intellectual Property",
    answer: "All sources, charges, and intolerance on Animeye Studio’s website are the intellectual property of Animeye Studio and Charity Reis. Unauthorised as an organization of any context is prohibited.",
  },
  {
    question: "8. Custom Orders",
    answer: "- Custom orders require clear communication regarding the design and timeline.\n- We assume the right to collect any custom orders in recent days with Animeye Studio’s website type.\n- Once agreed again, customer orders are now scheduled.",
  },
  {
    question: "9. Limitation of Liability",
    answer: "- Animeye Studio will be taken very direct, indirect, incidental, or consequential damages that may arise from the use of our products.\n- Our products are created with quality materials, however, want and last over time may occur, for which Animeye Studio is not liable.",
  },
  {
    question: "10. Changes to Terms and Conditions",
    answer: "Animeye Studio ensures the right to update or modify these Terms and Conditions at any time without prior notice. In the user’s responsibility to check this page confidently for changes.",
  },
  {
    question: "11. Privacy Policy",
    answer: "Your privacy is important to us. Please offer to our Privacy Policy (UK in Privacy Policy) to understand how we handle your personal information.",
  },
  {
    question: "12. Governing Law",
    answer: "These Terms and Conditions are governed by the laws of (your country) Any disputes arising from these terms or the use of Animeye Studio’s services will be resolved in accordance with those laws.",
  },
  {
    question: "13. Contact Information",
    answer: "If you have any questions or concerns regarding these Terms and Conditions, please contact us at: hello@animeye.co\n\n**Email:** hello@animeye.co\n\nor clearly due to customs, special issues, or wholesale circumstances.",
  },
  {
    question: "- Email: hello@animeye.co",
    answer: "or delays due to customs, postal issues, or unforeseen circumstances.",
  },
];

const Terms = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-4xl  ${theme === 'dark' ? 'text-[var(--success)]' : 'text-[var(--pink)]'} mb-8 text-center`}>
          Terms and Conditions
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
          {termsData.map((item, index) => (
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

export default Terms;