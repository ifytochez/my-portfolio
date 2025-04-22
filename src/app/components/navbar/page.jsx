"use client";

import React, { useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";
import Typed from "typed.js";
import "./navbar.css";

const Navbar = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        <nav className="navbar">
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Skill</a>

          <a href="#">Resume</a>

          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Ifeanyi Tochi</h1>
          <h3>
            And I'm a <span className="text" ref={typedElement}></span>
          </h3>
          <p>
            I'm a web Developer with extensive experience of over 3 years.{" "}
            <br />
            Expertise is frontend design
          </p>

          <div className="home-sci">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <a href="#" className="btn-box">
            More About Me
          </a>
        </div>

        <div className="home-img">
          <div className="glow-circle"></div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
