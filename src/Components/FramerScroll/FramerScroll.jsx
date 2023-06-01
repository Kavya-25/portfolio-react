import './FramerScroll.scss'
import { motion, useScroll } from "framer-motion"

export const FramerScroll = () => {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className='progress-bar'/> 
    
  )
}
