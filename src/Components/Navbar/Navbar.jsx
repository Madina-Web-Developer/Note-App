import React from 'react'
import './Navbar.css'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../Slice/UserSlice';

const Navbar = () => {

 const userSlice=useSelector((state)=> state.currentUser.value)



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
                    <img src="public/note.png" alt="note" />
                    </div>
                    <h1>Daily Note</h1>
                </div>
                <div className="search">
                      <BsSearch className='mina_search' />
                    <input type="search" placeholder='Search here' className='input_search placeholder:text-gray-300 placeholder:italic'/>
                    
                </div>
                </div>


                </div>

                <div className="user_info">
                    <div className="user_profile_pic overflow-hidden"><img src={userSlice?.photoURL} alt="photo" /></div>
                   <div className="name"> <h2>{ userSlice?.displayName}</h2></div>
                    <div className="logout">
                    </div>
                    <div className="logout">
                    <Link to={'/login'} ><RiLogoutCircleRLine className='out active:scale-[1.1]' /></Link>
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