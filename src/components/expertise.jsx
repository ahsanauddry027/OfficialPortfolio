import React from 'react'
import Cplus from '../assets/pngExpertise/pngwing.com (1).png'
import Java from '../assets/pngExpertise/pngwing.com.png'
import Python from '../assets/pngExpertise/pngwing.com (3).png'
import Javas from '../assets/pngExpertise/pngwing.com (6).png'
import Reacti from '../assets/pngExpertise/ReactIcon.png'
import Tailw from '../assets/pngExpertise/pngwing.com (4).png'



const expertise = () => {
  const links = [

    {
      id:1,
      src:Cplus,
      color:"shadow-cyan-600"
    },
    {
      id:2,
      src:Java,
      color:"shadow-red-500"
    },
    {
      id:3,
      src:Python,
      color:"shadow-pink-500"
    },
    {
      id:4,
      src:Javas,
      color:"shadow-yellow-500"
    },
    {
      id:5,
      src:Reacti,
      color:"shadow-red-500"
    },
    {
      id:6,
      src:Tailw,
      color:"shadow-cyan-600"
    }
  ]
  return (
    <div name="expertise" className='bg-gradient-to-b from-gray-900  to-black w-full h-full md:h-screen '>
    <div className='md:mx-auto max-w-screen-lg p-15 md:p-5 flex flex-col justify-center items-center w-full h-full'>
      <div className='text-white pb-8 px-15 mx-auto'>
        <p className='w-1/2 font-normaltext font-bold py-5 text-2xl sm:text-5xl border-b-4 border-gray-600'>
        Working Portfolio.
        </p>
        <p className='text-2xl py-5 px'>Here are some of the fields that i love and been working on them 
        since, I fall in love with the world of Programming.
        </p>
      </div>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 md:gap-7 px-15 md:px-0'>
      {
        links.map(({id,src,color})=> (
          <div key={id} className= {`shadow-md rounded-lg ${color}`}>
          <img width={250} height={250} className="rounded-md hover:scale-110 duration-200 py-5" src={src} alt="">

          </img>
          <div className='flex justify-center items-center'>
            <button className='hover:text-cyan-500 text-white px-5 py-5 font-bold text-2xl hover:scale-110 duration-200'>
            Learn More
            </button>
            
          </div>
        </div>
        ))
      }
      
        
      </div>
    </div>


    </div>
  )
}

export default expertise