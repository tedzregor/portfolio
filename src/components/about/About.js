import React from 'react';
import classes from "./about.css";
import myImage from "../../assets/images/my_image.jpg";
import udemyImage from "../../assets/images/udemy.png";

const About = () => {
  return (
    <div id="about">
      <h3 className="AboutTitle" style={classes.AboutTitle} >About Me</h3>
      <div className="AboutContainer" style={classes.AboutContainer}>
        <div className="MyImageBox" style={classes.MyImage}>
          <img
            src={myImage}
            alt="Teddy"
            className="MyImage"
            style={classes.MyImage}
          />
        </div>
        <div className="AboutMe" style={classes.AboutMe}>
          <div
            className="AboutDetailContainer"
            style={classes.AboutDetailContainer}
          >
            <span className="Label" style={classes.Label}>
              Introduction
            </span>
            <p className="AboutContent" style={classes.Description}>
              Hi! I'm Ted a Software Developer from Philippines, with demonstrated history of working in the software development industry. I want to step up and embrace challenges to learn more about the fast growing web technology and become a senior developer someday in global fields.
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Work Experience
            </span>
            <p className="AboutContent" style={classes.Description}>
              <a
                  href="https://cashmart.ph/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="cmph"
                  style={{ color: "#888888" }}
                >Cashmart INC. /{" "} </a>
                <a
                  href="https://cashmart.ph/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="cm"
                  style={{ color: "#888888" }}
                >
                  {" "}
                Web Developer - Taguig City Philippines /
                </a>{" "}
                Sep 2023 - Present <br />
            </p>
            <p className="AboutContent" style={classes.Description}>
              <a
                  href="https://aeroworx-asia.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="aerow"
                  style={{ color: "#888888" }}
                >Aeroworx Asia. /{" "} </a>
                <a
                  href="https://aeroworx-asia.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="aero"
                  style={{ color: "#888888" }}
                >
                  {" "}
                Web Developer - Malate Manila Philippines /
                </a>{" "}
                Jul 2022 - Feb 2023 <br />
            </p>
            <p className="AboutContent" style={classes.Description}>
              <a
                  href="https://reekoh.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="REEKOH"
                  style={{ color: "#888888" }}
                > REEKOH Inc. /{" "} </a>
                <a
                  href="https://reekoh.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="REE"
                  style={{ color: "#888888" }}
                >
                  {" "}
                Jr. Software Engineer - Makati City Philippines /
                </a>{" "}
                Apr 2019 - Oct 2019<br />
            </p>
            <p className="AboutContent" style={classes.Description}>
              <a
                  href="https://sensenit.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="SIT"
                  style={{ color: "#888888" }}
                >Smart And Sense Infotech Inc. /{" "} </a>
                <a
                  href="https://sensenit.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="SIT"
                  style={{ color: "#888888" }}
                >
                  {" "}
                Software Developer - Ortigas Pasig City Philippines /
                </a>{" "}
                Jul 2017 - Jul 2018 <br />
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Education
            </span>
            <p className="AboutContent" style={classes.Description}>
              2013-2017 BS COMPUTER SCIENCE - New Era University
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Certificate
            </span>
            <div className="UdemyContent" style={classes.Description}>
              <img
                src={udemyImage}
                alt="udemy"
                className="udemyImage"
              />
             <a
                href="https://www.udemy.com/certificate/UC-f4017518-16ac-4f82-b772-a38e5e1f6192/"
                rel="noreferrer noopener"
                target="_blank"
                alt="udemyImg"
                style={{ color: "#6789b7", marginLeft: "10px", fontSize:"1.8rem" }}
              > - The Complete Web Developer in 2023 - Andrei Neagoie
              </a> <br />
              <img
                src={udemyImage}
                alt="udemy"
                className="udemyImage"
              />
             <a
                href="https://www.udemy.com/certificate/UC-5de6183e-ba7d-4e1a-9821-88c465f03ffa/"
                rel="noreferrer noopener"
                target="_blank"
                alt="udemyImg"
                style={{ color: "#6789b7", marginLeft: "10px", fontSize:"1.8rem" }}
              > - The Complete Junior to Senior Web Developer Roadmap - Andrei Neagoie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
