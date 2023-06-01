import React from 'react'
import { Heading } from '../../Components/Heading/Heading'
import './Contact.scss'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {CiMail,CiLocationOn} from 'react-icons/ci'
import {Info} from '../../Components/Info/Info'
import {FormSection} from '../../Components/Form/FormSection'
import { Footer } from '../../Components/Footer/Footer'

export const Contact = () => {
  return (
    <div className='contact'>
    <Heading symbol={"{//}"} title="<contact_me/>" />
      <div className="contact-container">
    <Info/>
    <FormSection/>
      </div>
      <Footer/>
    </div>
  )
}
