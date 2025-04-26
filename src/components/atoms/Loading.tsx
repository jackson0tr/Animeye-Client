'use client'

import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin w-32 h-32">
        <svg
          viewBox="0 0 662.11 533.56"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* Main circular path - this will spin */}
          <path
            className="st2"
            d="M43.35,320.75c0-156.89,127.18-284.07,284.07-284.07,147.08,0,268.06,111.78,282.6,255.02"
            fill="none"
            stroke="#ce00ff"
            strokeWidth="8.17"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
          
          {/* Additional decorative elements */}
          <path
            className="st6"
            d="M531.32,394.47c10.77-25.93,16.72-54.37,16.72-84.19,0-121.35-98.38-219.73-219.73-219.73s-219.73,98.38-219.73,219.73c0,29.83,5.96,58.26,16.72,84.19h406.01Z"
            fill="#acfeab"
          />
          <path
            className="st3"
            d="M362.59,67.98c114.56,15.8,204.85,107.64,218.27,222.94"
            fill="none"
            stroke="#ce00ff"
            strokeWidth="15.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
          <path
            className="st4"
            d="M145.01,142.32c10.96-11.21,22.95-21.41,35.81-30.45"
            fill="none"
            stroke="#ce00ff"
            strokeWidth="15.71"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;