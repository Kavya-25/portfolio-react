import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleType = (count) => {
    console.log(count);
  };
  return (
    <div className="home">
      <div className="name">
        <p>// HI, I AM KAVYA . I AM A </p>
        <h1>
          (  "
          <span>
            <Typewriter
              words={[" _student ", "_web-developer"]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
          "  )
        </h1>
      </div>
      <img src="/images/orange girl.svg" alt="" />
    </div>
  );
};
