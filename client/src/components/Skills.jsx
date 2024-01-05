import SkillsCard from "./SkillsCard";
import { DataSvg } from "../data/data";
import { RiArrowDownDoubleFill } from "react-icons/ri";


function Skills({ data }) {
  return (
    <div className="pt-4">
      <header className="flex items-center ">
        <h3 className="font-bold flex items-center mx-auto text-3xl text-sky-500  hover:text-sky-600">Skills <RiArrowDownDoubleFill /></h3>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4">

        {DataSvg.map((element, i) => (
          <SkillsCard
            src={element.src}
            title={element.title}
            key={i}
          ></SkillsCard>
        ))}
      </div>
    </div>
  );
}

export default Skills;
