
import React , { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets';
const Navbar = () => {
  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);
  return (
   <nav className={`${ styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
   <div className='flex items-center justify-between w-full mx-auto'>
   <Link to="/" className='flex items-center gap-2' onClick={()=> {
    setActive(" ");
    window.scrollTo(0,0);
   }}>
   <img src={logo} alt='logo' className='object-contain w-9 h-9'/>
    <p className='flex font-bold '>Kranthi  &nbsp; <span className='hidden sm:block'> Kumar</span></p>
   </Link>
  <ul className='flex-row hidden gap-10 list-none sm:flex '>
  {navLinks.map((link)=>(
    <li
    key={link.id}
    className={`${
      active===link.title? "text-white": "text-secondary"
    } hover:text-white text-[18px]` }
    onClick={()=> setActive(link.title)}
    >
      <a href={`#${link.id}`}>{link.title}
        
      </a>
    </li>
  ))}
    
  </ul>
  
   <div className='flex items-center justify-end flex-1 sm:hidden'>
   <img src={toggle ? close : menu} alt='menu' 
    onClick={()=>setToggle(!toggle)}/>
   <div className={`${!toggle ? 'hidden' :'flex'}  absolute right-0 top-[40px] min-w-[140px] black-gradient mx-4 my-6 z-10 p-6 rounded-xl`}>
   <ul className='flex flex-col justify-end list-none '>
  {navLinks.map((link)=>(
    <li
    key={link.id}
    className={`${
      active===link.title? "text-white": "text-secondary"
    } hover:text-white text-[18px] mt-3` }
    onClick={()=> {
      setActive(link.title);
      setToggle(!toggle);
      }
    }
    
    >
      <a href={`#${link.id}`}>{link.title}
        
      </a>
    </li>
  ))}
    
  </ul>
   </div>
    
   </div>
   </div>
   </nav>
  )
}

export default Navbar
