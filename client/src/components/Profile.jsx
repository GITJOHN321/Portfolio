import photo from "../assets/img/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md";
import { useActives } from "../context/ActiveContext";

function Profile({ data }) {
  const {isOpen, setIsOpen} = useActives()
  return (
    <div className=" sticky top-0">
      <div className="text-center pt-5">
        <img
          src={photo}
          alt=""
          className="rounded-full w-32 mx-auto border-4 border-sky-500"
        />
        <h1 className="font-bold p-2 text-xl">{data.name}</h1>

        <div className="flex  items-center">
          <div className="flex mx-auto p-2">
            <Link
              to={data.github}
              target="_blank"
              className="px-1 hover:scale-105 transform duration-300"
            >
              <FaGithub fill="white" size={40} />
            </Link>
            <Link
              to={data.linkedIn}
              target="_blank"
              className="px-1 hover:scale-105 transform duration-300"
            >
              <FaLinkedin fill="white" size={40} />
            </Link>
          </div>
        </div>
      </div>

      <div className="pl-10 sm:pl-5 lg:pl-7 text-medium ">
        <a
          className="flex items-center  py-2 px-1 font-medium hover:text-sky-500 hover:scale-105 active:text-white duration-300  text-5xl sm:text-2xl justify-start sm:justify-normal link"
          href="#section1" onClick={() => setIsOpen(true)}
        >
          <FaHome />
          &nbsp;Home
        </a>
        <a
          className="flex items-center  py-2 px-1 font-medium hover:text-sky-500 hover:scale-105 active:text-white duration-300 text-nowrap link text-5xl sm:text-2xl justify-start sm:justify-normal"
          href="#section2" onClick={() => setIsOpen(true)}
        >
          <FaUser />
          &nbsp;About For Me
        </a>
        <a
          className="flex items-center py-2 px-1 font-medium hover:text-sky-500 hover:scale-105 active:text-white  duration-300 link text-5xl sm:text-2xl justify-start sm:justify-normal"
          href="#section3" onClick={() => setIsOpen(true)}
        >
          <FaProjectDiagram />
          &nbsp;Projects
        </a>
        <a className="flex items-center py-2 px-1 font-medium hover:text-sky-500 hover:scale-105 active:text-white  duration-300 link text-5xl sm:text-2xl justify-start sm:justify-normal" href="#section4" onClick={() => setIsOpen(true)}>
          <MdContactMail />
          &nbsp;Contact
        </a>
 
      </div>
    </div>
  );
}

export default Profile;
