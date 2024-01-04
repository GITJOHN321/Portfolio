import { useState } from "react";
import Presentation from "../components/Presentation";
import { data } from "../data/data.js";
import AboutForMe from "../components/AboutForMe.jsx";
import Skills from "../components/skills.jsx";
import Projects from "../components/Projects.jsx";
import Profile from "../components/Profile.jsx";
function HomePage() {
  return (
    <div className="grid grid-flow-row grid-cols-6">
      <div className="bg-zinc-900 col-span-2 md:col-span-1 text-white ">
        <Profile data={data}></Profile>
      </div>
      <div className=" col-span-4 md:col-span-5">
        <div className="h-screen">
          <section id="section1">
            <Presentation data={data}></Presentation>
          </section>
        </div>
        <div className="h-screen">
          <section id="section2">
            <AboutForMe data={data}></AboutForMe>
          </section>
        </div>
        <div className="h-screen">
          <section id="section3">
            <Projects data={data}></Projects>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
