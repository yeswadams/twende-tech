import React from "react";
import SoftDev from "../assets/software-developer.png";
import DataAnalyst from "../assets/data-analyst.png";
import CyberSec from "../assets/cyber-security.png";
import CloudEng from "../assets/cloudengineer.png";
import Uxui from "../assets/uxdesign.png";


const CareerPathPreview = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-start mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Career Path Preview</h2>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-2 items-start mx-auto px-4">
          <div className="bg-white rounded-lg border-2 border-gray-300 p-0 flex flex-col">
            <img className="rounded-t-lg object-cover mb-4"
              src= {SoftDev}
              alt="Software Developer"
            />
            <h3 className="text-[16px] font-semibold px-2 pt-3.5">Software Developer</h3>
            <p className="text-[12px] px-2 pb-4">Develops and maintains software applications.</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-300 p-0 flex flex-col">
            <img className="rounded-t-lg object-cover mb-4" src={DataAnalyst} alt="Data Analyst" />
            <h3 className="text-[16px] font-semibold px-2 pt-3.5">Data Analyst</h3>
            <p className="text-[12px] px-2 pb-4"> Analyzes data to provide insights and support decision-making.</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-300 p-0 flex flex-col">
            <img className="rounded-t-lg object-cover mb-4"
              src={CyberSec}
              alt="Cybersecurity Expert"
            />
            <h3 className="text-[16px] font-semibold px-2 pt-3.5">Cybersecurity Expert</h3>
            <p className="text-[12px] px-2 pb-4">Protects computer systems and networks from threats.</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-300 p-0 flex flex-col">
            <img className= "rounded-t-lg object-cover mb-4" src={Uxui} alt="UX/UI Designer" />
            <h3 className="text-[16px] font-semibold px-2 pt-3.5">UX/UI Designer</h3>
            <p className="text-[12px] px-2 pb-4"> Designs user interfaces and experiences for applications.</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-300 p-0 flex flex-col">
            <img className="rounded-t-lg object-cover mb-4" src={CloudEng} alt="Cloud Architect" />
            <h3 className="text-[16px] font-semibold px-2 pt-3.5">Cloud Architect</h3>
            <p className="text-[12px] px-2 pb-4">Designs and implements cloud computing infrastructure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathPreview;
