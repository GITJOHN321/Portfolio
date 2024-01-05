import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function ProjectCard({data}) {
  return (
    <Link to={data.url} target="_blank">
      <div className=" card p-2 xl:p-5 cursor-pointer relative">
        <div className="absolute top-5 right-5 xl:top-8 xl:right-8 z-10  ">
          <FaGithub fill="white" size={40} />
        </div>
        <div className="flex flex-col rounded-xl bg-zinc-900 border-2 border-sky-900 hover:scale-105 hover:border-sky-500 transform duration-300 ">
          <header className="rounded-t-xl overflow-hidden">
            <img src={data.image} alt="" />
          </header>

          <div className="px-3">
            <h5 className="text-2xl text-sky-500 md:text-3xl font-medium mt-3 uppercase">
              {data.title}
            </h5>
            <p className="text-slate-150 text-lg my-3">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
