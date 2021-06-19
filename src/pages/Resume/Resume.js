import React from "react";
import Projects from "../Projects/Projects";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import Contact from "./Contact";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <AboutMe/>


    {/* Education */}
      <Education/>

      {/* Skills */}
        <Skills/>
     {/* Skills end */}
                
      {/* Interests */}
        <Interests/>

    {/* Projects */}
        <Projects/>


      {/* Contact */}
        <Contact/>
    
        
    </>
  );
};

export default Resume;
