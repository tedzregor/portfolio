import myportfolio from "../assets/images/portfolio.png";
import cardgenerator from "../assets/images/cardgenerator.jpg";
import expressjs from "../assets/images/expressjs.svg";
import facerecognitionbrain from "../assets/images/facerecognition.png";
import resume from "../assets/RESUME.pdf";
import sit_family from "../assets/images/sit_family.jpg"
import sit_dinner from "../assets/images/sit_dinner.jpg"
import sit_id from "../assets/images/sit_id.jpg"

import reekoh from "../assets/images/reekoh.jpg"
import cert_emp from "../assets/images/ztmcert.jpg"
import udemy_cert from "../assets/images/cert.png"
import my_icafe from "../assets/images/my_icafe.jpg"

import reekoh_meeting from "../assets/images/reekoh_meeting.jpg"
import reekoh_meeting2 from "../assets/images/reekoh_meeting2.jpg"
import reekoh_group from "../assets/images/reekoh_group.jpg"


export const imgs = [
    {
      image: udemy_cert,
      details: "Udemy Certification from ztm"
    },
    {
      image: reekoh_meeting,
      details: "My Smart and Sense Family"
    },
    {
      image: reekoh_meeting2,
      details: "My Smart and Sense Family"
    },
    {
      image: reekoh_group,
      details: "My Smart and Sense Family"
    },
    {
      image: sit_family,
      details: "My Smart and Sense Family"
    },
    {
      image: sit_dinner,
      details: "My Smart and Sense team dinner"
    },
    {
      image: sit_id,
      details: "My first professional ID."
    },
    {
      image: reekoh,
      details: "reekoh with team."
    }
    ,
    {
      image: cert_emp,
      details: "reekoh certificate"
    },
    {
      image: my_icafe,
      details: "my internet cafe"
    }
]

export const works = [
    {
      image: myportfolio,
      name: "My Portfolio",
      link: "https://github.com/pages",
      about:
        "Welcome to my portfolio that you are seeing now, I built this from design and wrote in React with react-router.",
      githublink: "https://github.com/"
    },
    {
      image: cardgenerator,
      name: "Card Generator",
      link: "https://tedzregor.github.io/card_generator/",
      about:
        "card-generator is a react app with third party API integration such as jsonplaceholder and robohash API.",
      githublink: "https://github.com/tedzregor/card_generator"
    },
    {
      image: facerecognitionbrain,
      name: "Face Recognition",
      link: "https://smart-brain-ted.herokuapp.com/",
      about:
        "Face recognition built in React with backend NodeJS, Express and Mysql written fromn scratch with user login, ranking, and image face detection feature with the integration of machine learning face detection API. The Clarifai AI",
      githublink: "https://github.com/tedzregor/smart-brain"
    }
  ];

  export const frontEnd = [
    {
      icon: "fab fa-html5",
      skill: "HTML5",
      color: "#DE4B24",
      level: 2
    },
    {
      icon: "fab fa-css3-alt",
      skill: "CSS3",
      color: "#1773AC",
      level: 2
    },
    {
      icon: "fab fa-js",
      skill: "JQuery",
      color: "#E9D64D",
      level: 2
    },
    // { // To Study Soon
    //   icon: "cib-typescript",
    //   skill: "TypeScript",
    //   color: "#0377C7",
    //   level: 3
    // },
    {
      icon: "fab fa-react",
      skill: "React",
      color: "#02D3F7",
      level: 2
    }
    // { // To Study Soon
    //   icon: "fab fa-bootstrap",
    //   skill: "BootStrap",
    //   color: "#543D79",
    //   level: 2
    // },
    // { // To Study Soon
    //   icon: "",
    //   skill: "Semantic UI",
    //   color: "#33B8AD",
    //   level: 1
    // }
  ];
  
  export const backEnd = [
   
    // { // To Study Soon
    //   icon: "fab fa-python",
    //   skill: "Python",
    //   color: "#0461B4",
    //   level: 2
    // },
    
    {
      // icon: "fab fa-cc-amex",
      icon: "fab fa-centos",
      skill: "Knex.js",
      color: "#DE4B24",
      level: 2
    },
    {
      icon: "fab fa-node",
      skill: "Nodejs",
      color: "#82CA25",
      level: 1
    },
    {
      // icon: "fab fa-cc-amex",
      icon: expressjs,
      skill: "Express",
      color: "#02D3F7",
      level: 1
    },
    {
      icon: "fas fa-database",
      skill: "PostgreSql",
      color: "#315F8E",
      level: 2
    },
    //{
    //   icon: "fab fa-envira",
    //   skill: "MongoDB",
    //   color: "#4AA93C",
    //   level: 3
    // },
    {
      icon: "fab fa-java",
      skill: "JavaSE",
      color: "#DE4B24",
      level: 1
    },
    {
      icon: "fas fa-database",
      skill: "MySQL",
      color: "#315F8E",
      level: 1
    },
    {
      icon: "fab fa-php",
      skill: "PHP-Laravel",
      color: "#315F8E",
      level: 2
    }
  ];
  
  export const infrastructure = [
    {
      icon: "fab fa-aws",
      skill: "AWS",
      color: "#222F3C",
      level: 3
    },
    {
      icon: "fab fa-docker",
      skill: "Docker",
      color: "#3493D0",
      level: 3
    },
    {
      icon: "fab fa-docker",
      skill: "CI/CD",
      color: "#02D3F7",
      level: 3
    }
  ];
  
  export const others = [
    {
      icon: "fab fa-git",
      skill: "Git",
      color: "#3B2C00",
      level: 2
    },
    {
      color: "#312f30",
      icon: "fab fa-github",
      skill: "Github",
      level: 2
    },
    {
      color: "#0066ff",
      icon: "fab fab fa-jira",
      skill: "JIRA",
      level: 2
    },
    {
      color: "#ff3300",
      icon: "fab fa-ubuntu",
      skill: "Linux:Ubuntu/Kubuntu/CentOS",
      level: 2
    }
    ,
    {
      color: "#ff3300",
      icon: "fas fa-user-tie",
      skill: "Postman",
      level: 2
    }
  ];

  export const icons = [
    {
      url: resume,
      icon: "fas fa-file",
      name: "Resume"
    },
    {
      url: "https://github.com/tedzregor",
      icon: "fab fa-github",
      name: "Github"
    },
    {
      url: "https://www.facebook.com/teddy.dumagat",
      icon: "fab fa-facebook",
      name: "Facebook"
    }
  ];