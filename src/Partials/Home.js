import React from "react";
import { useEffect,useState } from "react";
import Background from "./Background";
import Card from "./card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import  background from "../images/background.webp";
import SuccessModal from "./SuccessModal";

function Home({data}) {
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
      <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${background})`  }}>
      {/* <div className="absolute inset-0 h-full overflow-auto"> */}
        <Header navbar={data.navbar} />
          <div data-aos="fade-down" data-aos-duration="800" className="mt-12">
            <Card name={data.name} title={data.title} social={data.social} />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="mt-12">
            <Background title={data.about.title} description={data.about.description} />
            <Skills skills={data.skills} className="mt-12" />
            <Projects projects={data.projects} className="mt-12" />
          </div>
          <Footer onSubmit={handleFormSubmit} name={data.name} social={data.social} className="mt-12" />
          <SuccessModal
            show={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
          />
      {/* </div> */}
    </div>
    );
  }
  export default Home;