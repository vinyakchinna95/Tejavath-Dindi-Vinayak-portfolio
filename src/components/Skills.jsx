import React from "react";
import "./Skills.css";
import "animate.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: ["C Language","C++/CPP","Python", "JavaScript", "React.JS", "HTML", "CSS", "Bootstrap", "MySQL", "PHP", "REST API"]
    },
    {
      title: "Development Tools",
      skills: ["VS Code", "PyCharm", "IntelliJ IDEA", "Git", "GitHub"]
    },
    {
      title: "Other Technologies",
      skills: ["Version Control", "Problem Solving", "Team Collaboration", "Project Management"]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="skills-subtitle">
          A comprehensive set of technical skills developed through hands-on projects and continuous learning
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <h3 className="category-title">{category.title}</h3>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
