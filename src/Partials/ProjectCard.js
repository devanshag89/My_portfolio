import React from "react";
import GitHubButton from "react-github-btn";

const ProjectCard = ({ project: { title, image, description, tags, link } }) => {
  return (
    <div className="w-80 h-auto my-4 transition-all duration-700 hover:scale-110">
      <div className="bg-transparent shadow-lg shadow-border-blue  hover:shadow-2xl border-4 border-border-blue rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
        <a href={link}>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={image}
            alt=""
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href={link}>
            <h5 className="text-white font-bold text-xl tracking-tight mb-2 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-200 mb-3 dark:text-gray-400 flex-grow">
            {description}
          </p>
          <div className="flex-grow flex flex-col justify-end">
            <div className="mt-2 mb-4 flex flex-wrap justify-center items-center gap-1">
              {tags.map((tag, index) => (
                <div key={index} className="px-1 py-1 border-2 border-gray-100 text-white rounded-full dark:border-black">
                  {tag}
                </div>
              ))}
            </div>
            <div className="w-full text-center align-bottom">
              <GitHubButton href={link} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star on GitHub">
                Star
              </GitHubButton>
              {"  "}
              <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork on GitHub">
                Fork
              </GitHubButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProjectCard;