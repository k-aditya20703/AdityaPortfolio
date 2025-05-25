import React from "react";
import "./Service.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { MdCamera } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { BiSolidVideoPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadIn } from "../../Animation/variants";

const Service = (props) => {
  return (
    <>
      <div className="serviceSection">
        <div className="projectHeader">
          <h2>Services i Offer</h2>
          <p onClick={props.home}>
            <i>
              <MdKeyboardDoubleArrowLeft />
            </i>
            Back
          </p>
        </div>

        <div className="serviceContainer">
          <motion.div
            variants={fadIn("up", 0.3)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <FaCode />
            </i>
            <p className="servicename">Web Development</p>
            <p className="servicedesc">
              By using HTML, CSS, JavaScript, ReactJs, Bootstrap, Tailwind
            </p>
          </motion.div>

          <motion.div
            variants={fadIn("up", 0.4)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <SiAdobephotoshop />
            </i>
            <p className="servicename">Graphic Design</p>
            <p className="servicedesc">
              By using Adobe Photoshop & Illustrator
            </p>
          </motion.div>

          <motion.div
            variants={fadIn("up", 0.5)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <IoIosColorPalette />
            </i>
            <p className="servicename">UI/UX Design</p>
            <p className="servicedesc">By using Adobe XD & Figma</p>
          </motion.div>

          <motion.div
            variants={fadIn("up", 0.3)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <MdCamera />
            </i>
            <p className="servicename">Photography</p>
            <p className="servicedesc">
              Portrait, Nature, WildLife, Street-Photography
            </p>
          </motion.div>

          <motion.div
            variants={fadIn("up", 0.4)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <MdEditSquare />
            </i>
            <p className="servicename">Photo Editing</p>
            <p className="servicedesc">By Using Photoshop And Lightroom</p>
          </motion.div>

          <motion.div
            variants={fadIn("up", 0.5)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="serviceCard"
          >
            <i>
              <BiSolidVideoPlus />
            </i>
            <p className="servicename">Videography</p>
            <p className="servicedesc">
              Classic Shot, Drone Shot, Indoor & Outdoor{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Service;
