import React from 'react';
import classes from "./about.css";
import myImage from "../../assets/images/my_image.jpg";

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
              Hi! Im Ted who raised in Philippines Metro Manila. 
              I own and manage small internet-cafe business for a living in Philippines.
              I want to step up to go back on track and embrace challenges to become a full-stack developer someday in global fields.
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Work Experience
            </span>
            <p className="AboutContent" style={classes.Description}>
              July 2017 - July 2018
              <a
                href="https://sensenit.com/"
                rel="noreferrer noopener"
                target="_blank"
                alt="SIT"
                style={{ color: "#888888" }}
              >
                {" "}
                / Smart And Sense Infotech Inc.{" "}
              </a>{" "}
              / Software Developer - Ortigas Pasig City Philippines <br />
            </p>
            <p className="AboutContent" style={classes.Description}>
              April 2019 - October 2019
              <a
                href="https://reekoh.com/"
                rel="noreferrer noopener"
                target="_blank"
                alt="REE"
                style={{ color: "#888888" }}
              >
                {" "}
                / REEKOH Inc.{" "}
              </a>{" "}
              / Jr. Software Engineer - Paseo De Roxas Makati City Philippines <br />
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Education
            </span>
            <p className="AboutContent" style={classes.Description}>
              2013-2017 BS COMPUTER SCIENCE - New Era University, Central Ave Quezon City Philippines
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Likes
            </span>
            <p className="AboutContent" style={classes.Description}>
              Udemy, Coffee, Technology, Music - Alle Menschen werden Brüder.. (ode to joy).
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Motto
            </span>
            <p className="AboutContent" style={classes.Description}>
              "Humility comes wisdom."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
