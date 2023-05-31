import React from 'react'
import './PortfolioGrid.scss'
import { imgcol1, imgcol2, imgcol3 } from './portfoliogriddata'

export const PortfolioGrid = () => {
  return (
    <div className='portfoliogrid'>
        <div className="row"> 
  <div className="column">
  {imgcol1.map((item)=>{
    return(
        <div key={item.id} className='project'>
            <a href={item.href} target="_blank">
                <img src={item.url} alt="" />
            </a>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.href}><button>Visit</button></a>
        </div>
    )
  })}
  </div>
  <div className="column">
  {imgcol2.map((item)=>{
    return(
        <div key={item.id} className='project'>
            <a href={item.href} target="_blank">
                <img src={item.url} alt="" />
            </a>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.href}><button>Visit</button></a>
        </div>
    )
  })}
  </div>  
  <div className="column">
  {imgcol3.map((item)=>{
    return(
        <div  key={item.id} className='project'>
            <a href={item.href} target="_blank">
                <img src={item.url} alt="" />
            </a>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.href}><button>Visit</button></a>
        </div>
    )
  })}
  </div>
 
</div>
    </div>
  )
}
