import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrContact } from "react-icons/gr";
function Contact({ data }) {
  return (
    <div className="flex h-[calc(100vh-100px)] lg:items-center items-center justify-center">
      <div className="px-0 md:px-10 lg:px-16 xl:px-20 ">
        <div className="flex items-center">
          <h3 className="font-bold flex items-center mx-auto text-3xl text-sky-500  hover:text-sky-600">
            Contact
          </h3>
        </div>

        <div className=" card p-5 cursor-pointer">
          <div className="p-5 flex flex-col rounded-xl bg-zinc-900 border-2 border-sky-900 hover:scale-105 hover:border-sky-500 transform duration-300 ">

                <div className="flex mx-auto p-2">
                <GrContact size={120} />
                </div>
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
              <h5 className="text-2xl flex items-center md:text-3xl font-medium">
                <MdEmail />
                &nbsp;{data.email}
              </h5>
              <h5 className="text-2xl flex items-center md:text-3xl font-medium ">
                <RiWhatsappFill />
                &nbsp;{data.cel}
              </h5>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
