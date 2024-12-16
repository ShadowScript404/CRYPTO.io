import React from 'react';

const Image = () => {
  return (
    <div className="relative flex items-center justify-center h-screen px-10">
      {/* Content Wrapper */}
      <div className="z-10 relative flex flex-col items-center justify-center text-center">
        <h1 className="text-white mb-4 font-poppins text-8xl font-extrabold leading-tight max-w-6xl animate-fadeIn">
          Buy, Sell & Accept Digital Assets Without Any Worry
        </h1>
        <p className="text-slate-300 font-poppins text-lg mt-6 max-w-xl animate-fadeIn delay-500">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 font-semibold animate-slideUp delay-700">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-white font-semibold hover:underline animate-slideUp delay-1000">
            <span className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg">
              ▶
            </span>
            How it works
          </button>
        </div>
      </div>
      
      {/* Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/btc.jpeg" // Image in public/images folder
          alt="Digital Assets"
          className="w-full h-full object-cover blur-md transform -translate-y-24" // Keeps the image unchanged
        />
      </div>

      {/* Overlay (semi-transparent) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 blur-sm z-1" />
    </div>
  );
};

export default Image;
