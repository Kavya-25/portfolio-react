import React, {useState} from 'react';
import './Navbar.scss';
import {motion, AnimatePresence} from "framer-motion";
import {CgMenuMotion,CgClose} from 'react-icons/cg'
import {GrClose} from 'react-icons/gr'
import {AiFillHome} from 'react-icons/ai'
export const Navbar=()=> {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <div className="nav-container">
      <header>
        <div  onClick={isOpen}>
          <CgMenuMotion className="menu"/>
        </div>       
      </header>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh",width:"100%", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div  onClick={closeMenu}><CgClose className="btn_close"/></div>
              <motion.a href="/"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}
              >("_Home")<img src='/images/pageimg/home.png'/></motion.a>
              <motion.a href="about"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
              >("About_me")<img src='/images/pageimg/about.png' alt=''/>
              </motion.a>
              <motion.a href="resume"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }}
              >("_resume")<img src='/images/pageimg/resume.png' alt=''/></motion.a>
              <motion.a href="portfolio"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
              >("_Portfolio")<img src='/images/pageimg/portfolio.png'></img></motion.a>
              <motion.a href="contact"
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.4}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.2
                    }
                 }}
              >("Contact_me")<img src='/images/portfolioimg/contact.png'></img></motion.a>
            </motion.div>
          )
        }    
      </AnimatePresence>  
    
    </div>
  );
}