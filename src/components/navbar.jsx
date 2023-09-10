
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import myLogo from '../assets/MyLogo.png';
import {Link} from "react-scroll";
const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nav,setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'expertise'
    },
    {
      id: 4,
      link: 'contact'
    },
  ]
  
  return (
   
    <div className="flex justify-between items-center w-full h-15 md:h-25 fixed text-white bg-black px-4 md:py-4">
      <div>
        <h1 className="font-sign text-3xl md:text-5xl ml-2 hover:scale-110 duration-200 cursor-pointer">
          Ahsan auddRy
        </h1>
        
      </div>
      <div className='ml-25 items-center cursor-pointer hover:scale-110 duration-200'>
      <img src={myLogo} alt='My logo' width={200} height={200}/>
      </div>
      <ul className="hidden md:flex ">
      {links.map(link=> (
        <li key={link.id} className="px-10 text-2xl text-gray-500 cursor-pointer capitalize font-medium  hover:scale-110 hover:text-white duration-200">
          <Link to={link.link} smooth duration={900}>{link.link}</Link>
        </li>
      ))}
        
      </ul>
      <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden hover:scale-110 hover:text-white duration-200">
        {nav  ? <FaTimes size={25}/> :  <FaBars size={25}/>}
      </div>
{/* if only nav is true then eigula dekha jabe */}

      {nav &&( 
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from black to bg-gray-800 text-gray-500'>
        {links.map(link=> (
        <li key={link.id} className="py-10 cursor-pointer capitalize text-4xl hover:text-white duration-200">
          <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={900}>{link.link}</Link>
        </li>
      ))}
      </ul>
      )}
      
    </div>
  );
};

export default navbar;
