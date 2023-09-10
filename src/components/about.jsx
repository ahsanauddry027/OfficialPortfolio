import React from 'react'

const about = () => {
  return (
    <div name="about" className='w-full h-full md:h-screen bg-gradient-to-b bg-gray-900 to-black'>
      <div className='text-white max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='text-4xl p-8'><p className='font-aboutname border-b-4 border-red p-5'>About My Journey!</p></div>
      <p className='text-xl px-12 font-semibold text-gray-500'>Hello, I'm Ahsan Habib, and I want to share with you the inspiration behind my journey in software and web development.
      From a young age, I was captivated by the boundless possibilities that technology offered. 
      It was like a world of endless creativity and innovation waiting to be explored. 
      
      </p>
      <br/>
      <p className='text-xl px-12 font-semibold text-gray-500'>As I delved deeper into this field, I realized that I had a genuine passion for turning ideas into tangible, functional, and beautiful digital solutions. 
      This love for software and web development has been my driving force throughout my career. 
      Whether it's designing a sleek user interface, writing efficient code, or solving complex problems, the thrill of creating something valuable and impactful for my clients continues to motivate me every day. 
      My journey in this ever-evolving field has been a remarkable adventure, and I'm excited to bring my expertise to your projects. 
      Together, we can turn your ideas into digital reality.

      </p>
      
      </div>
    </div>
  )
}

export default about