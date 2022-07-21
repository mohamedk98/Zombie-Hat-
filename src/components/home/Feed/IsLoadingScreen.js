import React from 'react'

const IsLoadingScreen = () => {
  return (
    <div className='flex items-center justify-center w-full h-full  bg-facebook-grey'> 
        <div className='p-10 transition-all duration-500  ring-facebook-grey'>
        <div className='flex flex-col items-center text-gray-500'>
            <span className='block w-14 h-14 border-4 rounded-full shadow border-t-black animate-spin'></span>
            <h1 className='mt-8 text-xl tracking-widest  '>Posting...</h1>
        </div>
        </div>
        </div>


  )
}

export default IsLoadingScreen