import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import Popup from '../Popup/Popup';

const Addcard = () => {

    // =========  Custom Varible ====================

    const [show,setshow]= useState(false)





  return (
    <div>
        <div onClick={()=>setshow(true)} className="mina_card mt-20 ml-28 w-[180px] h-[180px] border-[1.8px] bg-[rgb(251,253,255)] dark:bg-slate-800 rounded-md flex gap-1 justify-center items-center dark:border-[hsl(8,58%,62%)] border-[hsl(8,100%,81%)]
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow transition-all duration-[.3s] dark:hover:shadow dark:transition-all dark:duration-[.3s] dark:shadow-[0px_0px_12px_-3px_#ffffff]">

        <IoIosAddCircleOutline className='text-gray-600 dark:text-gray-400 text-[26px]' />
        <h2 className='text-[21px] text-gray-600 dark:text-gray-400 font-normal '>Add</h2>

        <Popup showvalue={show} PopCross={()=>setshow(false)}/>

        </div>

       
    </div>
  )
}

export default Addcard