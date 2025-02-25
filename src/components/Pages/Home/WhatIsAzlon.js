import React from 'react';

const WhatIsAzlon = () => {
  return (
    <div className="py-16 bg-gray-50" id="what-is-azlon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Revolutionary</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What is Azlon?
          </p>
        </div>

        <div className="mt-10 mx-auto text-lg text-gray-700 max-w-4xl">
          <p className="mb-6">
            Azlon is the world's first fully autonomous coding tool. What does that mean? LLMs traditionally create code but it could have bugs and issues, and you may not get the correct output that you're looking for. But with Azlon, that all changes.
          </p>
          
          <p className="mb-6">
            We use top-notch LLMs to generate code from your prompt, and we also ask you for the output you want (and we can handle edge cases and test cases) in a prompt. Then the platform uses the LLM to create the code, but it will also <span className="font-bold text-green-600">run the code</span>.
          </p>
          
          <p className="mb-6">
            If the code's output doesn't meet the test cases and desired output you prompted, it'll tweak the old code or generate new code entirely if it has to. This cycle will run over and over again until the desired output is met.
          </p>
          
          <p className="mb-6">
            This is revolutionary! It's no longer guesswork if the code will work or not! And it's never been done before. The applications are endless!
          </p>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Guaranteed Results</h3>
                    <p className="mt-2 text-base text-gray-600">
                      No more debugging—Azlon ensures your code works before delivering it to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Data Science Focused</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Specially designed for researchers working with data science and machine learning applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAzlon;