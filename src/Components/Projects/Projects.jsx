import React from "react";
import "./Projects.css";
import { FaLink } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Projects = (props) => {
  return (
    <>
      <div className="projectSection">
        {" "}
        <div className="projectHeader">
          <h2>Recent Projects</h2>
          <p onClick={props.home}>
            <i>
              <MdKeyboardDoubleArrowLeft />
            </i>
            Back
          </p>
        </div>
        <div className="projectContainer">
          <div className="card">
            <div className="cardImg">
              <img src="./Images/project1.jpg"></img>
            </div>
            <p className="projectName">Kitchenary</p>
            <p className="projectDesc">
              Delicious meals delivered to your door – fast, fresh, and
              hassle-free. Explore top local restaurants and order your
              favorites in just a few clicks!
            </p>

            <div className="projectSkill">
              <img src="./Images/html.svg"></img>
              <img src="./Images/css.svg"></img>
              <img src="./Images/js.svg"></img>
              <img src="./Images/react.svg"></img>
            </div>

            <p className="projectLink">
              <FaLink />
              Visit Project
            </p>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src="./Images/project3.jpg"></img>
            </div>
            <p className="projectName">ToDo App</p>
            <p className="projectDesc">
              Delicious meals delivered to your door – fast, fresh, and
              hassle-free. Explore top local restaurants and order your
              favorites in just a few clicks!
            </p>

            <div className="projectSkill">
              <img src="./Images/html.svg"></img>
              <img src="./Images/css.svg"></img>
              <img src="./Images/js.svg"></img>
              <img src="./Images/react.svg"></img>
            </div>

            <p className="projectLink">
              <FaLink />
              Visit Project
            </p>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src="./Images/project5.jpg"></img>
            </div>
            <p className="projectName">Portofolio</p>
            <p className="projectDesc">
              Delicious meals delivered to your door – fast, fresh, and
              hassle-free. Explore top local restaurants and order your
              favorites in just a few clicks!
            </p>

            <div className="projectSkill">
              <img src="./Images/html.svg"></img>
              <img src="./Images/css.svg"></img>
              <img src="./Images/js.svg"></img>
              <img src="./Images/react.svg"></img>
            </div>

            <p className="projectLink">
              <FaLink />
              Visit Project
            </p>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src="./Images/project4.jpg"></img>
            </div>
            <p className="projectName">Kitchenary</p>
            <p className="projectDesc">
              Delicious meals delivered to your door – fast, fresh, and
              hassle-free. Explore top local restaurants and order your
              favorites in just a few clicks!
            </p>

            <div className="projectSkill">
              <img src="./Images/html.svg"></img>
              <img src="./Images/css.svg"></img>
              <img src="./Images/js.svg"></img>
              <img src="./Images/react.svg"></img>
            </div>

            <p className="projectLink">
              <FaLink />
              Visit Project
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
