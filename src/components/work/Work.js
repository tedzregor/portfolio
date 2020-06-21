import React from 'react';
import classes from "./work.css";
import WorkCard from "./WorkCard.jsx";

function Work() {
  return (
    <div id="work" className="WorkSection" style={classes.WorkSection}> 
      <h3 className="WorkTitle" style={classes.WorkTitle}>My Works</h3>
      <div className="Works" style={classes.Works}>
        <WorkCard />
      </div>
    </div>
  );
}

export default Work;
