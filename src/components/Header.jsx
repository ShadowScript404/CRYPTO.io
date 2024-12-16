import React from 'react';

const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between px-6 gap-2 md:flex-row flex-col md:gap-4 z-20 relative">
      <h1 className="font-poppins text-white text-4xl md:text-5xl font-bold mr-3">Crypto.io</h1>
      
      <nav className="flex gap-10 flex-wrap justify-center md:justify-start">
        <button className="relative text-white font-quicksand font-medium group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </button>

        <button className="relative text-white font-quicksand font-medium group">
          Exchange
          <span className="absolute left-0 bottom-0 w-0 min-h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </button>
        
        <button className="relative text-white font-quicksand font-medium group">
          Features
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </button>
        <button className="relative text-white font-quicksand font-medium group">
          FAQ
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </button>
      </nav>

      <button className="text-white font-quicksand font-bold h-14 px-6 py-2 rounded-lg shadow-md hover:opacity-90"
          style={{
          background: "linear-gradient(to right, #3F5EFB, #FC466B)",
          }}>
          Connect Wallet
      </button>
    </div>
  );
};

export default Header;
