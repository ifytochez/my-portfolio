import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title">
          My <span> Services</span>
        </h1>
        <div className="services-list">
          <div>
            <i className="bx bx-code" style={{ color: "#00eeff" }}></i>

            <h2>Frontend Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloremque laboriosam minima, eum cupiditate excepturi quasi omnis
              accusantium iusto dolores. Culpa, explicabo vero totam voluptatem
              accusantium repellat pariatur odio modi?
            </p>
            <a href="#" className="read">
              Learn more
            </a>
          </div>

          <div>
            <i className="bx bx-code" style={{ color: "#00eeff" }}></i>

            <h2>Coming Soon......</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloremque laboriosam minima, eum cupiditate excepturi quasi omnis
              accusantium iusto dolores. Culpa, explicabo vero totam voluptatem
              accusantium repellat pariatur odio modi?
            </p>
            <a href="#" className="read">
              Learn more
            </a>
          </div>

          <div>
            <i className="bx bx-code" style={{ color: "#00eeff" }}></i>

            <h2>Coming Soon.....</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloremque laboriosam minima, eum cupiditate excepturi quasi omnis
              accusantium iusto dolores. Culpa, explicabo vero totam voluptatem
              accusantium repellat pariatur odio modi?
            </p>
            <a href="#" className="read">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
