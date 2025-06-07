"use client";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  <ToastContainer position="top-center" autoClose={3000} />;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dr6kd9p",
        "template_l0v92gv",
        e.target,
        "xkZSrUtFZUKZRCKI2"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-section">
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let's Work Together</h4>
          <p>
            I'm always excited to connect with like-minded people — whether
            you're looking for a passionate frontend developer to join your
            team, need help bringing your web ideas to life, or just want to
            have a tech chat. I’m open to new opportunities, collaborations, and
            freelance work. Have a project in mind or just want to say hello?
            Feel free to reach out — let's create something impactful and
            amazing together!
          </p>

          <div className="contact-list">
            <li>
              <i className="bx bxs-send"></i>
              <a href="mailto:ifeanyitochipraise@gmail.com">
                ifeanyitochipraise@gmail.com
              </a>
            </li>

            <li>
              <i className="bx bxs-phone"></i>
              <a href="tel:+2348133213198">08133213198</a>
            </li>
          </div>

          <div className="contact-icons">
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
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              required
              disabled={loading}
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Enter Your Email"
              required
              disabled={loading}
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              required
              disabled={loading}
            />
            <textarea
              name="message"
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
              required
              disabled={loading}
            />
            <input
              type="submit"
              className="send"
              disabled={loading}
              value={loading ? "Sending..." : "Submit"}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
