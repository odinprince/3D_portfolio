import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'


const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return(
   <motion.div
   variants={fadeIn("up","spring",index*0.5,0.75)}
   >
    <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary sm:w-[360px] w-full p-5 rounded-2xl"
    >
      <div
      className='relative w-full h-[230px]'
      >
      <img  src={image} alt={name} className='object-cover w-full h-full ' />
      <div
      className='absolute inset-0 flex justify-end m-3 card-img_hover'
      >
        <div
        onClick={()=>window.open(source_code_link,"_blank")}
        className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
        >
          <img src={github} alt={name} className='object-contain w-2/3 h-2/3'
          />
        </div>
       
       
      </div>
        
      </div>
      <div className='mt-5'>
          <h3 className='text-xl font-bold'>{name}</h3>
          <p className='mt-2 text-secondary text-[16px]'>{description}</p>
        </div>
        <div
        className='flex flex-wrap gap-2 mt-5'
        >
          {tags.map((tag)=>(
            <p
            key={tag.name} className={`text-[16px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          )
          )}
        </div>
    </Tilt>
   </motion.div>
  )
};

const Works = () => {
  return (
   <>
    <motion.div className={textVariant()}>
    <p className={styles.heroSubText}>My works</p>
    <h2 className={styles.heroHeadText}>Projects</h2>
   </motion.div>
   <div>
   <motion.p
    variants={fadeIn("","",0.1,1)}
    className='max-w-3xl mt-3 text-secondary leading-[30px]'
   >
   Following projects showcase my skills and experience through
    real-world examples of my work.Each project is briefly described 
    with links to code repositories and live demos in it.It reflects 
    my ability to solve complex problems ,work with different technologies,
    and manage projects effectively.
   </motion.p>
   
   </div>
   <div className='flex flex-wrap mt-20 gap-7'>
  {projects.map((project,index)=>{
    return(
    <ProjectCard
      key={`project-${index}`}
      {...project}
    />
    )
  }
  )
    
  }

   </div>
   </>
  )
}

export default SectionWrapper(Works,"");
