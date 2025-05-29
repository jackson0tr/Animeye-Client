import React from 'react';

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  type: 'Tote bag',
  dimensions: '64 x 64 cm',
  expiration: 'Demo expires soon',
}));

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-[url('/imgs/bubble.svg')] bg-cover bg-center py-16 px-8">
      <div className="max-w-7xl mx-auto md:!pt-50 xl:pt-70 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="flex flex-col items-center">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <div className="space-y-2">
                <h3 className="text-gray-900 font-semibold text-lg">
                  Product type: <span className="font-normal">{p.type}</span>
                </h3>
                <p className="text-gray-600">Dimensions: {p.dimensions}</p>
                <p className="text-gray-600">Animation expiration: {p.expiration}</p>
              </div>
            </div>

            {/* Button under the card */}
            <button
              className="mt-4 !bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded transition w-full"
            >
              Claim Your Place
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
