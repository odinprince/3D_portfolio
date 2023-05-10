import React,{useRef} from 'react'
import { motion } from 'framer-motion' 
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn,textVariant } from '../utils/motion'
import {  testimonials } from '../constants'
import { Tilt } from 'react-tilt'




const Testicard=({testimonial,name,designation,company,image,index})=>{
  const cardRef = useRef(null);


    const handleMouseMove = (e) => {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      cardRef.current.style.setProperty('--x', `${x}px`);
      cardRef.current.style.setProperty('--y', `${y}px`);
      cardRef.current.style.setProperty('--gradient-size', '5%');
    };
  
    const handleMouseLeave = () => {
      cardRef.current.style.setProperty('--gradient-size', '0%');
    };
return(
  <motion.div
  variants={fadeIn("","spring",index*0.5,0.75)}
  className='bg-black-100 xs:w-[320px] w-full rounded-3xl p-10 '
  id='card'
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  >
  <Tilt
  options={{
    speed:450,
    max:45,
    scale:1,
  }}
  >
   <p className='text-[48px] font-bold'
   >"</p>
   <div className='mt-1 text-[18px]'>
   <p>{testimonial}</p>
   <div className='flex items-center justify-between gap-1 mt-14'>
   <div className='flex flex-col flex-1'>
   <p><span className='text-blue-500'>@ </span>{name}</p>
   <p className='text-[14px] text-secondary'>{designation} of {company} </p>
  </div>
  <div className='w-[35px] h-[35px]  flex justify-center items-center'>
    <img src={image} alt={name} className='rounded-full'
    />
  </div>
   </div>
   </div>
    </Tilt>
  </motion.div>
)
};
const Feedbacks = () => {
  return (
    <div
    className='mt-20 bg-black-100'
    >
    <div
    className={`bg-tertiary min-h-[300px] rounded-2xl ${styles.padding}  `}
    >
      <motion.div
      variants={textVariant()}
      >
       
    <p className={styles.heroSubText}>What others say</p>
    <h2 className={styles.heroHeadText}>Testimonials.</h2>
   

      </motion.div>
      <div
      className={`flex flex-wrap  pb-8 gap-7 mt-10 shadow-2xl `}
     
      >
        {testimonials.map((testimonial,index)=>(
          <Testicard key={testimonial.name} index={index} {...testimonial}/>
        )
          
        )}
      </div>
    </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"");
