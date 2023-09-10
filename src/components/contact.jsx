import React from 'react'

const contact = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-black  to-gray-900 p-14 text-white' name='contact'>
        <div className='flex flex-col p-4 max-w-screen-lg justify-center mx-auto h-full'>
            <div className='pb-8'>
                <p className='font-aboutname text-3xl py-4'> Find Me!</p>
                <p>Take me on coffee date by submitting the form below..!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/79d212e8-6b32-4f05-b375-617c9f5a0fe9' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Your Name?' className='border-2 font-bold p-2 bg-transparent rounded-md text-cyan-300 focus:outline-none'></input>
                    <input type='text' name='email' placeholder='Your Mail?' className='my-4 border-2 font-bold p-2 bg-transparent rounded-md text-cyan-300 focus:outline-none'></input>
                    <textarea name='message' placeholder='Share your thoughts..' rows={10} className='border-2 p-2 bg-transparent rounded-md text-cyan-300 focus:outline-none'></textarea>
                    <button className='my-2 hover:scale-110 duration-150 text-white rounded-lg p-3 bg-gradient-to-b from-cyan-500 to-blue-500'>Let's Chat</button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default contact