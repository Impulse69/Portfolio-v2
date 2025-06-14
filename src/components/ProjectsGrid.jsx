import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsGrid({ projects }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">My Projects</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Explore a selection of my recent work, showcasing my skills and experience in various technologies.</p>
          </div>

          {/* Projects grid */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid; 