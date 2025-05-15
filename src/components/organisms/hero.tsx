"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Circle } from "../atoms/circle";

const Hero = () => {
  return (
    <section className="bg-white py-5 md:py-10 pt-10 md:pt-20 h-full">
  <div className="relative bg-[var(--accent)] -ml-25 md:ml-auto  border-4 h-[25vh] md:h-[50vh] border-white w-full md:w-[90%] lg:max-w-4xl 2xl:max-w-7xl mx-auto px-0 md:px-4 py-6 flex items-center justify-between">
        {/* Left Side Logo and Swirls */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 z-10"
          >
            <Image
              src="/imgs/anim.svg"
              alt="animeye"
              className="w-[150px] h-[100px] md:w-[400px] md:h-[400px]"
              width={400}
              height={500}
            />
            <div className="flex gap-4 text-4xl justify-center">
              <Image
                src="/imgs/circle.svg"
                alt="animeye"
                className="w-[30px] h-[30px] md:w-[100px] md:h-[100px]"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/circle.svg"
                alt="animeye"
                className="w-[30px] h-[30px] md:w-[100px] md:h-[100px]"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/circle.svg"
                alt="animeye"
                className="w-[30px] h-[30px] md:w-[100px] md:h-[100px]"
                width={100}
                height={100}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Anime Character - now positioned outside relative parent */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "50%" }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-93  lg:right-48 2xl:right-53 lg:-bottom-20 2xl:-bottom-8  md:block z-0"
      >
        <Image
          src="/imgs/hero.png"
          alt="Anime Character"
          width={300}
          height={500}
          className="object-contain w-[300px] h-[300px] lg:h-[400px] 2xl:h-[500px]"
        />
      </motion.div>

      {/* Tagline */}
      <div className="text-center mt-10 text-[var(--accent)]">
        <h2 className="text-2xl md:text-3xl font-semibold italic">
          “Immerse Yourself in{" "}
          <span className="text-[var(--accent)]">Anime Magic</span>”
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Explore exclusive, handcrafted anime-inspired designs by Duniya
        </p>
      </div>
    </section>
  );
};

export default Hero;
