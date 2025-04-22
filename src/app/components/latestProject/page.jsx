import React from "react";
import "./latest.css";

const projects = [
  {
    title: "Aibanc Technologies",
    description:
      "Aibanc is a financial platform offering essential money services through simple subscription plans. Our goal is making access inclusive, affordable and frictionless for you.",
    image: "/aibanc.png",
    link: "#",
  },
  {
    title: "Aibanc Technologies",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos in aspernatur eum...",
    image: "/aibanc.png",
    link: "#",
  },
  {
    title: "Aibanc Technologies",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos in aspernatur eum...",
    image: "/aibanc.png",
    link: "#",
  },
];

const LatestProject = () => {
  return (
    <section>
      <div id="portfolio">
        <div className="main-text" id="project">
          <h2>
            Latest <span>Project</span>
          </h2>

          <div className="portfolio-content">
            {projects.map((project, idx) => (
              <div className="row" key={idx}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="layer">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link}>
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
