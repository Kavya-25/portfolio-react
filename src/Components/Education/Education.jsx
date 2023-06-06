import './Education.scss'
import { education } from "./educationdata";

export const Education = () => {
  return (
    <div className="education">
      <p className="heading">_education</p>
      <div className="container">
        <ul className="list-items">
           {education.map((item,id)=>{
            return (
                <li key={id}>
                    <span>{item.title} </span> // {item.score} // {item.duration} // {item.school}
                </li>
            )
           })}
        </ul>
      </div>
    </div>
  );
};
