import React from 'react'
import SinglePinNotes from '../SinglePinNote/SinglePinNotes'

const PinNotepage = () => {
  return (
    <div className=' dark:bg-slate-800  w-full h-screen pl-[60px]  pt-[40px] bg-[#fffeed] '>
      <h6 className='Pinpage text-center text-[25px] font-Poppins font-semibold dark:text-gray-500 text-green-300 mb-[15px]'>All Pin Notes</h6>
    <SinglePinNotes/>
</div>
  )
}

export default PinNotepage