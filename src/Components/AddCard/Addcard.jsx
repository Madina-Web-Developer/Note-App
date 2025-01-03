import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import Popup from '../Popup/Popup';

const Addcard = () => {

    // =========  Custom Varible ====================

    const [show,setshow]= useState(false)


  return (

    <>

    <div>
        <div onClick={()=>setshow(true)} className="mina_card   w-[190px] h-[190px] border-[1px] bg-[rgb(251,253,255)] dark:bg-gray-200 rounded-md flex gap-1 justify-center items-center dark:border-[#b16154] border-[rgb(255,185,174)]
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow transition-all duration-[.3s] dark:hover:shadow dark:transition-all dark:duration-[.3s] dark:shadow-[0px_0px_12px_-5px_#ffffff]">

        <IoIosAddCircleOutline className='text-gray-400 dark:text-gray-700 font-semibold text-[26px]' />
        <h2 className='text-[21px] text-gray-400 dark:text-gray-700 font-semibold '>Add</h2>


        </div>

        <Popup showvalue={show} PopCross={()=>setshow(false)}/>
       
    </div>
    
    </>
  )
}

export default Addcard

