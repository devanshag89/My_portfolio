import React from "react";
import profile1 from "../images/profile1.jpg";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, dribbble, LinkedIn, email } }) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xl mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-40 mx-auto shadow-xl rounded-full"
            src={profile1}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-3xl sm:text-4xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xl sm:text-xl text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span class="sr-only">Dribble</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={LinkedIn}
            >
              <FaLinkedin />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;