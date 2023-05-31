import React from 'react'
import './Heading.scss'

export const Heading = ({symbol,title}) => {
  return (
    <div className='heading'>
    <div className="symbol">{symbol}</div>
    <h1>_______{title}_______</h1>
    </div>
  )
}
