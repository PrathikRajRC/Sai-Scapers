import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Leaf, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Leaf, number: '1,200+', label: 'Projects Completed' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-emerald-50/50 via-white to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                About Sai Scapers
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Transforming Spaces with 
                <span className="text-emerald-600"> Living Art</span>
              </h2>
            </div>

            {/* Professional Description */}
            <div className="prose max-w-none text-gray-700 mb-8">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8 shadow-sm">
                <p className="text-xl text-emerald-800 font-medium italic mb-0">
                  "Excellence in aquascaping isn't just our profession—it's our passion. We create living ecosystems that bring nature's tranquility into your everyday environment."
                </p>
                <cite className="text-emerald-600 font-semibold text-sm block mt-3">— Harshith S, Founder & Lead Designer</cite>
              </div>
              
              <p className="mb-6 text-lg leading-relaxed">
                Founded with a vision to merge artistry with nature, <strong>Sai Scapers</strong> has established itself as a premier aquascaping and terrarium design company. We specialize in creating bespoke living landscapes that transform ordinary spaces into extraordinary sanctuaries.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed">
                Our comprehensive approach encompasses design consultation, custom installation, and ongoing maintenance services. Every project is meticulously crafted using sustainable practices and premium materials, ensuring longevity and environmental responsibility.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <strong>Quality Craftsmanship:</strong> Every detail matters in our designs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <strong>Sustainability:</strong> Eco-friendly practices in all our work
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <strong>Client Excellence:</strong> Personalized service from concept to completion
                  </li>
                </ul>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 rounded-xl border-2 border-emerald-200 hover:border-emerald-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
          
          {/* Visual Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full max-w-5xl mx-auto lg:ml-auto mt-16">
              {/* Enhanced Decorative Elements - aligned with video position */}
              <div className="absolute -top-4 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-12 -right-8 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-40 blur-xl"></div>
              
              {/* Decorative design elements around the video - repositioned */}
              <div className="absolute top-0 -left-4 w-20 h-20 border-2 border-emerald-200 rounded-full opacity-50"></div>
              <div className="absolute top-2 -right-6 w-16 h-16 border-2 border-green-300 rounded-lg rotate-12 opacity-60"></div>
              <div className="absolute -bottom-2 -left-8 w-24 h-24 border-2 border-emerald-300 rounded-full opacity-40"></div>
              <div className="absolute bottom-0 -right-2 w-12 h-12 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full opacity-70"></div>
              
              {/* Floating design elements - repositioned relative to video */}
              <div className="absolute top-12 -left-12 w-6 h-6 bg-emerald-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-24 -right-10 w-4 h-4 bg-green-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 -left-6 w-5 h-5 bg-emerald-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Organic flowing lines - repositioned */}
              <div className="absolute -top-4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-30 rounded-full"></div>
              <div className="absolute -bottom-4 right-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-25 rounded-full"></div>
              
              {/* Video container with enhanced styling - normal size */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video backdrop-blur-sm bg-white/10 border border-white/20 mt-12">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-transparent rounded-2xl" />
                <video 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Additional professional elements - repositioned */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-gray-700">Eco-Friendly Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;