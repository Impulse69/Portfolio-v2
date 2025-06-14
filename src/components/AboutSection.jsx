import React from 'react';

function AboutSection() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">About Me</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">This section will contain my detailed biography, skills, experience, and education.</p>
          </div>

          {/* Content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* About text */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">My Journey So Far</h3>
                <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              {/* Skills */}
              <h4 className="h4 mb-2">Skills</h4>
              <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 1.22l-5.5 5.5-2.5-2.5a.995.995 0 00-1.404 0L.31 7.01a.995.995 0 000 1.404l2.5 2.5a.995.995 0 001.404 0l7.5-7.5a.995.995 0 000-1.404l-1.4-1.4a.995.995 0 00-1.404 0z" />
                  </svg>
                  <span>React, JavaScript, HTML, CSS</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 1.22l-5.5 5.5-2.5-2.5a.995.995 0 00-1.404 0L.31 7.01a.995.995 0 000 1.404l2.5 2.5a.995.995 0 001.404 0l7.5-7.5a.995.995 0 000-1.404l-1.4-1.4a.995.995 0 00-1.404 0z" />
                  </svg>
                  <span>Tailwind CSS, Bootstrap</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 1.22l-5.5 5.5-2.5-2.5a.995.995 0 00-1.404 0L.31 7.01a.995.995 0 000 1.404l2.5 2.5a.995.995 0 001.404 0l7.5-7.5a.995.995 0 000-1.404l-1.4-1.4a.995.995 0 00-1.404 0z" />
                  </svg>
                  <span>Git, GitHub</span>
                </li>
              </ul>
            </div>

            {/* About image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-left">
              <img className="mx-auto" src="https://via.placeholder.com/500" width="500" height="500" alt="About" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection; 