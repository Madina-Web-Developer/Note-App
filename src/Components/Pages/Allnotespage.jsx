import React from 'react'
import SingleNote from '../SingleNote/SingleNote'

const Allnotespage = () => {
  return (
   <>
   
   <div className=' dark:bg-slate-800  w-full h-screen pl-[60px]  pt-[40px] bg-[#e9fafb] '>
      <h6 className='Pinpage text-center text-[25px] font-Poppins font-semibold dark:text-gray-500 text-sky-200 mb-[15px]'>All Notes</h6>
    <SingleNote/>
</div>

  
   </>
  )
}

export default Allnotespage