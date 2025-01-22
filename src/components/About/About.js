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
                I’m Swetha Palanisamy, a Software Engineer with over three years
                of experience in frontend development. I have worked extensively
                on frontend development using React.js, JavaScript, TypeScript,
                HTML, and CSS to build responsive web applications.
                Additionally, I have worked on backend development, utilizing
                Java, Spring Boot, and MySQL to develop RESTful APIs and manage
                databases. I am also proficient in tools like Git, Postman, and
                Jest and have experience working with Agile methodologies.
              </p>
            </div>
          </li>
          <li className="about-item">
            <ul className="about-div">
              <li className="about-div-item">
                <div className="about-div-item-details">
                  <h3>Skills</h3>
                  <p>
                    HTML, CSS, JavaScript, React Js, TypeScript, Web Components,
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
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
