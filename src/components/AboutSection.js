import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Where Nature Meets Art</h2>
            <div className="prose max-w-none text-gray-700">
              <blockquote className="text-xl italic text-green-700 mb-6 border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                "We don't just design; we care, creating a seamless and rewarding experience from start to finish."
              </blockquote>
              <p className="mb-4 text-lg">
                At Sai Scaper, we believe that Nature is one of God's greatest gifts, and our mission is to bring that gift into your everyday life. Founded by Harshith S, our passion lies in crafting stunning aquascapes, terrariums, and living ecosystems that transform ordinary spaces into extraordinary sanctuaries.
              </p>
              <p className="mb-6 text-lg">
                We provide regular maintenance services to ensure your creations stay vibrant and thriving. Our hassle-free approach lets you enjoy the tranquility and elegance of your living landscapes without any stress.
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full max-w-4xl mx-auto lg:ml-auto">
              {/* Decorative plant elements - Top */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-16 opacity-20">
                <svg viewBox="0 0 200 50" className="w-full h-full text-green-600">
                  <path d="M0 25 Q50 0 100 25 Q150 50 200 25" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Decorative plant elements - Left */}
              <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-16 h-64 opacity-20">
                <svg viewBox="0 0 50 200" className="w-full h-full text-green-600">
                  <path d="M25 0 Q0 50 25 100 Q50 150 25 200" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Decorative plant elements - Right */}
              <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-16 h-64 opacity-20">
                <svg viewBox="0 0 50 200" className="w-full h-full text-green-600">
                  <path d="M25 0 Q50 50 25 100 Q0 150 25 200" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Decorative plant elements - Bottom */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-16 opacity-20">
                <svg viewBox="0 0 200 50" className="w-full h-full text-green-600">
                  <path d="M0 25 Q50 50 100 25 Q150 0 200 25" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Video container */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video backdrop-blur-sm bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/10 to-transparent rounded-3xl" />
                <video 
                  className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;