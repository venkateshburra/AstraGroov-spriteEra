import React from "react";

import { About as AboutComponent } from "../components/AboutSection/About";
import { Principals } from "../components/PrincipalSection/Principals";
import { Faculty } from "../components/FacultySection/Faculty";
import { Footer } from "../components";
import { BlogsData } from "../components/FacultySection/BlogsData";

const About = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <AboutComponent />
      <Principals />
      <Faculty />
      <BlogsData />
    </div>
  );
};

export default About;
