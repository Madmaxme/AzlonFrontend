// src/components/home/CTA.jsx
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "No more debugging AI-generated code",
    "Fully containerized solutions",
    "Guaranteed working results",
    "Free tier with 15 tasks/month"
  ];

  return (
    <div id="get-started" className="bg-gradient-to-r from-purple-900 to-blue-800">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="newsletter-headline">
              Experience the Autonomous Coding Revolution
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200 max-w-3xl">
              Join thousands of researchers who have reclaimed their time and accelerated their work with Azlon's self-improving code generation.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-300" />
                  </div>
                  <p className="ml-3 text-base font-medium text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="bg-blue-800/50 backdrop-blur-sm py-8 px-6 rounded-xl shadow-xl border border-blue-600/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Started Today</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border border-blue-500 bg-blue-900/30 px-4 py-3 text-base text-white placeholder-blue-300 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border border-blue-500 bg-blue-900/30 px-4 py-3 text-base text-white placeholder-blue-300 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  >
                    Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-blue-300 text-center">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;