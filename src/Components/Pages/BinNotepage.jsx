import React from 'react'
import DeleteBin from '../DeletedBin/DeleteBin'

const BinNotepage = () => {
  return (
    <div className='dark:bg-[#0c1e28ea] bg-[#fff8f7] w-full h-screen px-[60px]  pt-[40px]'>
      <h6 className='Pinpage text-center text-[25px] font-Poppins font-semibold dark:text-gray-500 text-rose-300 mb-[15px]'>All Removed Notes</h6>

      <DeleteBin/>
   
</div>
  )
}

export default BinNotepage