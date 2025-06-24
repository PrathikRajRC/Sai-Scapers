import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-green-200 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-emerald-800">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Have questions or ready to start your project? We're here to help bring your vision to life.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <form className="bg-white shadow-xl rounded-lg p-6 sm:p-8 border-t-4 border-emerald-500">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your Name" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="your@email.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your message here..." required></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 mb-8 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <FiMail className="mr-3 text-emerald-600" />
                  <a href="mailto:saiscaper.harshith@gmail.com" className="hover:text-emerald-600 transition-colors duration-300">saiscaper.harshith@gmail.com</a>
                </p>
                <p className="flex items-center text-gray-600">
                  <FiPhone className="mr-3 text-emerald-600" />
                  <a href="tel:+9916294824" className="hover:text-emerald-600 transition-colors duration-300">+91 9916294824</a>
                </p>
                <p className="flex items-center text-gray-600">
                  <FiMapPin className="mr-3 text-emerald-600" />
                  Banashankari 3rd Stage, Bengaluru, Karnataka, India
                </p>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FiFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FiInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FiTwitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;