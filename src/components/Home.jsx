import React from 'react'
import myPic from '../assets/IMG_7817.png'
import reSume from '../assets/resume.pdf'
import {Link} from "react-scroll";

const Home = () => {
  return (
  <div name="home" className='h-screen w-full  bg-gradient-to-b from-black via-black to bg-gray-900 '>
    
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
    <div className='px-20 flex flex-col justify-center h-full'>
    <h1 className='font-bold text-4xl sm:text-5xl text-white'>A Software & Web Dev.</h1>
    <p className=' sm:text-2xl text-gray-500 py-5 max-w-md'>Utilise the expertise of a seasoned software engineer and 
    web developer to realise the boundless possibilities of your digital aspirations. 
    We create complex code that gives your ideas life as the innovation architects. <br/> 
    </p>
    <div className='flex justify-between items-center'>
      <Link to="expertise" smooth duration={900} className='text-white text-xl sm:text-2xl w-fit px-6 py-3 my-2 flex items-center rounded-md capitalize
      bg-gradient-to r from bg-cyan-400 to-blue-700 hover:scale-110 duration-200 font-bold'>
        Portfolio
      </Link>
      <button className='ml-4 text-white text-xl sm:text-2xl w-fit px-7 py-3 my-2 flex items-center rounded-md capitalize
      bg-gradient-to r from bg-cyan-400 to-blue-700 hover:scale-110 duration-200 font-bold'>
        <a href={reSume} download={true}>Resume</a>
      </button>
      </div>
    </div>
    <div className=''>
    <img src ={myPic} alt='My Profile' className='w-1/3 rounded-2xl mx-auto md:w-2/3'/>
    </div>
    

    </div>
       
  </div>
  )
}

export default Home