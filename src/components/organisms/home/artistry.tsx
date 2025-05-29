'use client';
import { useTheme } from "@/lib/helpers/theme-provider";
import { motion } from "framer-motion";

export default function ArtistrySection() {
    const { theme } = useTheme();
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16">
      {/* Content container with max-width */}
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-16 mx-3"
        >
          <motion.h1 
            className="text-pink-600 text-4xl md:text-5xl font-bold mb-4 "
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Artistry Unleashed
          </motion.h1>
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} max-w-2xl mx-auto`}>
            Produces high-quality snippets or videos of selected artworks, explanations of GIF art techniques,
            and documentation for academic purposes.
          </p>
        </motion.div>

        {/* Pink Background Pattern Section */}
        <div
          className="
            relative w-full py-20
            bg-[url('/imgs/bubble.svg')] bg-cover bg-center
            overflow-hidden
            h-[100vh]
          "
        >
          {/* Content over the background */}
          <div className="relative z-10">
            <div className="flex flex-col md:pt-60 md:flex-row justify-center items-center gap-8 md:gap-16 px-4">
              {[
                { title: 'Artwork Creation', desc: 'Videos showing the artwork making process from start to finish' },
                { title: 'GIF Techniques',    desc: 'Detailed explanations of advanced GIF art techniques' },
                { title: 'Documentation',     desc: 'Academic documentation for research and educational purposes' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="
                    md:w-82 md:h-82 w-52 h-52 rounded-full bg-white/90 backdrop-blur-sm
                    flex flex-col items-center justify-center text-center p-6
                    shadow-lg border-2 border-pink-200
                  "
                >
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-pink-600 font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative bouncing dots */}
            <motion.div 
              className="flex justify-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-pink-500"
                    animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
