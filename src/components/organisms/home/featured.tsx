// app/components/FeaturedCollections.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/lib/helpers/theme-provider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedCollections: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState(false);
  const cards = [1, 2, 3]; // expand as needed
  const { theme } = useTheme();

  // Check if mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  // Animation variants for cards
  const cardVariants = {
    initial: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
      scale: 0.8
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  // Animation for desktop card container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <h2 className="text-pink-600 text-2xl font-semibold">
        Discover Our Featured Collections
      </h2>
      <p
        className={`mt-2 max-w-md text-sm ${
          theme === "dark" ? "text-[var(--white)]" : "text-[var(--dark-blue)]"
        }`}
      >
        Discover exclusive, limited-edition designs that bring anime art to life
        in stunning, handcrafted pieces, meticulously created by Duniya Reda
      </p>

      <div className="relative mt-10 flex items-center justify-center w-full max-w-3xl">
        {/* Side arrows for md+ */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-[-4rem] !text-pink-600 hover:text-pink-800 !bg-transparent z-10"
          aria-label="Previous Collection"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Cards Container */}
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
          {/* Mobile View - Single Card */}
          {isMobile ? (
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex justify-center"
              >
                <div className="w-40 h-60 border-2 border-pink-500 rounded-md flex flex-col justify-end">
                  <div className="bg-green-300 h-10 w-full rounded-b-md" />
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            // Desktop View - All Cards with animation
            <motion.div
              className="flex justify-center space-x-6 w-full pt-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cards.map((_, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5,
                        delay: index * 0.1
                      }
                    }
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "scale-110 z-10 shadow-lg"
                      : "scale-100 opacity-80"
                  }`}
                >
                  <div className="w-40 h-60 border-2 border-pink-500 rounded-md flex flex-col justify-end">
                    <div className="bg-green-300 h-10 w-full rounded-b-md" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Side arrows for md+ */}
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-[-4rem] !text-pink-600 hover:text-pink-800 !bg-transparent z-10"
          aria-label="Next Collection"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Bottom navigation: dots always; arrows only on small */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        {/* Left arrow on small */}
        <button
          onClick={handlePrev}
          className="!text-pink-600 !bg-transparent hover:text-pink-800 md:hidden"
          aria-label="Previous"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              aria-label={`Go to collection ${index + 1}`}
              className="p-1 !bg-transparent"
            >
              <div
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-pink-500 scale-125" 
                    : "bg-green-300 hover:bg-pink-300"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right arrow on small */}
        <button
          onClick={handleNext}
          className="!text-pink-600 !bg-transparent hover:text-pink-800 md:hidden"
          aria-label="Next"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCollections;