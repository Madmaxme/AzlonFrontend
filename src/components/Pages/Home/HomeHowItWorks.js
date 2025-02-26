import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Needs',
      description: 'Upload data files and describe your goal in plain language.'
    },
    {
      number: '02',
      title: 'Autonomous Execution',
      description: 'Azlon generates, tests, and refines code until requirements are met.'
    },
    {
      number: '03',
      title: 'Download Solution',
      description: 'Get your verified, working solution ready for immediate use.'
    }
  ];

  return (
    <div className="py-12 bg-black text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            How Azlon Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Autonomous code generation with guaranteed results
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative w-full md:w-1/3 bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-black font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="ml-3 text-lg leading-6 font-medium text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-base text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/HowItWorks" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-400">
            Learn More
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;