import Skills from "./skills";

function AboutForMe({ data }) {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div>
        <div className="transition duration-300 hover:scale-110">
          <h3 className="font-bold text-2xl text-sky-500">Who Am I?</h3>
          <p>Hi, I'm {data.name}, I'm a Web Developer from colombia.</p>
          <p>
            My passion for web development was born during my computer
            engineering career.
          </p>
          <br />
          <h3 className="font-bold text-2xl text-sky-500">About For Me</h3>
          <ul>
            <li>
              I constantly study about good practices, new technologies and
              innovative solutions.
            </li>
            <li>My ability to learn and adapt is my greatest strength.</li>
            <li>
              I always polish my code in order to solve problems optimally and
              elegantly.
            </li>
          </ul>
        </div>
        <div>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
}

export default AboutForMe;
