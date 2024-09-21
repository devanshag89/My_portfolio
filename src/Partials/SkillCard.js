import React from "react";

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className="m-4 w-40 flex-none mx-auto text-center text-white p-5 rounded-xl border-4 bg-transparent border-border-blue shadow-lg shadow-border-blue transition duration-300 hover:shadow-2xl cursor-pointer transition-all duration-700 hover:scale-110">
      {skillIcon}
      <p className="text-xl font-semibold mt-4">{skillName}</p>
    </div>
  );
};

export default SkillCard;