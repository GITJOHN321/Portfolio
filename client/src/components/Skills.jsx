import SkillsCard from "./SkillsCard";
import { DataSvg } from "../data/data";

function Skills({ data }) {
  return (
    <div className="pt-4">
      <header>
        <h3 className="font-bold text-3xl text-sky-500 text-center">Skills</h3>
      </header>

      <div className="grid grid-cols-4 pt-4">

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
