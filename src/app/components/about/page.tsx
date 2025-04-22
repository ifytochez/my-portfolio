"use client";
import React from "react";
import Image from "next/image";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <Image
          src="/wallpaper.png"
          alt="About Me"
          width={400}
          height={400}
          className="about-glow-circle"
        />
      </div>

      <div className="about-text">
        <h2>
          About <span> Me</span>
        </h2>
        {/* <h4>Software Developer</h4> */}
        <p>
          Enthusiastic and results-driven Frontend Software Developer with a
          strong passion for building visually compelling, user-friendly, and
          responsive web applications. Proficient in modern JavaScript
          frameworks like React and Next.js, with an eye for design and
          usability. Strong advocate of clean code, scalability, and
          performance. Fast learner, excellent communicator, and a collaborative
          team player with a strong work ethic. Always eager to embrace new
          challenges and technologies in a dynamic development environment..
        </p>
        <a href="#" className="btn-box">
          More About Me...
        </a>
      </div>
    </section>
  );
};

export default About;
