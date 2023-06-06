import './Experience.scss'
import {experience} from  './experiencedata'

export const Experience = () => {
  return (
    <div className="experience">
         <p className="heading">_experience</p>
      <div className="container">
        <ul className="list-items">
           {experience.map((item,id)=>{
            return (
                <li key={id}>
                    <span>{item.title} </span>  // {item.duration} // {item.school}
                </li>
            )
           })}
        </ul>
      </div>
    </div>
  )
}
