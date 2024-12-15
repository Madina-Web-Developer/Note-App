import React, { useEffect, useState } from 'react'

import { getDatabase, ref, onValue } from "firebase/database";

const SingleNote = () => {



    // ============ redux Data 





    // ================ custom Variable 


    const [allNotes, setAllnotes] = useState([])




    // ================ Firebase Variable 

    const data = getDatabase()



    // ================= All Function 





    // ================ Realtime Firebase Data

    useEffect(()=>{

       onValue(ref(data, "AllNote/"), (snapshot) => {
        let arr = []
        snapshot.forEach((item) => {
            arr.push(item.val())
        })

        setAllnotes(arr)
    })

    },[]);





  return (
    <div>

        <div className='flex flex-wrap gap-6'>

            {
                allNotes.map((item)=>(


    <div  className="mina_card mt-20 ml-20 w-[250px] h-[200px] flex flex-col justify-center items-center p-[5px] border-[1.8px] bg-[rgb(251,253,255)] dark:bg-slate-800 rounded-md  dark:border-[hsl(8,58%,62%)] border-[hsl(8,100%,81%)]
   ">

        <h2 className='text-[20px] text-black font-medium dark:text-gray-300'>{item.Title}</h2>

       <p className='text-center text-black dark:text-gray-300'>{item.Note}</p>

    </div>


                ))
            }

        </div>
   
</div>
  )
}

export default SingleNote