import React, { useState } from 'react'

import { FaUserAlt, FaLock } from 'react-icons/fa';
import './Rezister.css'; // Importing the CSS file
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Rezister = () => {

const [show, setShow] = useState(true)










  return (
    <>
    
    <div className="w"><img src="public/w.png" alt="h" /></div>
    
    <div className="login-container">

      {/* ======== Login Box Start========================= */}

      <div className="login-box">

    

        <h1 className="login-title">Sign up</h1>
        <p className="login-subtitle">
          Create your account by using your username email and password
        </p>

        {/* ===========  Form Part Start ====================================================== */}
        <form>
        
          <div className="form-group">
            <div className="input-container">
              <FaUserAlt className="input-icon" />

              {/* ===== User input start ========== */}
              <input
                type="text"
                placeholder="UserName"
                className="login-input"
              />
            </div>

            {/* ====   User Error ========= */}
            <h6><i></i></h6>
          </div>

          {/*  ========  User Input End ======= */}

          {/* --------- Email Input Start--------- */}

          <div className="form-group">
            <div className="input-container">
            <MdAttachEmail className="input-icon" />

              {/* ===== Email input ========== */}
              <input 
                type="email"
                placeholder="@Email"
                className="login-input"
              />
            </div>

            {/* ====   Email Error ========= */}
            <h6><i></i></h6>

          </div>

          {/*  ------- Email Input End ------- */}


          {/*  -------- Password Input Start ----- */}

          <div className="form-group">
               <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input 
                type={show? 'password':'text'}
                placeholder="Password"
                className="login-input"
              />
                
               </div>
              
               {/* ======= Password Error ========= */}
                  <h6  ><i></i></h6>
                </div>

          {/* ------------ Password Input End -------- */}



          {/*  -------- CONFERM Password Input Start ----- */}

          <div className="form-group">
               <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input 
                type={show? 'password':'text'}
                placeholder="Confirm your Password"
                className="login-input"
              />

              
               </div>
              
               {/* ======= Password Error ========= */}
                  <h6  ><i></i></h6>
                </div>

          {/* ------------CONFERM Password Input End -------- */}


          <div className="checkbox1">
        

          {

            show?

            <input onClick={()=>setShow(!show)} className='sp' type="checkbox" />

            :

            <input onClick={()=>setShow(!show)} className='sp' type="checkbox" />

          }
          <div className="remember2"><h3>Show Password</h3></div>
          </div>

          {/* --------------- CheckBox -------------- */}

         <div className="checkbox">
          <input className='ckbox' type="checkbox" />
          <div className="remember"><h3>Remember Password</h3></div>

         </div>
          {/* =========== Submit Button ============== */}
          <button  type="submit" className="login-button">
            <span>Register</span>
          </button>

          {/* =========== Submit Button End ========= */}

        </form>

        {/* ======= Form End ================================================================== */}

        <div className="reg">

          <div className="akta">
            <h5>Or Sign up with</h5>
            
               <div className="f">
               <a href="https://www.facebook.com/"><img src="public/f.png" alt="fb" /></a>
                <a href="https://www.google.com/"><img src="public/G.png" alt="google" /></a>
            
               </div>
          
             </div>
        </div>
            <h5 className='back'>OR</h5>

       
            <div className="login_b">
           
           <Link  className='login_back' to={""}>Login</Link>
           
            </div>
            <div className="clip_path"> </div>
      </div>
      {/* ================  Login Box End ============================== */}
    </div>
    
    
    </>
  )
}

export default Rezister