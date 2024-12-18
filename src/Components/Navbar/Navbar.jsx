import React from 'react'
import './Navbar.css'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slice/UserSlice';

const Navbar = () => {

    // --------- Redux Data ---------------

 const userSlice=useSelector((state)=> state.currentUser.value)


// ---------------- Varible part ----------

const navigate = useNavigate()

const dispatch = useDispatch()

const handelOut =()=>{

    navigate('/login')
    localStorage.removeItem('currentUser')
    dispatch(userData(null))


}


console.log(userSlice)

  return (
    <>
    <div className="nav">

        <div className="container">

            <div className="madina_nav">

                <div className="all">

                <div className="logo_search">
                <div className="logo">

                    <div className="logo_img">
                    
                    </div>
                    <h1>No<span className='note'>t</span>e</h1>
                </div>
              
                </div>


                </div>

                <div className="user_info">
                    <div className="user_profile_pic overflow-hidden"><img src={userSlice?.photoURL} alt="photo" /></div>
                   <div className="name"> <h2>{ userSlice?.displayName}</h2></div>
                    <div className="logout">
                    </div>
                    <div className="logout">
                    <RiLogoutCircleRLine onClick={handelOut} className='out active:scale-[1.1]' />
                    <h3>Log out</h3>

                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Navbar