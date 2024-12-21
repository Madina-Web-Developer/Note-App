import React, { useEffect, useState } from 'react'
import { MdOutlineRestartAlt } from "react-icons/md";
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";

const DeleteBin = () => {


    // ------------ Redux Data -------------------------- // 

    const userSlice = useSelector((state)=>state.currentUser.value)
    



    // ----------- Custom Variable ------------------ //


    const [removeNote, setRemoveNote] = useState([])

    const [buttonVisibility,setButtonVisibility] = useState(false)



    // -------------- Firebase Variable -------------//

    const db = getDatabase();

    // --------- All Function ---------------------- //

   useEffect(()=>{

     onValue(ref(db, "BinNote/"), (snapshot) => {
           let arr = []
           snapshot.forEach((item) => {
              if(item.val(). UserId== userSlice.uid){
               arr.push({...item.val(), key:item.key})
               
              }
           })

           setRemoveNote(arr)

         })

   },[])



  useEffect(()=>{
    if(removeNote.length == 0){
        setButtonVisibility(false)
    } else{
        setButtonVisibility(true)
    }
  },[removeNote.length])



//    ----------------- permanently Single delete -------------------//

const perDelete=(perDelete)=>{

    remove(ref(db, "BinNote/" + perDelete.key))
}


// ----------------- Single recover-----------------


const singleRecover=(recover)=>{

      set(ref(db, 'AllNote/' + recover.key), {
    
              Title: recover.Title,
              Note: recover.Note,
              Bgcolor: recover.Bgcolor,
              TextColor: recover.TextColor,
              PinNote:recover.PinNote,
              UserId: userSlice.uid,
             
            })

            
    remove(ref(db, "BinNote/" + recover.key))

}



// ------------------------ Recover All ---------------

const handleRestoreAll = ()=>{
    let array = []
    onValue(ref(db, 'BinNote/'), (snapshot) => {
        snapshot.forEach((item)=>{
            array.push({...item.val(),key:item.key})
        })
    });
    for (const note of array) {
        if (note.UserId == userSlice.uid ) {
            set(ref(db, 'AllNote/' + note.key), {
               
          Title: note.Title,
          Note: note.Note,
          Bgcolor: note.Bgcolor,
          TextColor: note.TextColor,
          PinNote: note.PinNote,
          UserId: note.UserId,
         
            })
            remove(ref(db, 'BinNote/' + note.key))
        }
    }
}



// --------------- Permanently Delete All --------------------

const AllDelete =()=>{

    let array = []
    onValue(ref(db, 'BinNote/'), (snapshot) => {
        snapshot.forEach((item)=>{
            array.push({...item.val(),key:item.key})
        })
    });
    for (const note of array) {
        if (note.UserId == userSlice.uid ) {
         
            remove(ref(db, 'BinNote/' + note.key))
        }
    }
}


    // ------------ Realtime Database -----------------//



  return (
    <div>


        <div className="Allremove">
           

           {
              buttonVisibility&&

                 <div className="All-delete flex justify-end items-center mt-[4%] mb-[4%] gap-[3%]">

                     {/* ----------- Delete All button------------------ */}
                        <button onClick={AllDelete}
                         className="flex justify-center items-center  h-[2%] p-[8px] cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#ff4c4c] via-[#f55b5b] to-[#cb0000] hover:shadow-lg hover:shadow-red-400 hover:scale-105 duration-300 hover:from-[#ff0000] hover:to-[#fb7185]"
                         >
                            <h2 className='font-bold text-[14px] font-Poppins text-white'>Delete All</h2>
                         </button>
         
                     {/* -------------------- Recovery All button------------------ */}
         
                     <button onClick={handleRestoreAll}
                         className="flex justify-center items-center  h-[2%] p-[8px] cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#53c844] via-[#41d700] to-[#1d9602] hover:shadow-lg hover:shadow-green-300 hover:scale-105 duration-300 hover:from-[#46b23e] hover:to-[#22e000]"
                         >
                       <h2 className='font-bold font-Poppins text-[14px] text-white'>Restore All</h2>
                         </button>
         
                 </div>
           }


                 {
                    removeNote.map((item)=>(


                 <div key={item.key} className="bin_text flex justify-between items-center mt-[2%] pr-[2%]">
                     <h1 className='text-gray-600 dark:text-gray-200 lg:text-[19px] font-Poppins font-medium '>{item.Title} </h1>
         
                     <div className="delete_buttons justify-end items-center flex gap-[85px]">
         
         
         
                        {/* --------------- Delete Button ------------ */}
         
                             <button onClick={()=>perDelete(item)}
                             className="group relative flex h-[37px] w-[37px] flex-col items-center justify-center overflow-hidden rounded-lg   bg-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-400 hover:scale-105 duration-300  "
                             >
                             <svg
                                 viewBox="0 0 1.625 1.625"
                                 className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                                 height="10"
                                 width="10"
                             >
                                 <path
                                 d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                                 ></path>
                                 <path
                                 d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                                 ></path>
                                 <path
                                 d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                                 ></path>
                             </svg>
                             <svg
                                 width="16"
                                 fill="none"
                                 viewBox="0 0 39 7"
                                 className="origin-right duration-500 group-hover:rotate-90"
                             >
                                 <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                 <line
                                 strokeWidth="3"
                                 stroke="white"
                                 y2="1.5"
                                 x2="26.0357"
                                 y1="1.5"
                                 x1="12"
                                 ></line>
                             </svg>
                             <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                                 <mask fill="white" id="path-1-inside-1_8_19">
                                 <path
                                     d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                 ></path>
                                 </mask>
                                 <path
                                 mask="url(#path-1-inside-1_8_19)"
                                 fill="white"
                                 d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                 ></path>
                                 <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                                 <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                             </svg>
                             </button>
         
                        {/* ------------------- Recovery Button -------------- */}
                            
                         
                             <button onClick={()=>singleRecover(item)}
                     
                             className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-500 backdrop-blur-lg px-[6.5px] py-[6.5px] text-base font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-green-400"
                             >
                            <MdOutlineRestartAlt className='text-[24px] text-white hover:animate-spin duration-100' />
                             <div
                                 className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                             >
                                 <div className="relative h-full w-10 bg-white/20"></div>
                             </div>
                             </button>
    
         
         
                     </div>
                 </div>


                    ))
                 }
         



        </div>

    

    </div>
  )
}

export default DeleteBin