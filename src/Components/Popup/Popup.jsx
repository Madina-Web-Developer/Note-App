import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsEyedropper } from "react-icons/bs";
import { getDatabase, push, ref, set } from "firebase/database";

const Popup = ({showvalue, PopCross}) => {

    // ========== Custom Variable ============//

    const [show, showColor] = useState(false)

    const [PopData, setPopData] = useState({Poptitle:'', Popnote:'', TitleError:'', NoteError:''})


    // ============= Firebase Variable========================

    const db = getDatabase();


    // =============== Function part ==============

    const Click = ()=>{

      if(PopData.Poptitle == ''){
        setPopData((prev)=>({...prev, TitleError:'Enter your note tittle'}))
      }

      if(PopData.Popnote == ''){
        setPopData((prev)=>({...prev, NoteError:'Enter your note discription'}))
      }

      else{

        set(push(ref(db, 'AllNote/')), {

          Title: PopData.Poptitle,
          Note: PopData.Popnote
         
        });
        
      }



    }


    


  return (
    <div>

      <div className={ `mina popup ${showvalue? 'w-[1550px]' : 'w-0'} transition-all justify-center items-center flex duration-[.7s] absolute  h-screen bg-[#00000050] dark:bg-[rgba(246,231,154,0.33)] top-[9%] right-0` }>
     
       <div className="all_pop_text">

        <button onClick={PopCross} className={`cross ${showvalue? 'block': 'hidden'} text-[32px] font-extrabold top-8 hover:text-[hsl(8,100%,73%)] transition-all duration-[.7s] dark:transition-all dark:duration-[.7s] dark:hover:text-[rgb(255,135,116)] hover:rotate-[90deg] text-white right-14 flex absolute`}>
        
         <RxCross1 />
        </button>

       </div>

      {/* ============= input filds===================== */}

      <div className={`pop_input  ${showvalue? 'block': 'hidden'} w-[500px]   bg-white p-[20px] dark:bg-black dark:border-[hsl(180,100%,74%)] border-[2px] border-[hsl(180,100%,74%)] dark:border-[1px] rounded-md`}>

        <h1 className='title text-[22px] text-gray-500 font-semibold  dark:text-[#ffb4a8]'>Title</h1>

        {/* ============ Title Error Start======================= */}

        <p className='text-[11px] font-medium text-red-500'>{PopData.TitleError}</p>
        {/* ============= Title Error End ============================== */}


        <input onChange={(e)=>{setPopData((preve)=>({...preve, Poptitle:e.target.value})) , setPopData((preve)=>({...preve,TitleError:''}))}}  type="text" placeholder='title.........' className='w-full placeholder:italic placeholder:text-gray-300 dark:placeholder:text-gray-500 h-[40px] mt-2 rounded-sm dark:bg-gray-800 bg-slate-100 outline-none p-2 dark:text-gray-200 text-gray-700 text-[16px] font-normal  ' />

        <h2 className=' text-[20px] text-gray-500  mt-3 font-semibold dark:text-[#ffb4a8]'>Note</h2>

           {/* ============ Note Error Start======================= */}

           <p className='text-[11px] font-medium text-red-500'>{PopData.NoteError}</p>
        {/* ============= Note Error End ============================== */}

        <textarea onChange={(e)=>{setPopData((preve)=>({...preve, Popnote:e.target.value})) , setPopData((preve)=>({...preve,NoteError:''}))}}    name="text" placeholder='write your note...............' className='w-full h-[250px] placeholder:italic placeholder:text-gray-300 dark:placeholder:text-gray-500 mt-2 rounded-sm dark:bg-gray-800
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

         {/* ============ Save Button ========================= */}
        

         <div className="button_div flex justify-end">

               <button onClick={Click}
              className="relative py-1 px-5 text-gray-800 text-base  font-bold overflow-hidden bg-green-200 rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgb(255,144,126)] before:to-gray-900 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                 >
                  Save
               </button>

         </div>
        


      </div>

      </div>


    </div>
  )
}

export default Popup