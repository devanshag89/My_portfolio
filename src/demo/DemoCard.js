import React from 'react';
import GitHubButton from "react-github-btn";

const DemoCard = ({ project: { title, description, tags, link } }) => {
  return (
    <div className="w-90 h-auto my-4">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 flex-grow">
            {description}
          </p>
          <div className="flex-grow flex flex-col justify-end">
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
              {tags.map((tag, index) => (
                <div key={index} className="px-2 py-1 border-2 border-gray-800 rounded-full dark:border-white">
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

export default DemoCard;
