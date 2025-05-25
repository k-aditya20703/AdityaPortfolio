import React, { useState } from "react";
import "./Home.css";
import { GoHome } from "react-icons/go";
import { LuFolderCode } from "react-icons/lu";
import { GoCodeOfConduct } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { IoMailOpenOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import cv from "../../assets/CV.pdf";
import { LuDownload } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import Resume from "../Resume/Resume";
import { motion } from "framer-motion";
import { fadIn } from "../../Animation/variants";

const Home = () => {
  const [home, setHome] = useState(true);
  const [project, setProject] = useState(false);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);
  const [resume, setResume] = useState(false);

  const handleHome = () => {
    setProject(false);
    setService(false);
    setContact(false);
    setResume(false);
    setHome(true);
  };

  const handleProject = () => {
    setHome(false);
    setService(false);
    setContact(false);
    setResume(false);
    setProject(true);
  };

  const handleService = () => {
    setHome(false);
    setProject(false);
    setContact(false);
    setResume(false);
    setService(true);
  };

  const handleContact = () => {
    setHome(false);
    setProject(false);
    setService(false);
    setResume(false);
    setContact(true);
  };

  const handleResume = () => {
    setHome(false);
    setProject(false);
    setService(false);
    setContact(false);
    setResume(true);
  };
  return (
    <>
      <section className="container">
        <div className="display">
          {home && (
            <>
              <div className="left_section">
                <motion.div
                  variants={fadIn("right", 0.3)}
                  initial="hide"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="download"
                >
                  <div className="logo">
                    <img src="./Images/logo.jpg"></img>
                  </div>

                  <div className="modelcv"></div>

                  <p>
                    Passionate about creating & designing websites with the best
                    engaging interface.
                  </p>

                  <a style={{ width: "100%" }} href={cv} download="cv">
                    <button className="download-btn">
                      Download CV <LuDownload />
                    </button>
                  </a>
                </motion.div>

                <motion.div
                  variants={fadIn("right", 0.3)}
                  initial="hide"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="skill_icons"
                >
                  <img src="./Images/html.svg"></img>
                  <img src="./Images/css.svg"></img>
                  <img src="./Images/js.svg"></img>
                  <img src="./Images/react.svg"></img>
                  <img src="./Images/bootstrap.svg"></img>
                  <img src="./Images/tailwind.svg"></img>
                  <img src="./Images/photoshop.svg"></img>
                  <img src="./Images/xd.svg"></img>
                  <img
                    src="./Images/github.svg"
                    style={{ filter: "invert(100%)" }}
                  ></img>
                  <img src="./Images/sql.svg"></img>
                  <p>
                    Visit the project section to see the work done with these
                    web technoligies
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadIn("down", 0.3)}
                initial="hide"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="middle_section"
              >
                <div className="model">
                  <img src="./Images/model.png"></img>
                  <div>
                    <h2>Aditya Narayan</h2>
                    <div className="textSlider">
                      <Marquee speed={30}>
                        <div className="textWrapper">
                          <p>I'm a Coder</p>
                        </div>

                        <div className="textWrapper">
                          <p>I'm a Graphics Designer</p>
                        </div>

                        <div className="textWrapper">
                          <p>I'm a Editor</p>
                        </div>

                        <div className="textWrapper">
                          <p>I'm a Photographer</p>
                        </div>
                      </Marquee>
                    </div>
                    <p className="about">
                      A Dedicated computer science graduate student, eager to
                      kickstart my career as a frontend developer, proficient in
                      designing a webpage & eager to apply what i learn in a
                      real time project. Seeking a entry level role, where i can
                      apply my knowledge to develope a real time project .
                    </p>
                  </div>
                </div>

                <div className="midBox">
                  <img src="./Images/logo.jpg"></img>
                  <div className="action_btn">
                    <button onClick={handleProject} className="projects">
                      Projects
                    </button>
                    <button onClick={handleService} className="service">
                      Services
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadIn("left", 0.3)}
                initial="hide"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="right_section"
              >
                <div className="education">
                  <ul>
                    <li>B.Tech in Computer Science , BPUT(Odisha) </li>
                    <span className="year">(2020 - 2024)</span>
                    <li>Intermediate in Science under CHSE Odisha </li>
                    <span className="year">(2018 - 2020)</span>
                    <li>Matriculation Under BSE Odisha </li>
                    <span className="year">(2017 - 2018)</span>
                  </ul>

                  <button onClick={handleResume} className="Watch">
                    Watch More{" "}
                    <i>
                      <MdKeyboardDoubleArrowDown />
                    </i>
                  </button>
                </div>

                <div className="contact">
                  <p>
                    <span>Web Developer & Designer</span> Here you can checkout
                    my social media handles to know about my projects and design
                    skills briefly.
                  </p>
                  <button onClick={handleContact} className="contact_btn">
                    Contact me
                  </button>

                  <div className="socialMedia">
                    <a href="https://www.facebook.com/aditya.khuntia.351">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/_adii07__/">
                      <div className="icon">
                        <FaInstagram />
                      </div>
                    </a>
                    <a href="https://github.com/k-aditya20703">
                      <div className="icon">
                        <FiGithub />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-n-khuntia/">
                      <div className="icon">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
          {project && <Projects home={handleHome} />}
          {service && <Service home={handleHome} />}
          {contact && <Contact home={handleHome} />}
          {resume && <Resume home={handleHome} />}

          <motion.div
            variants={fadIn("down", 0.3)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="sideNav"
          >
            <i
              style={{
                backgroundColor: home ? "white" : "transparent",
                color: home ? "black" : "white",
              }}
              onClick={handleHome}
            >
              <GoHome />
            </i>
            <i
              style={{
                backgroundColor: project ? "white" : "transparent",
                color: project ? "black" : "white",
              }}
              onClick={handleProject}
            >
              <LuFolderCode />
            </i>
            <i
              style={{
                backgroundColor: service ? "white" : "transparent",
                color: service ? "black" : "white",
              }}
              onClick={handleService}
            >
              <GoCodeOfConduct />
            </i>
            <i
              style={{
                backgroundColor: resume ? "white" : "transparent",
                color: resume ? "black" : "white",
              }}
              onClick={handleResume}
            >
              <GrTechnology />
            </i>
            <i
              style={{
                backgroundColor: contact ? "white" : "transparent",
                color: contact ? "black" : "white",
              }}
              onClick={handleContact}
            >
              <IoMailOpenOutline />
            </i>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
