import React from 'react'
import {FaGithub,FaLinkedinIn,FaFacebook,FaInstagram} from 'react-icons/fa'
const social_links = () => {
  const links =[
    {
      id:1,
      child:(
        <>
        LinkedIn <FaLinkedinIn size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/ahsan-habib-636533290/',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
        FaceBook <FaFacebook size={30}/>
        </>
      ),
      href: 'https://www.facebook.com/profile.php?id=100092839736950',
      style: 'rounded-tr-md'
    },
    {
      id:3,
      child:(
        <>
        GitHub <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/ahsanauddry027',
      style: 'rounded-tr-md'
    },
    {
      id:4,
      child:(
        <>
        Instagram <FaInstagram size={30}/>
        </>
      ),
      href: 'https://www.instagram.com/_ah_saaaan_/',
      style: 'rounded-br-md'
    }
  ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
    <ul>
    {links.map(({id,child,href,style})=>(
      // eslint-disable-next-line no-useless-concat
      <li key={id} className={'flex justify-between items-center w-40 h-14 bg-gray-500 ml-[-100px] hover:rounded-lg hover:ml-[-10px] duration-500 px-2' + " "+style}><a href={href}
      className='flex justify-between w-full text-white px-1' target='_blank' rel='noreferrer'>{child}</a></li>

    ))}
      
    </ul>
    </div>
  )
}

export default social_links