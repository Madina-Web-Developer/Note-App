import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const Layoutone = () => {

  const userSlice=useSelector((state)=> state.currentUser.value)

  const navigate = useNavigate()

  useEffect(() => {
    if (userSlice == null) {

        navigate('/login');
    }
}, []);


  return (
    <>
    
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default Layoutone