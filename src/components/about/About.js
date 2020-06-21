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
              After running and managing my small business internet-cafe for almost 3 years in Philippines, 
              I decided to go back on track to try new challenge and become a web developer in global fields.
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
                Smart And Sense Infotech Inc.{" "}
              </a>{" "}
              / Software Developer - Ortigas Pasig City Philippines <br />
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
              Like
            </span>
            <p className="AboutContent" style={classes.Description}>
              Udemy Tutorials, Coffee, Chess, Technology, Dota2, Music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
