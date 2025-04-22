import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let's Work Together</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi
            est, veritatis, et iusto numquam officia commodi saepe qui repellat
            sapiente blanditiis delectus architecto? Aperiam libero atque veniam
            maiores iste!
          </p>
          <div className="contact-list">
            <li>
              <i className="bx bxs-send"></i>ifeanyitochipraise@gmail.com
            </li>

            <li>
              <i className="bx bxs-phone"></i>08133213198
            </li>
          </div>

          <div className="contact-icons">
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
        </div>

        <div className="contact-form">
          <form action="">
            <input type="" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />

            <input type="" placeholder="Enter Your Subject" required />
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
              required
            ></textarea>

            <input type="submit" value="submit" className="send" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
