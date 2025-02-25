import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "I used to spend more time debugging my data processing code than analyzing results. With Azlon's autonomous approach, I get working code on the first try, every time. It's been transformative for our research.",
      author: "Dr. Sarah Chen",
      position: "Data Science Lead, Genomics Institute",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "As a researcher with minimal coding experience, I was constantly hitting roadblocks. Azlon lets me describe what I need in plain English and delivers ready-to-use code that actually works with my data.",
      author: "Prof. Mark Johnson",
      position: "Department of Economics, Stanford University",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "The autonomous verification is what makes Azlon special. It doesn't just generate code—it runs it, tests it, and refines it until it works perfectly. It's like having a senior engineer who never sleeps.",
      author: "Priya Sharma, PhD",
      position: "Lead Biostatistician, Medical Research Center",
      avatar: "/api/placeholder/80/80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">From Our Community of Researchers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from scientists and data professionals who have experienced the difference of truly autonomous coding.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 shadow-md"
                />
              </div>
              <div>
                <svg className="h-12 w-12 text-blue-400 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl text-gray-100 mb-6 italic leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <div className="font-bold text-lg text-blue-200">{testimonials[activeIndex].author}</div>
                  <div className="text-blue-300">{testimonials[activeIndex].position}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center transition-colors duration-300"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/30">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Join 5,000+ researchers accelerating their work with Azlon</h3>
            <p className="text-gray-600 mb-5">Our community spans 150+ universities and research institutions worldwide</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;