import { Heading } from "../../Components/Heading/Heading";
import "./About.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { FramerScroll } from "../../Components/FramerScroll/FramerScroll";

const About = () => {
  return (
    <div className="about" id="about">
    <FramerScroll/>
      <Heading title="<who_am_i/>" symbol="{/}" />
      <div className="about-container">
        <div className="left">
          <img src="/images/kavyaformals.jpeg" alt="" />
        </div>
        <div className="right">
          <p>
            I'm a final-year student at{" "}
            <span>
              National Institute of Technology Hamirpur, Himachal Pradesh
            </span>{" "}
            where I'm pursuing a degree in&nbsp;
            <span>Mathematics and Scientific Computing engineering</span>. My
            current GPA is 9.19. <br />
            I also serve as Team Pixonoids' coordinator and lead web developer.
            Team Pixonoids is the college's top club for web development and
            photography.
            <br /> I work as a <span>front-end developer</span> who prioritises
            producing clear and efficient code.
          </p>
          <a href="/docs/Kavya Resume-1.pdf" download>
            <button>
              (download_resume <AiOutlineDownload />
              /)
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
