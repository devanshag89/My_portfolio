import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className=" mt-20">
    <h1 className="mt-8 text-2xl md:text-5xl text-center gradient-heading pb-6 font-bold">My Skills</h1>
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} />
        );
      })}
    </div>
    </div>
  );
}

export default Skills;