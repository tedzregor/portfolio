import React from 'react'
import Main from "./components/main/Main";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contact/Contact";
import Photos from "./components/photo_slide/photo";

const TopPage = ()=> {
    return (
      <div>
        <Main />
        <About />
        <Photos />
        <Work />
        <Skills />
        <Contacts />
      </div>
    );
}

export default TopPage;
