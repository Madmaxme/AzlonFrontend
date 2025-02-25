import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Meet Azlon:</span>
                <span className="block text-green-500">Autonomous Coding Reimagined</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The world's first fully autonomous coding tool that doesn't just generate code—it ensures it works perfectly for your data science and machine learning needs.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    Try Azlon Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-green-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="p-6 bg-black rounded-lg m-4 w-4/5 h-4/5 flex items-center justify-center">
            <div className="text-green-500 font-mono text-sm">
              <p>{`> Generating solution for data processing pipeline...`}</p>
              <p>{`> Testing against user requirements...`}</p>
              <p>{`> Optimizing performance...`}</p>
              <p className="text-white">{`> Solution verified and ready for deployment`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;