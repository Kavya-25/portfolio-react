import { Heading } from "../../Components/Heading/Heading";
import "./About.scss";

export const About = () => {
  return (
    <div className="about" id="about">
      <Heading title="<about_me/>" symbol="{/}" />
      <div className="container">
        <div className="left">
          <img src="/images/kavyaformals.jpeg" alt="" />
        </div>
        <div className="right">
          <p>
            I'm a final-year student at National Institute of Technology in
            Hamirpur, Himachal Pradesh, where I'm pursuing a degree in
            mathematics and scientific computing engineering. My current GPA is
            9.19. I also serve as Team Pixonoids' coordinator and lead web
            developer. Team Pixonoids is the college's top club for web
            development and photography.<br/> I work as a front-end developer who
            prioritises producing clear and efficient code.
          </p>
          <a href="/docs/Kavya Resume-1.pdf" download><button>(download_resume/)</button></a>
        </div>
      </div><br />
    </div>
  );
};
