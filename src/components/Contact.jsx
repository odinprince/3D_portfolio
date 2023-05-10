import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from './canvas'
import  { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"
//  template_7z3urdp
//  Htc0Ctf4mc2L4i87l
//  service_d5g78ks
const Contact = () => {
  const formRef=useRef(0);
  const [form, setform] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setloading] = useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setform({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true);
    emailjs.send("service_d5g78ks","template_7z3urdp",{
      from_name:form.name,
      to_name:'Kranthi',
      from_email:form.email,
      to_email:'chandakranthikumar9@email.com',
      message:form.message,
    },"Htc0Ctf4mc2L4i87l",)
    .then(()=>{
      setloading(false);
      alert('Thank You!,I will get back to you as soon as possible');
      setform({
        name:'',
        email:'',
        message:'',
      },(error)=>{
        setloading(false);
        console.log(error);
        alert('Something went wrong');
      })

  })
  }
  return (
    <div
    className="flex flex-col-reverse flow-hidden flex-col-re xl:mt-12 xl:flex-row gap-5"
    >
    <motion.div
    className="bg-black-100 p-8 flex-[0.75]"
    variants={slideIn("left","tween",0.2,1)}
    >
      <p className={styles.heroSubText}>Get in touch with us</p>
      <p className={styles.heroHeadText}>Contact.</p>
      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-8 mt-12"
      >
      <label className="flex flex-col ">
      <span className="mb-4 font-medium ">Your Name</span>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="what's your name?"
        className="px-6 py-4 font-medium border-none outline-none rounded-xl bg-tertiary placeholder:text-secondary "
      />
        
      </label>
      <label className="flex flex-col w-full">
      <span className="mb-4 font-medium ">Your Email</span>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="what's your email?"
        className="px-6 py-4 font-medium border-none outline-none rounded-xl bg-tertiary placeholder:text-secondary "
      />
        
      </label>
      <label className="flex flex-col w-full">
      <span className="mb-4 font-medium ">Your Message</span>
      <textarea
        rows="7"
        type="text"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="what do you wanna say?"
        className="px-6 py-4 font-medium border-none outline-none rounded-xl bg-tertiary placeholder:text-secondary "
      />
        
      </label>
      <button  type="submit" className="px-8 py-3 mt-5 shadow-xl bg-tertiary rounded-xl mx-40">{loading ? 'sending' :'send'}</button>
      </form>

    </motion.div>
    <motion.div
    variants={slideIn("right","tween",0.2,1)}
    className="xl:flex-1 xl:h-auto md:h-[450px] md:w-[550px]"
    >
      <EarthCanvas/>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");
