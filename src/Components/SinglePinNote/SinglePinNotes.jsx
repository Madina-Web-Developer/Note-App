import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { GoPin } from "react-icons/go";



const SinglePinNotes = () => {



  // ============ redux Data 

  const userSlice=useSelector((state)=> state.currentUser.value)



  // ================ custom Variable 


  const [allNotes, setAllnotes] = useState([])

  const [show, setShow] = useState(false)

  const[uniqCard, SetuniqCard] = useState('')

  




  // ================ Firebase Variable 

  const db = getDatabase()



  // ================= All Function 

const handelUnpin=(UnpinData)=>{

    update(ref(db, "AllNote/"+ UnpinData.key),{

    PinNote:false
  });
 
}


  // ================ Realtime Firebase Data

  useEffect(()=>{

     onValue(ref(db, "AllNote/"), (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
         if(item.val(). UserId== userSlice.uid && item.val().PinNote == true){
          arr.push({...item.val(), key:item.key})

         }
      })

      setAllnotes(arr)
    })
    
  },[]);
  

  return (
    <div>
   
           <div className='flex flex-wrap gap-6'>
   
               {
                   allNotes.map((item)=>(
   
   
             <div key={item.key} style={{ backgroundColor: item.Bgcolor}} onClick={()=>setShow(!show)} className={`mina_card mt-[18px]  w-[220px] h-[200px] flex flex-col px-[10px] py-[2px] border-[1.8px] dark:bg-slate-500 rounded-md   dark:border-[#287178] border-[#9af7ff] relative`}>
   
               <div>
               <GoPin className='pin absolute top-0 left-0 text-gray-400 font-bold text-[21px]'/>
                 <HiDotsVertical onClick={()=>{setShow(!show), SetuniqCard(item)}} className='absolute top-[8px] lg:text-[20px] text-[14px]  text-yellow-600 right-[2px] hover:text-gray-400 transition-all duration-[.4s]' />
   
                 {
                   show&& uniqCard.key == item.key&&

               <div className="list flex flex-col absolute bg-gray-50 top-[15%] right-[2%] w-[60px] ">
   
               <button onClick={()=>handelUnpin(item)} className='lg:text-[10px] text-[10px]  font-Poppins font-medium text-gray-800  scale-[1.1]  hover:bg-gray-800 hover:text-yellow-300 pt-1 '>Unpin</button>
   
               <hr />
   
                 <button className='lg:text-[11px] text-[10px] font-Poppins font-medium text-gray-800 hover:bg-gray-800  hover:text-yellow-300 
                 
                 p-[1px]'>Edit</button>
   
                 <hr />
   
                 <button className='lg:text-[11px] text-[10px] font-Poppins font-medium text-gray-800 hover:bg-gray-800  hover:text-yellow-300 pb-1'>Remove</button>
               </div>
   
                 }
   
   
               </div>
   
           <h2 style={{color: item.TextColor}} className='text-[14px] text-center mt-[16px]  border-b-[1px] pb-[1px] font-Poppins  border-b-gray-400 font-bold'>{item.Title}</h2>
   
          <p style={{color: item.TextColor}} className='dark:text-gray-300 font-Poppins font-medium lg:text-[12px] text-[10px] mt-4'>{item.Note}</p>
   
       </div>
   
   
                   ))
               }
   
           </div>
      
   </div>
     )
}

export default SinglePinNotes