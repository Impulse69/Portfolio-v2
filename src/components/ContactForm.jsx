import React from 'react';

function ContactForm() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Get in touch</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Feel free to reach out to me for collaborations, inquiries, or just to say hello!</p>
          </div>

          {/* Contact form */}
          <div className="max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white" placeholder="Your message..."></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700">Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactForm; 