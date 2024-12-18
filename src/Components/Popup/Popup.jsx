import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsEyedropper } from "react-icons/bs";
import { getDatabase, push, ref, set } from "firebase/database";
import { MdOutlineFormatColorText } from "react-icons/md";

const Popup = ({showvalue, PopCross}) => {

    // ========== Custom Variable ============//

    const [show, showColor]     = useState(false)

    const [textshow, showText]     = useState(false)

    const [PopData, setPopData] = useState({Poptitle:'', Popnote:'', TitleError:'', NoteError:''})

    const [colors, setColors]   = useState('#fff')

    const [textcolor, setTextcolor] = useState('ffff')


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
          Note: PopData.Popnote,
          Bgcolor: colors,
          TextColor: textcolor,
         
        })

        PopCross()
        setPopData((preve)=>({...preve, Poptitle:'', Popnote:'', TitleError:'', NoteError:''}))
        
      }
  

    }


    // useEffect(() => {    
    //   setInterval(() => {        
    //           if (localStorage.getItem("mode") == "dark") {
    //             setColors("#000")
    //           }
    //           else{
    //             setColors("#FFF")
    //           }
    //       }, 1000);
    //   }, [])
  

    console.log(PopData)

  return (
    <div>

      <div className={ `mina popup ${showvalue? 'w-full' : 'w-0'} transition-all justify-center items-center flex duration-[.7s] absolute  h-screen bg-[#00000050] dark:bg-[rgba(246,231,154,0.33)] top-0 right-0` }>
     
       <div className="all_pop_text">

        <button onClick={PopCross} className={`cross ${showvalue? 'block': 'hidden'} text-[38px] font-extrabold  hover:text-[#ff634b] transition-all duration-[.7s] dark:transition-all dark:duration-[.7s]  rounded-full dark:hover:text-[hsl(8,100%,63%)] hover:rotate-[90deg] text-gray-700 dark:text-white right-[4%]  top-[11%] flex absolute`}>
        
         <RxCross1 />
        </button>

       </div>

      {/* ============= input filds===================== */}

      <div style={{backgroundColor:colors}} className={`pop_input  ${showvalue? 'block': 'hidden'} w-[600px]  p-[20px] dark:bg-black rounded-md`}>

        <h1 style={{color:textcolor}} className='title text-[20px]  text-gray-800 mt-4 font-bold font-Poppins  dark:text-[#ffb4a8]'>Note Title</h1>

        {/* ============ Title Error Start======================= */}

        <p value={PopData.TitleError} className='text-[11px] font-medium text-red-500'>{PopData.TitleError}</p>
        {/* ============= Title Error End ============================== */}


        <input value={PopData.Poptitle} style={{color:textcolor}} onChange={(e)=>{setPopData((preve)=>({...preve, Poptitle:e.target.value})) , setPopData((preve)=>({...preve,TitleError:''}))}}  type="text" placeholder='title.........' className='w-full  placeholder:text-gray- dark:placeholder:text-gray-400 h-[40px] mt-2 rounded-sm dark:bg-gray-700 shadow-[0px_3px_4px_0px_rgba(0,_0,_0,_0.3)] bg-[#eeeeee] dark:shadow-[0px_1px_2px_0px_#ffffff] outline-none p-2 dark:text-gray-200 text-gray-700 text-[14px] font-bold ' />

        <h2 style={{color:textcolor}} className=' mt-5 text-[18px] text-gray-800 font-bold dark:text-[#ffb4a8]'>Description</h2>

           {/* ============ Note Error Start======================= */}

           <p value={PopData.NoteError} className='text-[11px] font-medium text-red-500'>{PopData.NoteError}</p>
        {/* ============= Note Error End ============================== */}

        <textarea value={PopData.Popnote}  onChange={(e)=>{setPopData((preve)=>({...preve, Popnote:e.target.value})) , setPopData((preve)=>({...preve,NoteError:''}))}}    name="text" placeholder='write your note...............' className='w-full h-[250px] placeholder:text-gray-300 dark:placeholder:text-gray-400 mt-2 rounded-sm dark:bg-gray-700
         bg-[#eeeeee] outline-none p-2 shadow-[0px_3px_4px_0px_rgba(0,_0,_0,_0.3)] dark:shadow-[0px_1px_2px_0px_#ffffff] dark:text-gray-200 text-gray-700 text-[15px] font-semibold font-Poppins'></textarea>

         {/* ------------------- Text Color ----------------------------------- */}


         <div >

                <div className="text_color mt-5 flex gap-1 relative overflow-hidden  items-center">                

                 <MdOutlineFormatColorText onClick={()=>showText(!textshow)}  className=' text-[23px] dark:text-white text-gray-700'/>
 


                <div className={`${textshow? 'left-8':'left-[-35%]'} absolute flex gap-1 top-[19%] transition-all duration-[.8s]`}>

              <button onClick={()=>setTextcolor('#fff')} className='color rounded-full  border-[1px] border-black   w-[18px] h-[18px] bg-[#fff] '></button>
              <button onClick={()=>setTextcolor('#000')} className='color rounded-full  border-[1px] border-black   w-[18px] h-[18px] bg-[#000] '></button>
              <button onClick={()=>setTextcolor('#0099ff')} className='color rounded-full  border-[1px] border-black   w-[18px] h-[18px] bg-[#0099ff] '></button>
              <button onClick={()=>setTextcolor('#ff5e45')} className='color rounded-full  border-[1px] border-black   w-[18px] h-[18px] bg-[#ff5e45] '></button>



             <label htmlFor="textcolors">

              <BsEyedropper  className='text-gray-500 dark:text-gray-300' />
            </label>

            <input onChange={(e)=>setTextcolor(e.target.value)} type="color" id='textcolors' className='hidden' />


                </div>


                </div>


                   </div>

        {/* ----------------  Text Color End------------------------------------- */}


{/* -----------------------     Input BG Color ----------------------------------------- */}

                                      <div>

        <div className="color_pop mt-5 flex gap-1 relative overflow-hidden  items-center">

        <IoColorPaletteOutline onClick={()=>showColor(!show)}  className=' text-[30px] dark:text-white hover:rotate-[120deg] text-gray-700 transition-all duration-[.5s]'/>
        


        <div className={`${show? 'left-9':'left-[-35%]'} absolute flex gap-1 top-[19%] transition-all duration-[.8s]`}>

        <button onClick={()=>setColors('#CDC1FF')} className='color rounded-full  border-[1px] border-black   w-[20px] h-[20px] bg-[#CDC1FF] '></button>
        <button onClick={()=>setColors('#8fff98')} className='color rounded-full  border-[1px] border-black   w-[20px] h-[20px] bg-[#8fff98] '></button>
        <button onClick={()=>setColors('#FBA1B7')} className='color rounded-full  border-[1px] border-black   w-[20px] h-[20px] bg-[#FBA1B7] '></button>
        <button onClick={()=>setColors('#FCF596')} className='color rounded-full  border-[1px] border-black   w-[20px] h-[20px] bg-[#FCF596] '></button>
        <button onClick={()=>setColors('#85F4FF')} className='color rounded-full  border-[1px] border-black   w-[20px] h-[20px] bg-[#85F4FF] '></button>
        <button onClick={()=>setColors('#ffff')} className='color rounded-full    border-[1px] border-black   w-[20px] h-[20px]     bg-[#ffff] '></button>
        <button onClick={()=>setColors('#000')} className='color rounded-full     border-[1px] border-black   w-[20px] h-[20px] bg-[#000] '></button>
        
        <label htmlFor="colors">

        <BsEyedropper className='text-gray-500 dark:text-gray-300' />
        </label>

        <input onChange={(e)=>setColors(e.target.value)} type="color" id='colors' className='hidden' />


        </div>


        </div>


                                      </div>


{/* --------------------------- Input Bg Color End -------------------------------------- */}

 {/* ============ Save Button ========================= */}
        

         <div className="button_div flex justify-end">

               <button onClick={Click}
              className="relative py-2 px-5 text-gray-800 text-base  font-bold overflow-hidden bg-[#c2fbfb] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgb(255,144,126)] before:to-gray-900 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
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