import React from "react";
import './Skillchip.scss'

export const Skillchip = ({value}) => {
  return (
    <div className="skill-chip">
      <div className="name">{value}</div>
      <div className="description"></div>
      <div className="bar"></div>
    </div>
  );
};
