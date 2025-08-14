import React from "react";
import './About.css';
import "animate.css";

// Highlights array with proper JSX icons
const highlights = [
  {
    icon: <i className="fa-solid fa-code"></i>,
    title: "Web Development",
    description: "Built full-stack web apps with modern frameworks."
  },
  {
    icon: <i class="fa-solid fa-brain"></i>,
    title: "AI & ML",
    description: "Experimented with machine learning models and tools."
  },
  {
    icon: <i class="fa-solid fa-rocket"></i>,
    title: "Projects",
    description: "Worked on real-world projects from scratch."
  },
  {
    icon: <i class="fa-brands fa-think-peaks"></i>,
    title: "Problem Solving",
    description: "Enjoy solving complex technical challenges."
  }
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-title">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="about-subtitle">
          A passionate developer who believes in the power of technology to solve real-world problems
        </p>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h3 className="journey-title">My Journey</h3>
          <p>
            As a dedicated software engineer, I've always been fascinated by the intersection of
            artificial intelligence and web development. My approach to learning is fundamentally
            different — I believe in <span className="highlight">learning by constructing</span>
            rather than just following textbooks.
          </p>
          <p>
            This philosophy has led me to build numerous projects that not only showcase my technical
            skills but also demonstrate my ability to solve real-world problems. From stock market
            prediction systems to full-stack web applications, each project has been a stepping stone
            in my continuous learning journey.
          </p>
          <p>
            I'm particularly drawn to AI tools and machine learning because they represent the future
            of technology. Combined with my web development skills, I strive to create intelligent,
            user-friendly applications that make a meaningful impact.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="icon-wrapper">
                {highlight.icon}
              </div>
              <h4 className="highlight-title">{highlight.title}</h4>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
