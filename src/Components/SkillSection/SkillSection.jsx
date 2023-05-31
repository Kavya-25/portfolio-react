import React from 'react'
import { languges,frameworks,others } from './skillsdata';
import './SkillSection.scss'
import { Skillchip } from '../Skillchip/Skillchip';

export const SkillSection = () => {
  return (
    <div className="skill">
    <h1 className="heading">_skills</h1>
    <h3>_languages</h3>
    <div className="skill-chip-container">
      {languges.map((item, idx) => {
        return <Skillchip value={item.value} key={idx} />;
      })}
    </div>
    <h3>_libraries/frameworks</h3>
    <div className="skill-chip-container">
      {frameworks.map((item, idx) => {
        return <Skillchip value={item.value} key={idx} />;
      })}
    </div>
    <h3>_others</h3>
    <div className="skill-chip-container">
      {others.map((item, idx) => {
        return <Skillchip value={item.value} key={idx} />;
      })}
    </div>
  </div>
  )
}
