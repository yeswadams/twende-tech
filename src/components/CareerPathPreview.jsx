import React from 'react';

const CareerPathPreview = () => {
  return (
    <section className="career-path-preview">
      <h2>Your Path to a Tech Career Starts Here</h2>
      <div className="career-paths">
        <div className="career-path-item">
          <img src="/placeholder-software-developer.png" alt="Software Developer" />
          <h3>Software Developer</h3>
          <p>Develops and maintains software applications.</p>
        </div>
        <div className="career-path-item">
          <img src="/placeholder-data-analyst.png" alt="Data Analyst" />
          <h3>Data Analyst</h3>
          <p>Analyzes data to provide insights and support decision-making.</p>
        </div>
        <div className="career-path-item">
          <img src="/placeholder-cybersecurity-expert.png" alt="Cybersecurity Expert" />
          <h3>Cybersecurity Expert</h3>
          <p>Protects computer systems and networks from threats.</p>
        </div>
        <div className="career-path-item">
          <img src="/placeholder-ux-ui-designer.png" alt="UX/UI Designer" />
          <h3>UX/UI Designer</h3>
          <p>Designs user interfaces and experiences for websites and applications.</p>
        </div>
        <div className="career-path-item">
          <img src="/placeholder-cloud-architect.png" alt="Cloud Architect" />
          <h3>Cloud Architect</h3>
          <p>Designs and implements cloud computing infrastructure.</p>
        </div>
      </div>
    </section>
  );
};

export default CareerPathPreview;