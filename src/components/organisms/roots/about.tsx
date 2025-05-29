"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-pink-600 italic mb-10">
        “The Story Behind Animeye Studio”
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Character Image */}
        <div className="flex-shrink-0">
          <Image
          width={200}
          height={200}
            src="/imgs/about.svg"
            alt="Mitchiro Kaito"
            className="max-w-[250px] lg:max-w-[300px] mx-auto"
          />
        </div>

        {/* Speech Bubbles */}
        <div className="space-y-6">
          <div className="border-2 border-black rounded-xl p-4 shadow-md">
            <p>
              Hi there! I’m{" "}
              <span className="text-purple-600 font-medium">
                Mitchiro Kaito
              </span>
              , the heart and soul of{" "}
              <span className="text-pink-600 font-medium">Animeye Studio</span>.
              Our journey began with a simple question:{" "}
              <span className="text-pink-500 font-semibold">
                “What if we could bring the magic of anime into the everyday
                world?”
              </span>{" "}
              From that idea, <span className="text-purple-600">Animeye</span>{" "}
              was born—a place where creativity, passion, and a little bit of
              whimsy meet to transform the ordinary into something
              extraordinary.
            </p>
          </div>

          <div className="border-2 border-black rounded-xl p-4 shadow-md">
            <p>
              We wanted to craft more than just products. Each item we make is
              infused with{" "}
              <span className="font-semibold text-blue-600">
                love, creativity
              </span>
              , and the{" "}
              <span className="font-semibold text-indigo-600">spirit</span> of
              anime. From ceramic crafts to custom apparel, everything we create
              is a piece of art that brings joy and sparks imagination. At{" "}
              <span className="text-purple-600">Animeye</span>, it’s not just
              about the products—it’s about telling a story with every piece and
              making sure that magic shines through.
            </p>
          </div>

          <div className="border-2 border-black rounded-xl p-4 shadow-md">
            <p>
              And that’s where I come in! As your guide through our world, I
              make sure that every design is playful, honest, and filled with
              heart. Together with the team, we hope our creations bring a
              little piece of anime magic into your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
