import { useState, useEffect } from "react";
import Presentation from "../components/Presentation";
import { data } from "../data/data.js";
import AboutForMe from "../components/AboutForMe.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import Profile from "../components/Profile.jsx";
import { TiThMenu } from "react-icons/ti";
import { useActives } from "../context/ActiveContext.jsx";
function HomePage() {
  const {isOpen, setIsOpen} = useActives()
  const [orientacion, setOrientacion] = useState(getOrientacion());

  function getOrientacion() {
    return window.innerWidth > window.innerHeight ? true : false;
  }
  const manejarCambioDeOrientacion = () => {
    if(getOrientacion()){
      setIsOpen(true)
    }
  };
  useEffect(() => {
    window.addEventListener("orientationchange", manejarCambioDeOrientacion);
    window.addEventListener("resize", manejarCambioDeOrientacion);

    // Desuscribirse de los eventos al desmontar el componente
    return () => {
      window.removeEventListener(
        "orientationchange",
        manejarCambioDeOrientacion
      );
      window.removeEventListener("resize", manejarCambioDeOrientacion);
    };
  }, []);
  return (
    <div>
      <div className="relative grid  sm:grid-cols-6">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed z-10 top-100 right-5 bottom-10 rounded-full bg-zinc-900 border-2 border-gray-400 p-5 opacity-30 hover:opacity-90 sm:hidden transition duration-300"
        >
          <TiThMenu size={50} />
        </button>
        <div
          className={`bg-zinc-900 sm:col-span-2 md:col-span-2 xl:col-span-1 text-white border-4 border-zinc-900 border-r-sky-500 h-[4000px] lg:h-full transition duration-300
      ${isOpen && "visibility"}`}
          id="content"
        >
          <Profile data={data}></Profile>
        </div>
        {isOpen && (
          <div className="sm:col-span-4 md:col-span-4 xl:col-span-5">
            <div className="h-screen sm:mb-5">
              <section id="section1">
                <Presentation data={data}></Presentation>
              </section>
            </div>
            <div className="h-screen sm:mb-5">
              <section id="section2">
                <AboutForMe data={data}></AboutForMe>
              </section>
            </div>
            <div className="sm:h-screen sm:mb-5">
              <section id="section3">
                <Projects data={data}></Projects>
              </section>
            </div>
            <div className="sm:h-screen">
              <section id="section4">
                <Contact data={data}></Contact>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
