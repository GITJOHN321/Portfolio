import image1 from "../assets/img/portada1.jpg";
import { RiArrowDownDoubleFill } from "react-icons/ri";

import { useNavigate, Link } from "react-router-dom";
import { DataProjects } from "../data/data.js";
import ProjectCard from "./ProjectCard";
function Projects({ data }) {
  return (
    <div className="flex h-[calc(100vh-100px)] lg:items-center justify-center">
      <div className="px-0 md:px-10 lg:px-16 xl:px-20 pt-5 sm:pt-0">
        <div className="flex items-center pb-3">
          <h3 className="font-bold flex items-center mx-auto text-3xl text-sky-500  hover:text-sky-600">
            Projects <RiArrowDownDoubleFill />
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {DataProjects.map((element) => (
              <ProjectCard data={element} key={element.id}></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
