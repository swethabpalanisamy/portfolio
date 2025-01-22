import React from "react";
import { assets } from "../../assets/assets";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-container">
        <div className="contact-text">
          <h2>Contact</h2>
          <ul className="contact-links">
            <li className="contact-link">
              <a
                href="mailto:swethapalanisamy18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.emailIcon} alt="Email icon" />
              </a>
            </li>
            <li className="contact-link">
              <a
                href="https://www.linkedin.com/in/swetha-palanisamy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.linkedinIcon} alt="LinkedIn icon" />
              </a>
            </li>
            <li className="contact-link">
              <a
                href="https://github.com/swethabpalanisamy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.githubIcon} alt="Github icon" />
              </a>
            </li>
            <li className="contact-link">
              <a
                href="https://codepen.io/swethapalanisamy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.codepen} alt="CodePen icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="portfolio-footer">
        <p>Copyright © 2025 Swetha Palanisamy. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
