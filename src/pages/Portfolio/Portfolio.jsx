import React from 'react'
import './Portfolio.scss'
import { Heading } from '../../Components/Heading/Heading'
import { PortfolioGrid } from '../../Components/PortfolioGrid/PortfolioGrid'
import {FramerScroll} from '../../Components/FramerScroll/FramerScroll'

export const Portfolio = () => {

  return (
    <div className='portfolio' id='portfolio'>
     <FramerScroll/>
         <Heading title="<portfolio/>" symbol="{/**/}" />
         <div className="portfolio-container">
          <PortfolioGrid/>
         </div>
    </div>
  )
}
