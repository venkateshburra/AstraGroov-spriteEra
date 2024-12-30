import React from "react";

import { About as AboutComponent } from "../components/AboutSection/About";
import { Principals } from "../components/PrincipalSection/Principals";
import { Faculty } from "../components/FacultySection/Faculty";
import { Footer } from "../components";
import { BlogsData } from "../components/FacultySection/BlogsData";
import { UiNavBar } from "../components/UiSection/UiNavBar";
import { Toaster } from "react-hot-toast";

const About = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Toaster position="top-center" />
      <AboutComponent />
      <Principals />
      <Faculty />
      <BlogsData />
      <UiNavBar />
    </div>
  );
};

export default About;
