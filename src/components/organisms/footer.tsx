"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 }
};

const tapEffect = {
  scale: 0.95
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[var(--pink)] text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-1">
          <motion.div 
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <Image
              src="/imgs/logo.svg"
              width={80}
              height={80}
              alt="AnimeEYE Logo"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.div 
              className="relative bg-[url('/imgs/text.svg')] bg-no-repeat bg-contain bg-center w-full max-w-[400px] h-[200px] sm:h-[200px] text-white p-4"
              variants={itemVariants}
            >
              <p className="text-sm leading-relaxed">
                “Every new series, hairstyle, and outfit brings energy to life
                again. I can’t believe how easy it was to show off my digital
                self in moments with such inspiration and fun. I keep
                screenshotting my style, it’s addictive!”
              </p>
              <span className="absolute bottom-4 left-4 sm:left-6 text-xs sm:text-sm font-semibold">
                — Mitchiro Kaito
              </span>
            </motion.div>

            <motion.button 
              className="mt-4 !bg-[var(--success)] !text-[var(--dark-blue)] px-4 py-2 !rounded-full text-sm sm:text-base transition whitespace-nowrap overflow-hidden text-ellipsis max-w-[90vw]"
              variants={itemVariants}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              Join Mitchiro on His Journey
            </motion.button>

            <motion.div 
              className="mt-3 flex space-x-4 justify-center text-white text-xl"
              variants={itemVariants}
            >
              {[FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-[var(--light-green)] cursor-pointer"
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>
            <motion.p 
              className="mt-3 text-sm sm:text-base"
              variants={itemVariants}
            >
              Follow Us for Daily Anime Inspiration
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="lg:ml-8 flex justify-center lg:justify-start"
          variants={containerVariants}
        >
          <ul className="space-y-2 text-center lg:text-left">
            {["About Us", "Shop All Products", "FAQ", "Shipping & Returns", "Privacy Policy", "Terms & Conditions", "Help"].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <a href="#" className="hover:underline !text-[var(--white)] hover:!text-[var(--light-green)]">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="mt-6 text-center lg:text-left"
          variants={containerVariants}
        >
          <div className="space-y-2">
            <motion.a 
              href="mailto:gallery@animeye.net" 
              className="block hover:underline !text-[var(--white)] hover:!text-[var(--light-green)]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              gallery@animeye.net
            </motion.a>
            {["02224648843 | 02224248555", "50 Al-Khalifah Al-Maamun, New City, Cairo, Egypt"].map((text, index) => (
              <motion.p 
                key={index}
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2">
              {["9am - 5pm", "Except Friday"].map((text, index) => (
                <motion.p 
                  key={index}
                  variants={itemVariants}
                  className="lg:px-4"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white text-gray-800 text-center flex flex-col sm:flex-row justify-between items-center text-sm py-4 px-4 md:px-38 space-y-2 sm:space-y-0"
        variants={containerVariants}
      >
        {["Copyright Notice: © 2024 Animeye. All Rights Reserved.", "Credits: Artwork by Duniya Reda."].map((text, index) => (
          <motion.p 
            key={index}
            variants={itemVariants}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.footer>
  );
}