import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div data-aos="fade-right">
        <div className="company">Imperial College London</div>
        <div className="role">B.Eng Computing</div>
        <div className="description">Achieved First Class</div>
      </div>
      <div className="year" data-aos="fade-left">
        2014
      </div>

      <div className="year" data-aos="fade-right">
        2017
      </div>
      <div data-aos="fade-left">
        <div className="company">KPMG</div>
        <div className="role">Technology Consultant, Software & Devops</div>
        <div className="description">I worked on ....</div>
        <div className="tech">INSERT LOGOS OF TECH HERE</div>
      </div>

      <div data-aos="fade-right">
        <div className="company">Accenture</div>
        <div className="role">
          Software Development Consultant, Experience & Custom Engineering
        </div>
        <div className="description">I worked on ....</div>
        <div className="tech">INSERT LOGOS OF TECH HERE</div>
      </div>
      <div className="year" data-aos="fade-left">
        2019
      </div>
    </div>
  );
}
