import React from 'react';
import '../styles/main.css';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title text-3xl md:text-5xl font-bold mb-6">Welcome to 7t Scapers: Where Nature Meets Art</h2>
            <div className="prose max-w-none text-gray-700">
              <blockquote className="about-quote text-xxl italic text-primary mb-6 border-l-4 border-primary pl-4">
                "We don't just design; we care, creating a seamless and rewarding experience from start to finish."
              </blockquote>
              <p className="mb-4">
                At 7t Scapers, we believe that Nature is one of God's greatest gifts, and our mission is to bring that gift into your everyday life. Founded by Harshith S, our passion lies in crafting stunning aquascapes, terrariums, and living ecosystems that transform ordinary spaces into extraordinary sanctuaries.
              </p>
              <p className="mb-6">
              We know that enjoying nature’s beauty shouldn’t be a chore, which is why we provide regular maintenance services to ensure your creations stay vibrant and thriving. Our hassle-free approach lets you enjoy the tranquility and elegance of your living landscapes without any stress. Whether it’s a serene pond, a lush garden, or an enchanting terrarium, we’re here to keep it flourishing, so you can simply sit back and enjoy the view.
              </p>
              <p className="mb-6">
              Join us in celebrating the art of living landscapes and discover how we can bring the magic of nature into your life.
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
          
          <div
            className="about-image-container"
            style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1 / 1',
              backgroundColor: 'transparent',
            }}
          >
            <div className="about-image-wrapper">
              <img
                src="/Team-pana.png"
                alt="Team collaboration illustration"
                className="about-image"
                style={{
                  backgroundColor: 'transparent',
                  width: '100rem',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  console.error("Error loading image:", e);
                  e.target.src =
                    "https://i.pinimg.com/736x/ba/7b/ab/ba7babda9d8a19a7186052fc5f051e14.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;