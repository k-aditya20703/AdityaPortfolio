import React, { useState } from "react";
import "./Resume.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Education } from "../../Constants/Education";
import { Skill } from "../../Constants/Skill";

const Resume = (props) => {
  const [education, setEducation] = useState(true);
  const [skill, setSkill] = useState(false);
  const [about, setAbout] = useState(false);

  const handleEducation = () => {
    setSkill(false);
    setAbout(false);
    setEducation(true);
  };

  const handleSkill = () => {
    setEducation(false);
    setAbout(false);
    setSkill(true);
  };
  const handleAbout = () => {
    setEducation(false);
    setSkill(false);
    setAbout(true);
  };
  return (
    <>
      <div className="resumeSection">
        <div className="projectHeader" style={{ marginBottom: "2rem" }}>
          <h2>Resume</h2>
          <p onClick={props.home}>
            <i>
              <MdKeyboardDoubleArrowLeft />
            </i>
            Back
          </p>
        </div>

        <div className="resumeContainer">
          <div className="resumeOptions">
            <h2>Why you hire me ?</h2>
            <p>
              A dedicated computer science graduate student, Eager to kickstart
              my career as a frontend developer, proficient in designing a
              webpage and eager to apply what I learn in a real-time project.
              Seeking a entry level role, where I can apply my knowledge to
              develop a real-time project .
            </p>
            <div className="resumeBtnSection">
              <button
                onClick={handleEducation}
                style={{
                  backgroundColor: education ? "white" : "#252525",
                  color: education ? "black" : "white",
                }}
              >
                Education
              </button>
              <button
                onClick={handleSkill}
                style={{
                  backgroundColor: skill ? "white" : "#252525",
                  color: skill ? "black" : "white",
                }}
              >
                Skills
              </button>
              <button
                onClick={handleAbout}
                style={{
                  backgroundColor: about ? "white" : "#252525",
                  color: about ? "black" : "white",
                }}
              >
                About me
              </button>
            </div>
          </div>
          <div className="resumeDisplay">
            {education && (
              <div className="resumeEducation">
                {Education.map((education) => {
                  return (
                    <div className="educationCard">
                      <p className="year">{education.year}</p>
                      <p className="course">{education.course}</p>
                      <p className="source">{education.source}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {skill && (
              <div className="resumeSkill">
                {Skill.map((skill) => {
                  return (
                    <div className="skillCard">
                      <div className="skillicon">
                        <img src={skill.icon}></img>
                      </div>
                      <p className="skillname">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {about && (
              <div className="resumeAbout">
                <ul>
                  <li>
                    <p className="aboutHeading">Name :</p>
                    <p className="aboutValue">Aditya Narayan Khuntia</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Contact :</p>
                    <p className="aboutValue">+91 6370093389</p>
                  </li>
                  <li>
                    <p className="aboutHeading">E-mail :</p>
                    <p className="aboutValue">aditya.khuntia2003@gmail.com</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Age :</p>
                    <p className="aboutValue">23 years old</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Gender :</p>
                    <p className="aboutValue">Male</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Status :</p>
                    <p className="aboutValue">Single</p>
                  </li>
                  <li>
                    <p className="aboutHeading">City :</p>
                    <p className="aboutValue">Hyderabad</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Nationality :</p>
                    <p className="aboutValue">Indian</p>
                  </li>
                  <li>
                    <p className="aboutHeading">Experience :</p>
                    <p className="aboutValue">Fresher</p>
                  </li>

                  <li>
                    <p className="aboutHeading">Language :</p>
                    <p className="aboutValue">English, Hindi, Odia</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
