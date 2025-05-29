// app/components/LimitedEdition.tsx
"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "@/lib/helpers/theme-provider";

const LimitedEdition = () => {
  // Simple countdown (replace with real logic if needed)
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({ day: 1, hour: 2, min: 3 });

  return (
    <div className="flex flex-col  items-center justify-center py-10 px-4 text-center">
      <h2 className="text-pink-600 text-xl font-semibold mb-6">Límited Edítion Unveíled</h2>

      {/* Countdown */}
      <div className="flex space-x-3 mb-10">
        <div className="bg-pink-500 text-white px-4 py-2 rounded text-lg font-bold">
          {timeLeft.day} <span className="block text-xs font-normal">Day</span>
        </div>
        <div className="bg-pink-500 text-white px-4 py-2 rounded text-lg font-bold">
          {timeLeft.hour} <span className="block text-xs font-normal">Hour</span>
        </div>
        <div className="bg-green-300 text-black px-4 py-2 rounded text-lg font-bold">
          {timeLeft.min} <span className="block text-xs font-normal">Min</span>
        </div>
      </div>

      {/* Main Image Card */}
      <div className="relative w-[350px] h-[200px] md:w-[800px] md:h-[360px] xl:w-[1000px] xl:h-[560px] bg-pink-500 rounded-xl flex items-center justify-center overflow-hidden mb-8">
        {/* Left Image */}
        <Image src="/imgs/a.svg" alt="a logo" width={60} height={60} className="absolute bottom-4 md:w-[200px] md:h-[200px] md:bottom-18 left-4 md:left-14" />
        <span className="absolute bottom-2 md:bottom-18 left-4 md:left-28 text-green-300 text-xs md:text-3xl">Unisex</span>

        {/* Center Text */}
        <h3 className="text-white text-2xl md:text-4xl md:absolute md:bottom-30 font-semibold z-10">Coming,</h3>

        {/* Right Image */}
        <Image src="/imgs/bag.svg" alt="bag" width={130} height={130} className="absolute top-4 right-4 md:-right-17 md:-top-18 md:w-[600px] md:h-[600px]" />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 text-pink-600 text-xl mb-4">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaTiktok />
        <FaYoutube />
      </div>

      {/* Buttons */}
      <div className="flex flex-col  items-center gap-3">
        <button className={`text-xs ${theme === 'dark' ? '!text-[var(--white)]' : '!text-[var(--pink)]'} !bg-transparent `}>Subscribe for Updates</button>
        <button className="!bg-green-300 !text-black text-xs px-4 py-2 rounded-full">
          Be the First to Own!
        </button>
      </div>
    </div>
  );
};

export default LimitedEdition;
