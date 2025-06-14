import React from 'react';

function ProjectCard({ title, description, image, liveLink, repoLink }) {
  return (
    <div className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
      <img className="w-full" src={image} width="500" height="281" alt={title} />
      <div className="flex flex-col flex-grow p-6">
        <h3 className="h4 mb-2">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-150 ease-in-out">
            {title}
          </a>
        </h3>
        <p className="text-lg text-gray-400 flex-grow">{description}</p>
        <div className="flex justify-end mt-4">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
              Live Demo
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn-sm text-white bg-gray-700 hover:bg-gray-800 ml-3">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 