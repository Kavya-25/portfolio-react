import "./Skills.scss";
import { Heading } from "../../Components/Heading/Heading";
import { SkillSection } from "../../Components/SkillSection/SkillSection";
import { Education } from "../../Components/Education/Education";
import { Experience } from "../../Components/Experience/Experience";
import { motion } from "framer-motion";
import {FramerScroll} from '../../Components/FramerScroll/FramerScroll'

export const Skills = () => {
  return (
    <motion.div
      className="skills"
      id="skills"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
    <FramerScroll/>
      <Heading title="<_resume/>" symbol="{!}" />
      <motion.div className="skill-container">
        <div className="work">
          <Education />
          <Experience />
        </div>
        <SkillSection />
      </motion.div>
    </motion.div>
  );
};
