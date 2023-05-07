import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
import Particle_gen from './components/particles ';
const App = () => {
  return (
    <>
<BrowserRouter>
  <div className='relative z-0 bg-primary'>
  <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
  
  <Navbar/>
  <Hero/>
  
   </div>
   <div >
   <Particle_gen />
  <About/>
  
 

  
  <div >

  <Experience/>
  
  <Tech/>
  <Works/>
  <Feedbacks/>
  </div>
</div>
  <div className='relative z-0'>
  <Contact/>
  <StarsCanvas/>
  
  </div>
  </div>

</BrowserRouter>



</>
  )
}

export default App;

  