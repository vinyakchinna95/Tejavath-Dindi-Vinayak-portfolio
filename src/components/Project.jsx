import React from "react";
import Slider from "react-slick";
import './Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stock from "../assets/Screenshot2025-08-01224841.jpg";
import cars from "../assets/Screenshot2025-08-01225053.jpg";
import cmr from "../assets/Screenshot2025-08-01225427.jpg";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = [
    {
      title: "Stock Market Prediction System",
      field: "AI/ML Project",
      features: [
        "Hybrid approach with RSI, Bollinger Bands, VIX, GFS, and LSTM.",
        "Uses sentiment analysis from financial news.",
        "Sector-wise stock performance analysis.",
        "Stacked LSTM for learning time-based stock patterns."
      ],
      tech: ["Deep learning", "Python", "Finance & News API", "LSTM", "Technical indicators"],
      liveDemo: "https://stockmarketforecaster.streamlit.app/",
      code: "https://github.com/vinyakchinna95/Stock-Market-Prediction-Using-Multi-Filtered-LSTM-Approach-.git",
      image: stock
    },
    {
      title: "React Landing Page",
      field: "Frontend Development",
      features: [
        "Reusable React components.",
        "Responsive design across devices.",
        "Bootstrap for layout structuring.",
        "Car showcase carousel with animations."
      ],
      tech: ["React.js", "Bootstrap", "animate.css", "JavaScript", "CSS"],
      liveDemo: "https://supercar-showcase.vercel.app/",
      code: "https://github.com/vinyakchinna95/Supercar-Showcase.git",
      image: cars
    },
    {
      title: "CMR Central Study",
      field: "Full Stack Development",
      features: [
        "Faculty upload & student download study materials.",
        "PHP backend for file uploads.",
        "Previous year papers access.",
        "Optimized secure file handling."
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      liveDemo: "https://www.linkedin.com/posts/dindi-vinayak-tejavath-ab26aa273_cmrecstudycentral-digitallearning-academicinnovation-activity-7167349825024299008-xntM/",
      code: "https://github.com/vinyakchinna95/CMR-central-study-.git",
      image: cmr
    }
  ];

  return (
    <div className="project-container">
      <header className="Project-Container-Heading">
        <h1>Featured Projects</h1>
        <p>A showcase of my journey in building innovative solutions through code.</p>
      </header>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="projects-info-wrapper">
            <div
              className="projects-info"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.7) 0%,
                  rgba(15, 15, 15, 0.65) 50%,
                  rgba(30, 30, 30, 0.6) 100%
                ), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="project-details">
                <div className="projects-heading-info">
                  <h3 className="project-name">{project.title}</h3>
                  <div className="project-feild">{project.field}</div>
                </div>

                <div className="project-features">
                  <h3 className="project-feature-heading">Key Features:</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="md-6">
                  <h4>Technology Used:</h4>
                  <div className="md-6-points">
                    {project.tech.map((t, idx) => (
                      <div key={idx}>{t}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <button onClick={() => window.open(project.liveDemo, "_blank")}>
                    Live Demo
                  </button>
                  <button onClick={() => window.open(project.code, "_blank")}>
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
