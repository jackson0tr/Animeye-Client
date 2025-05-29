'use client';

import { useTheme } from "@/lib/helpers/theme-provider";

const BehindTheScenes = () => {
  const { theme } = useTheme();

  return (
    <div className="py-10 px-4 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-[var(--pink)] text-2xl font-semibold mb-8">
        Behínd·the Scenes at Ánimeye
      </h2>

      {/* Box */}
      <div className={`border ${theme === 'dark' ? 'bg-[var(--white)]' : 'bg-transparent'} border-[var(--light-green)] rounded-lg w-full max-w-4xl min-h-[200px] flex items-center justify-center px-6 py-8`}>
        <p className="text-gray-700 text-left text-sm leading-relaxed max-w-md">
          Include photos or videos of the artist at work. <br />
          Add brief descriptions or captions to explain the creative process. <br /><br />
          Offer a glimpse into the creative process and the story behind the products.
        </p>
      </div>
    </div>
  );
};

export default BehindTheScenes;
