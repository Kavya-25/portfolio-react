import React from 'react'
import './Info.scss'
import {ImLocation} from 'react-icons/im'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {CiMail,CiLocationOn} from 'react-icons/ci'

export const Info = () => {
  return (
    <div className='info'>
        <div className="box">
            <CiLocationOn className='icon'/>
            <p>Himachal Pradesh,&nbsp;India</p>
        </div>
        <div className="box">
            <BsTelephoneOutbound className='icon'/>
            <p>+91 8351065546</p>
        </div>
        <div className="box">
            <CiMail className='icon'/>
            <p>kavyaa250501@gmail.com</p>
        </div>
    </div>
  )
}
