import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen mt-48 flex flex-col items-center py-12 font-poppins">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
        <p className="text-gray-400 mt-2 max-w-2xl mb-10">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 font-poppins md:grid-cols-3 gap-8 mt-20 max-w-6xl w-full px-6">
        {/* Lite Plan */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Lite</h2>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
          <h3 className="text-4xl font-bold text-white mt-6">$9.00</h3>
          <p className="text-gray-400">USD / month</p>
          <ul className="mt-4 text-gray-200">
            <li>✔ 5.7% APY investment</li>
            <li>✔ Android and iPhone mobile app</li>
            <li>✔ Weekly and monthly reporting</li>
            <li>✔ Standard support</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Standard</h2>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
          <h3 className="text-4xl font-bold text-white mt-6">$19.00</h3>
          <p className="text-gray-400">USD / month</p>
          <ul className="mt-4 text-gray-200">
            <li>✔ Everything in Lite plan</li>
            <li>✔ Crypto trading with 25+ tokens</li>
            <li>✔ Online wallet integration</li>
            <li>✔ Premium support</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Pro</h2>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
          <h3 className="text-4xl font-bold text-white mt-6">$29.00</h3>
          <p className="text-gray-400">USD / month</p>
          <ul className="mt-4 text-gray-200">
            <li>✔ Everything in Standard plan</li>
            <li>✔ Crypto trading with 500+ tokens</li>
            <li>✔ Cold wallet integration</li>
            <li>✔ Dedicated support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
