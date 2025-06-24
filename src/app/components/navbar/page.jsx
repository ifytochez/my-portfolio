"use client";

import React, { useEffect, useRef, useState } from "react";
import "boxicons/css/boxicons.min.css";
import Typed from "typed.js";
import "./navbar.css";

const Navbar = () => {
  const typedElement = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        <i
          className="bx bx-menu menu-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
        ></i>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#project" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="/resume.pdf" onClick={() => setMenuOpen(false)}>
            Resume
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
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
            <a
              href="mailto:ifeanyitochipraise@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href="https://wa.me/2348133213198"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tochi-ifeanyiokoronkwo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/ifytochez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <a href="#about" className="btn-box">
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
