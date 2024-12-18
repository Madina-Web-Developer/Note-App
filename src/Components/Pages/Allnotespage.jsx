import React from 'react'
import Addcard from '../AddCard/Addcard'
import SingleNote from '../SingleNote/SingleNote'

const Allnotespage = () => {
  return (
   <>
   
     <div className='p-[60px] dark:bg-black h-screen w-full'>

      <Addcard/>

      <div className=' mt-10'>
        <h1 className='lg:text-[23px] text-[19px] text-gray-400 font-medium '>Pin Notes</h1>
        <hr/>
      </div>

      <SingleNote/>


    </div>

  
   
   </>
  )
}

export default Allnotespage