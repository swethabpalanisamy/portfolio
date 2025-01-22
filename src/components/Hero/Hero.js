import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";

function Hero() {
  return (
    <section className="container">
      <div className="content">
        <p
          className="description"
          style={{ marginBottom: "1rem", fontSize: "1.25rem" }}
        >
          Hi, I'm
        </p>
        <p className="title">Swetha Palanisamy</p>
        <p className="description">
          I build products, craft interfaces, and bring ideas to life with code.
        </p>
        <div className="contact-btn-div">
          <a
            className="contact-btn"
            href="mailto:swethapalanisamy18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contact me</span>
            <img src={assets.right_arrow} alt="right-arrow" />
          </a>
          <a
            className="contact-btn"
            href="https://drive.google.com/file/d/1Wjztk8LPmSVuhtIPgpSgCytu9di2Eh9L/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Resume</span>
            <img src={assets.download} alt="download" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
