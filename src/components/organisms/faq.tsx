"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/helpers/theme-provider";

const faqData = [
  {
    question: "1. What is Animeye Studio?",
    answer:
      "Animeye Studio is a unique design company that blends anime-inspired art with handmade products. We offer a range of items including apparel, accessories, and home decor, each crafted with pastel colors and careful attention to detail.",
  },
  {
    question: "2. How can I place an order?",
    answer:
      "Orders can be placed directly through our website by selecting the desired product, customizing any options if applicable, and proceeding through the secure checkout process.",
  },
  {
    question: "3. What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, PayPal, and other popular digital payment platforms. Specific options will be shown at checkout.",
  },
  {
    question: "4. How long will it take to receive my order?",
    answer:
      "Processing times vary based on the type of product and customization. Typically, orders are processed within 3-5 business days and shipping times depend on your location, ranging from 5-14 days.",
  },
  {
    question: "5. Do you ship internationally?",
    answer:
      "Yes, we offer international shipping to limited countries beside Egypt, Lebanon, Saudi Arabia, and Bahrain. Costs and delivery times may vary based on your location.",
  },
  {
    question: "6. Can I return or exchange a product?",
    answer:
      "We accept returns and exchanges under certain conditions. Please review our return policy for more details.",
  },
  {
    question: "7. Are your products hand-painted or printed?",
    answer:
      "Our products can be either hand-painted or digitally printed. The specific type of art for each product is listed in its description.",
  },
  {
    question: "8. Can I request a custom design?",
    answer:
      "Yes, we take custom design requests! Contact us with your idea, and we'll work with you to create a special piece.",
  },
  {
    question: "9. Who is the artist behind the creations?",
    answer:
      "Duniya Reda is the lead artist and founder of Animeye Studio. She brings each product to life with her unique vision and artistic skills.",
  },
  {
    question: "10. What materials do you use in your products?",
    answer:
      "We use high-quality, durable materials like natural clay, canvas, cotton fabrics and eco-friendly, non-toxic paints. Detailed material information is provided in the product descriptions.",
  },
  {
    question: "11. How do I care for my Animeye product?",
    answer:
      "For hand-painted items, it's best to use a gentle cycle wash or hand wash and air dry to preserve the artwork. Detailed care instructions are provided with each product.",
  },
  {
    question: "12. Can I track my order?",
    answer:
      "Yes, once your order has shipped, you will receive a tracking number via email to follow your package's journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // className="max-w-4xl mx-auto"
      >
        <h2 className={`text-4xl  ${theme === 'dark' ? 'text-[var(--success)]' : 'text-[var(--pink)]'} mb-8 text-center`}>
          FAQ
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
          {faqData.map((item, index) => (
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
                        className={`text-opacity-80 leading-relaxed ${
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

export default FAQ;
