import React from 'react';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { LoopRepeat } from 'three';


const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'>
   <div className={`${styles.paddingX} absolute top-[120px] flex flex-row gap-5 items-start justify-center w-[80%] `}>
    <div className='flex flex-col items-center justify-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#915eff] '></div>
    <div className='w-1 h-40 violet-gradient sm:h-80'></div>
    </div>
    
      <div>
        <h1 className={`${styles.heroHeadText}`}>Hi,&nbsp; I'm <span className='text-[#915eff]'> &nbsp;Kranthi</span></h1>
        <p className='items-start mt-5 text-2xl font-semibold'>I develop 3D visuals,user
         <p>interfaces and web applications </p></p>
      </div>
     
   </div>
   <ComputersCanvas/>
   <div className='xs:bottom-10 absolute bottom-32 flex justify-center w-full'>
   <a href='#about'>
    <div className='w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2 '>


   <motion.div
    animate={{
      y:[0,24,0]
    }}
    transition={{
      duration:1.5,
      repeat:Infinity,
      repeatType:'loop'
    }}
    className='w-3 h-3 rounded-full bg-secondary mb-1 mt-1 flex justify-center'
   />
       </div>
   </a>
   </div>

   </section>
  )
}

export default Hero