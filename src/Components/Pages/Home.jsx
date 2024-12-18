import React from 'react'
import Addcard from '../AddCard/Addcard'
import SingleNote from '../SingleNote/SingleNote'
import Allnotespage from './Allnotespage'

const Home = () => {
  return (
    <div className='w-full h-screen dark:bg-slate-950'>
       <div>

        <Allnotespage/>

       
       </div>
    </div>
  )
}

export default Home