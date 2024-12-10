import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import SideNavbar from '../SideNavbar/SideNavbar'

const Layoutone = () => {

  // ---------- Redux Data -----------------

  const userSlice=useSelector((state)=> state.currentUser.value)

  const navigate = useNavigate()

  useEffect(()=> {
    if(userSlice == null){

        navigate('/login');
    }
       }, []);


  return (
    <>
    
    <Navbar/>
    <div className='mina_flex  flex w-full'>

    <SideNavbar/>
    <Outlet/>

    </div>
    
    </>
  )
}

export default Layoutone