import "./Skills.scss";
import { Heading } from "../../Components/Heading/Heading";
import { SkillSection } from "../../Components/SkillSection/SkillSection";
import { Education } from "../../Components/Education/Education";
import { Experience } from "../../Components/Experience/Experience";
import { TiltComponent } from "../../Components/TiltComponent";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Heading title="<_resume/>" symbol="{!}" />
      <TiltComponent>
      <div className="skill-container">
        <div className="work">
        <Education/>
        <Experience/>
          </div>
   <SkillSection/>
        </div>
        </TiltComponent>
      </div>
  );
};
