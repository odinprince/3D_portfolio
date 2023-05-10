import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import Particle_gen from './particles '
const Experiencecard=({experience})=>(
  <VerticalTimelineElement
   contentStyle={{background:'#1d1836',color:'#fff'}}
   contentArrowStyle={{borderRight:'7px solid #232631'}}
   date={experience.date}
   iconStyle={{background:experience.iconBg}}
   icon={ 
    <div>
      <img src={experience.icon} alt={experience.company_name} />
    </div>
   }
  
  
  
  >
  <div>
  <h3 className='text-xl font-bold'>{experience.title}</h3>
    <div className='mt-3 text-lg font-semibold'>{experience.company_name}</div>
    <div>{experience.date}</div>
   <ul className='mt-4 ml-8 space-y-2 list-disc'>
    {experience.points.map((point,index)=>(
      <li
      key={`experience-point-${index}`}
      className='tracking-wider text-[14px]'
      >
        {point}
      </li>
    )
      
    )}
   </ul>
  </div>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <motion.div>
  <motion.p className={`${styles.heroSubText}`} variants={fadeIn("right","spring",0.25,1)}>My Work</motion.p>
  <motion.p className={`${styles.heroHeadText}`} variants={fadeIn("left","tween",0.25,1)}>What I Have Done So Far</motion.p>
 <div className='flex flex-col mt-20'>
  <VerticalTimeline>
    {experiences.map(
      (experience,index)=>(
        <Experiencecard  key={index} experience={experience} />
      )
    )}
  </VerticalTimeline>
 </div>
 </motion.div>
  )
}

export default SectionWrapper(Experience,"work");
