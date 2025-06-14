import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
      <h1 className="h1 mb-4" data-aos="fade-up">404 - Page Not Found</h1>
      <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">The page you are looking for does not exist.</p>
      <Link to="/" className="btn text-white bg-purple-600 hover:bg-purple-700" data-aos="fade-up" data-aos-delay="400">Go to Home</Link>
    </div>
  );
}

export default NotFound; 