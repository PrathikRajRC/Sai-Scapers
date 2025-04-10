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
                At Sai Scapers, we believe that Nature is one of God's greatest gifts, and our mission is to bring that gift into your everyday life. Founded by Harshith S, our passion lies in crafting stunning aquascapes, terrariums, and living ecosystems that transform ordinary spaces into extraordinary sanctuaries.
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
          <div className="relative w-full max-w-4xl mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube-nocookie.com/embed/pQ9__bgJLCo?si=6xOjOiuaGxGgdXBl&rel=0&autoplay=1&mute=1&loop=1&playlist=pQ9__bgJLCo" 
                title="YouTube video player" 
                frameBorder="2" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;