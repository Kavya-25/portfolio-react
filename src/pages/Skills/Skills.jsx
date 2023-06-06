import "./Skills.scss";
import { Heading } from "../../Components/Heading/Heading";
import { SkillSection } from "../../Components/SkillSection/SkillSection";
import { Education } from "../../Components/Education/Education";
import { Experience } from "../../Components/Experience/Experience";
import { FramerScroll } from "../../Components/FramerScroll/FramerScroll";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <FramerScroll />
      <Heading title="<_resume/>" symbol="{!}" />
      <div className="skill-container">
        <div className="work">
          <Education />
          <Experience />
        </div>
        <SkillSection />
      </div>
    </div>
  );
};

export default Skills;
