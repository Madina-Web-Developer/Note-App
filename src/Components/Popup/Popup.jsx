import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsEyedropper } from "react-icons/bs";

const Popup = ({showvalue, PopCross}) => {

    // ========== Custom Variable ============//

    const [show, showColor] = useState(false)



  return (
    <div>

      <div className={ `mina popup ${showvalue? 'w-[1550px]' : 'w-0'} transition-all justify-center items-center flex duration-[.7s] absolute  h-screen bg-[#00000050] dark:bg-[rgba(255,195,173,0.33)] top-[9%] right-0` }>
     
       <div className="all_pop_text">

        <button onClick={PopCross} className={`cross ${showvalue? 'block': 'hidden'} text-[32px] font-extrabold top-8 hover:text-[hsl(8,100%,73%)] transition-all duration-[.7s] dark:transition-all dark:duration-[.7s] dark:hover:text-[rgb(255,135,116)] hover:rotate-[90deg] text-white right-14 flex absolute`}>
        
         <RxCross1 />
        </button>

       </div>

      {/* ============= input filds===================== */}

      <div className={`pop_input  ${showvalue? 'block': 'hidden'} w-[500px]   bg-white p-[15px] dark:bg-black dark:border-[rgb(255,135,116)] border-[0.5px] border-[rgb(255,135,116)] dark:border-[0.5px] rounded-md`}>

        <h1 className='title text-[22px] text-gray-500 font-semibold  dark:text-gray-300'>Title</h1>
        <input type="text" placeholder='title.........' className='w-full placeholder:italic placeholder:text-gray-300 dark:placeholder:text-gray-500 h-[40px] mt-2 rounded-sm dark:bg-gray-800 bg-slate-100 outline-none p-2 dark:text-gray-200 text-gray-700 text-[16px] font-normal  ' />

        <h2 className=' text-[20px] text-gray-500  mt-3 font-semibold  dark:text-gray-300'>Note</h2>

        <textarea name="text" placeholder='write your note...............' className='w-full h-[250px] placeholder:italic placeholder:text-gray-300 dark:placeholder:text-gray-500 mt-2 rounded-sm dark:bg-gray-800
         bg-slate-100 outline-none p-2 dark:text-gray-200 text-gray-700 text-[14px] font-normal font-Poppins '></textarea>


{/* ------------------  Colors ----------------------------------- */}
         <div>

         <div className="color_pop mt-5 flex gap-1 relative overflow-hidden  items-center">

         <IoColorPaletteOutline onClick={()=>showColor(!show)}  className=' text-[25px] dark:text-white hover:rotate-[120deg] text-gray-600 transition-all duration-[.5s] '/>


         <div className={`${show? 'left-8':'left-[-22%]'} absolute flex gap-1 top-[19%] transition-all duration-[.8s]`}>

         <button className='color rounded-full w-[16px] h-[16px] bg-blue-500 '></button>
         <button className='color rounded-full w-[16px] h-[16px] bg-rose-600 '></button>
         <button className='color rounded-full w-[16px] h-[16px] bg-yellow-300 '></button>
         <button className='color rounded-full w-[16px] h-[16px] bg-green-500 '></button>
          
          <label htmlFor="colors">

         <BsEyedropper className='text-gray-500 dark:text-gray-300' />
          </label>

          <input type="color" id='colors' className='hidden' />
        

        </div>


         </div>


         </div>


      </div>

      </div>


    </div>
  )
}

export default Popup