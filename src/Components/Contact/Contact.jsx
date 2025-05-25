import React from "react";
import "./Contact.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = (props) => {
  return (
    <>
      <div className="contact_section">
        <div className="projectHeader" style={{ marginBottom: "2rem" }}>
          <h2>Contact Me</h2>
          <p onClick={props.home}>
            <i>
              <MdKeyboardDoubleArrowLeft />
            </i>
            Back
          </p>
        </div>

        <div className="contactContainer">
          <div className="contactDetails">
            <h2>Let's Work Together</h2>
            <p className="quoto">
              Ready to turn ideas into action? Let’s collaborate to bring your
              vision to life. Whether it’s a creative project, a business goal,
              or something in between, I’m here to help make it happen. Let’s
              connect and create something great—together.
            </p>
            <div className="contactIcons">
              <div className="icon">
                <i>
                  {/* <IoIosCall /> */}
                  <img
                    style={{ filter: "invert()" }}
                    src="./Images/Call.svg"
                  ></img>
                </i>
                <div>
                  <p className="iconHeading">Phone</p>
                  <p>+91 6370093389</p>
                </div>
              </div>

              <div className="icon">
                <i>
                  {/* <MdEmail /> */}
                  <img src="./Images/gmail.svg"></img>
                </i>
                <div>
                  <p className="iconHeading">E-mail</p>
                  <p>aditya.khuntia2003@gmail.com</p>
                </div>
              </div>

              <div className="icon">
                <i>
                  {/* <FiGithub /> */}
                  <img
                    style={{ filter: "invert()" }}
                    src="./Images/github.svg"
                  ></img>
                </i>
                <div>
                  <p className="iconHeading">GitHub</p>
                  <a href="https://github.com/k-aditya20703">k-aditya20703</a>
                </div>
              </div>

              <div className="icon">
                <i>
                  {/* <FaLinkedinIn /> */}
                  <img src="./Images/linkedin.svg"></img>
                </i>
                <div>
                  <p className="iconHeading">Linkedin</p>
                  <a href="https://www.linkedin.com/in/aditya-n-khuntia/">
                    aditya-n-khuntia
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ContactForm">
            <form
              autoComplete="off"
              action="https://formsubmit.co/aditya.khuntia2003@gmail.com"
              method="post"
            >
              <div className="inputSection">
                <input required type="text" placeholder="Full Name"></input>
                <input
                  required
                  type="email"
                  placeholder="E-mail Address"
                ></input>
                <input required type="tel" placeholder="Mobile Number"></input>
                <input required type="text" placeholder="Subject"></input>
              </div>
              <textarea
                required
                minLength={50}
                placeholder="Your Message"
              ></textarea>
              <button type="submit">
                Send Message
                <i>
                  <IoIosSend />
                </i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
