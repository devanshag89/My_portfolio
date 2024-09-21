import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = ({ projects }) => {
    return (
        <div className="p-10">
            <h1 className="mt-8 text-2xl md:text-5xl text-center gradient-heading pb-6 font-bold">My projects</h1>
            <div className="flex flex-col lg:flex-row align-center sm:items-center md:items-center justify-center max-w-8xl mx-auto mt-8 gap-10 pb-10">
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
            </div>
        </div>
    );
};

export default Projects;