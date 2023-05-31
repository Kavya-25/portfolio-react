import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
import {HiOutlineClipboardDocumentCheck} from 'react-icons/hi2'

export const Home = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleType = (count) => {
  
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
      <button>(_see portfolio <HiOutlineClipboardDocumentCheck/>/)</button><br />
      <img src="/images/vrgirl.png" alt="" />
    </div>
  );
};
