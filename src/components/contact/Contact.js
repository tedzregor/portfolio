import React from "react";
import classes from "./contact.css";
import Icons from "./Icons";

const Contact = () => {
  return (
    <div>
    <section
      id="contact"
      className="ContactSection"
      style={classes.ContactSection}
    >
      <h3 className="ContactTitle" style={classes.ContactTitle}>
        Get in touch
      </h3>
      <div className="Contact" style={classes.Contact}>
        <Icons />
      </div>
      <div className="Footer" style={classes.Footer}>
        <p className="Copyright" style={classes.Copyright}>
          ©Teddy Dumagat 2020-2020 All rights reserved.
        </p>
      </div>
    </section>
    </div>
  );
};

export default Contact;
