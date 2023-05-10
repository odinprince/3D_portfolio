import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon})=>{
   return (
      <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className={`w-full rounded-[20px] green-pink-gradient p-[1px] `}
      
   
      >
      <div
      options={
        {
          max:45,
          scale:1,
          speed:450
        }
      }
      className='bg-tertiary rounded-[20px] flex justify-evenly items-center py-5 px-12 flex-col min-h-[280px]'
      >
      <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
      <h3 className='font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
      </Tilt>
   )
}
const About = () => {
  return (
   <div 
    >
   <motion.div className={textVariant()}>
    <p className={styles.heroSubText}>INTRODUCTION</p>
    <h2 className={styles.heroHeadText}>Overview.</h2>
   </motion.div>
   <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 leading-[30px] max-w-3xl text-secondary'>
   I'm a skilled software developer with experience in TypeScript
    and JavaScript, and expertise in frameworks like React, Node.js,
     and Three.js. I'm a quick learner and collaborate closely with
      clients to create efficient, scalable, and user-friendly
       solutions that solve real-world problems. Let's work together
        to bring your ideas to life!
   </motion.p>
   <div className='flex flex-wrap gap-10 mt-20'>
   {services.map((service,index)=>(
     <ServiceCard key={service.title} index={index} {...service} />
   ))}

   </div>
   </div>
  )
}

export default SectionWrapper(About,"about");
 