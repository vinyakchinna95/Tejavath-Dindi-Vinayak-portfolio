import { useEffect } from "react";
import About from "./components/About";
import "./App.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Project";
import "animate.css";
import ResearchPublications from "./components/ResearchPublications";

function App() {
  useEffect(() => {
    // Always scroll to top on refresh
    window.scrollTo(0, 0);

    const createMeteor = (count, height, width, opacity, angle, colors, durationRange) => {
      for (let i = 0; i < count; i++) {
        const meteor = document.createElement("div");
        const color = colors[i % colors.length];
        meteor.classList.add("meteor");
        meteor.style.setProperty("--from", color);
        meteor.style.setProperty("--opacity", opacity);
        meteor.style.setProperty("--angle", angle);
        meteor.style.setProperty("--height", height);
        meteor.style.setProperty("--width", width);
        meteor.style.setProperty("--left", Math.random() * 100 + "%");
        meteor.style.setProperty(
          "--duration",
          durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]) + "s"
        );
        meteor.style.setProperty("--delay", Math.random() * 10 + "s");
        document.body.appendChild(meteor);
      }
    };

    createMeteor(
      40,
      "80px",
      "2px",
      "0.7",
      "45deg",
      ["hsl(0, 84%, 60%)", "hsl(270, 100%, 70%)", "hsl(240, 100%, 70%)", "hsl(180, 100%, 70%)"],
      [2, 5]
    );

    createMeteor(
      30,
      "50px",
      "1px",
      "0.5",
      "30deg",
      ["hsl(0, 65%, 45%)", "hsl(30, 100%, 70%)", "hsl(270, 100%, 70%)", "hsl(180, 100%, 70%)"],
      [4, 8]
    );

    createMeteor(
      25,
      "30px",
      "1px",
      "0.3",
      "60deg",
      ["hsl(240, 100%, 70%)", "hsl(270, 100%, 70%)"],
      [6, 10]
    );

    // Disable animations on first scroll
    const disableAnimations = () => {
      document.querySelectorAll(".animate__animated").forEach((el) => {
        el.classList.remove("animate__animated");
        el.classList.remove("animate__fadeIn");
        el.classList.remove("animate__fadeInDown");
        el.style.opacity = "1"; // make sure it's fully visible
        el.style.transform = "none"; // remove animation transforms
      });
      window.removeEventListener("scroll", disableAnimations); // only run once
    };

    window.addEventListener("scroll", disableAnimations, { once: true });

    return () => {
      document.querySelectorAll(".meteor").forEach((m) => m.remove());
      window.removeEventListener("scroll", disableAnimations);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Dindi Vinayak_Resume-1.pdf";
    link.download = "sample.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fixed scrollToSection function accepting the id string without '#'
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar animate__animated animate__fadeIn animate__delay-0s ">
        <div className="logo animate__animated animate__fadeInDown animate__delay-0s">TDV</div>
        <div className="nav-links animate__animated animate__fadeInDown animate__delay-0s">
          <a href="#main">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div id="main" className="container">
        <h1 className="animate__animated animate__fadeInDown animate__delay-1s">Tejavath Dindi Vinayak</h1>
        <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
          AI Enthusiast • Full Stack Developer • Problem Solver
        </h2>
        <p className="animate__animated animate__fadeInDown animate__delay-2s">
          Passionate about AI tools, machine learning, and web development. I
          believe in{" "}
          <strong style={{ color: "hsl(0, 84%, 60%)" }}>
            learning by constructing
          </strong>
          , not just following books. Let's build something amazing together!
        </p>
        <div className="buttons">
          <button
            onClick={handleDownload}
            className="btn-primary animate__animated animate__fadeInDown animate__delay-2s"
          >
            Download CV
          </button>
          <button
            className="btn-outline animate__animated animate__fadeInDown animate__delay-2s"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <section id="about" className="about-section">
        <About />
      </section>

      <section id="skill" className="Skills-section">
        <Skills />
      </section>

      <section id="project" className="project-section">
        <Projects />
      </section>
      <ResearchPublications/>
      <section id="contact" className="contact-section">
        <Contact />
      </section>

      

    </>
  );
}

export default App;
