import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About me</h2>
      <div className="about-content">
        <ul className="about-items">
          <li className="about-item">
            <div className="about-item-text">
              <p>
                I’m Swetha Palanisamy, a Software Engineer with 4 years of experience delivering performant and scalable React.js applications.
                Strong expertise in reusable component design, internationalization, and testing. Passionate about AI, with
                hands-on weekend projects in Generative AI, prompt engineering, and LangChain.
              </p>
            </div>
          </li>
          {/* <li className="about-item">
            <ul className="about-div">
              <li className="about-div-item">
                <div className="about-div-item-details">
                  <h3>Skills</h3>
                  <p>
                    HTML, CSS, JavaScript, React.js, Next.js, Web Components,
                    Jest
                  </p>
                </div>
              </li>
              <li className="about-div-item">
                <div className="about-div-item-details">
                  <h3>Education</h3>
                  <p>Bachelor of Engineering in Computer Science</p>
                </div>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default About;
