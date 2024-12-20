import React from 'react'
import Addcard from '../AddCard/Addcard'
import SingleNote from '../SingleNote/SingleNote'
import SinglePinNotes from '../SinglePinNote/SinglePinNotes';
import { MdOutlinePushPin } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import Allnotespage from './Allnotespage'

const Home = () => {
  return (
    <div className='w-full h-screen dark:bg-slate-950'>
       <div>

       <div className='p-[50px] dark:bg-slate-800 h-screen w-full'>

<Addcard/>

<div className=' mt-10 flex justify-start items-center  border-b-2 dark:border-b-gray-700 border-b-gray-100'>
  <MdOutlinePushPin className='text-[30px] text-green-500 opacity-40' />     
  <h1 className='lg:text-[20px] text-[15px] text-gray-400 font-semibold font-Poppins opacity-55'>Pin Notes</h1>
</div>

<SinglePinNotes/>

<div className=' mt-10 flex justify-start items-center  border-b-2 dark:border-b-gray-700 border-b-gray-100'>
  <MdNoteAlt className='text-[27px] dark:text-yellow-500 text-[#16b2c0] opacity-40'/>
  <h1 className='lg:text-[20px] text-[15px] text-gray-400 font-semibold font-Poppins opacity-55'>All Notes</h1>
</div>


<SingleNote/>


</div>

       
       </div>
    </div>
  )
}

export default Home