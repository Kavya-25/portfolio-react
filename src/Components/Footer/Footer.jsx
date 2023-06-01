import React from "react";
import "./Footer.scss";
import { BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="footer">
      {/* <img src='/public/images/kavyaformals.jpeg' alt='' className='footimg'/> */}
      <div className="social">
        <a href="https://instagram.com/kavya__2501?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
          <BsInstagram className="sicon" />
        </a>
        <a href="https://www.linkedin.com/in/kavya-58a584208/" target="_blank">
          <FaLinkedinIn className="sicon" />
        </a>
        <a href="https://github.com/Kavya-25" target="_blank">
          <BsGithub className="sicon" />
        </a>

        <a href="https://leetcode.com/Kavya-25/" target="_bank">
          <SiLeetcode className="sicon" />
        </a>
      </div>
    </div>
  );
};
