'use client'
import { useTheme } from "@/lib/helpers/theme-provider";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiArrowFromBottom } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";

const ArtistSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { theme } = useTheme();

  return (
    <section className=" flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[var(--pink)]"
      >
        Meet the Artist Behind the Art
      </motion.h3>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-12 mx-auto w-full  relative h-96"
      >
          <Image
            src="/imgs/story.svg" // Replace with your image path
            alt="Artist Portrait"
            fill
            className="object-contain"
            // sizes="(max-width: 768px) 100vw, 50vw"
          />
      </motion.div>

      {/* Scroll to top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center cursor-pointer mt-8"
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
      >
        <p className={`${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} mb-2`}>To the Top</p>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <BiArrowFromBottom className={`${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} w-6 h-6`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ArtistSection;