import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  background from "../images/background.webp";
import SkillCard from "./SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import SuccessModal from "./SuccessModal";

function Skill ({data}) {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleFormSubmit = () => {
      setIsSuccessModalOpen(true);
    };
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${background})` }}>
            <div data-aos="fade-down" data-aos-duration="800">
            <Header navbar={data.navbar} />
            <div className="m-10 mt-20">
                <h1 className="mt-8 text-2xl md:text-4xl text-center gradient-heading pb-6 font-bold">My Skills</h1>
                <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
                    {data.skills.map((skill) => {
                        return (
                            <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} />
                        );
                    })}
                </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
            <Footer onSubmit={handleFormSubmit} name={data.name} social={data.social} />
            </div>
            <SuccessModal
            show={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}

export default Skill;