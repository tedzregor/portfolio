import React from 'react'
import Nav from '../navigation/Nav';
import Typist from 'react-typist';
import classes from './Main.css'
import Particles from 'react-particles-js';

const main = () => {
    return(
        
        <header>
            <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
              <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 40
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    </div>
           <Nav />
           <Typist avgTypingDelay={20} startDelay={1500}>
               <h2 className="Const" style={classes.Const}>
               {"WelcomeToMyPage = {"}
               </h2>
               <p className="GreetingContent" style={classes.GreetingContent}>
               name:{" "}
               <span className="Attention" style={classes.Attention}>
                   "Teddy Dumagat"
               </span>{" "}
               ,
               <br />
               location:{" "}
               <span className="Attention" style={classes.Attention}>
                   "Quezon City Philippines"
               </span>{" "}
               , <br />
               occupation:{" "}
               <span className="Attention" style={classes.Attention}>
                   "Software Developer"
               </span>{" "}
               <br />
               </p>
               <h2 className="Braces" style={classes.Braces}>
               {"};"}
               <span className="Stick" style={classes.Stick}>
                   |
               </span>
               </h2>
           </Typist>
          <button type="button" className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'><a href="#about"> <i className="fa fa-arrow-down" aria-hidden="true"></i></a></button>
        </header>
    );
}

export default main