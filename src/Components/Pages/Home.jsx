import React from 'react'
import Addcard from '../AddCard/Addcard'
import SingleNote from '../SingleNote/SingleNote'

const Home = () => {
  return (
    <div className='dark:bg-[#000000] w-full h-screen mt-2 ml-2'>
       <div>
        <Addcard/>

        
        <SingleNote/>


       </div>
    </div>
  )
}

export default Home