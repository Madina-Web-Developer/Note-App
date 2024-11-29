import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './LoginForm.css'; // Importing the CSS file
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const LoginForm = () => {

    // ========= Custom State =========== // 

    const [show, setshow] = useState(true)
    const [formData , setFormData] = useState({userName:'', email:'', password:''})
    const [error, setError] = useState({userError:'', emailError:'', passwordError:''})



    // ================ Function Part ================ //




  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Log In</h1>
        <p className="login-subtitle">
          Login here using your username and password
        </p>

        {/* ===========  Form Part Start ========= */}
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
            <h6></h6>
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
            <h6></h6>

          </div>

          {/*  ------- Email Input End ------- */}


          {/*  -------- Password Input Start ----- */}

          <div className="form-group">
            <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input
                type={show? 'password': 'text'}
                placeholder="Password"
                className="login-input"
              />
              {
                show?

                <FaEyeSlash onClick={()=>setshow(!show)} className="password-icon" />

                :

                <FaRegEye onClick={()=>setshow(!show)} className="password-icon" />

              }
              
            </div>
            {/* ======= Password Error ========= */}
            <h6></h6>
          </div>

          {/* ------------ Password Input End -------- */}
         
        <div className="ff">
        <a href="#" className="forgot-password">
              <i>Forgot Password ?</i>
            </a>
        </div>
          <button type="submit" className="login-button">
            <span>Log In</span>
          </button>
        </form>

        <div className="sn">
        <h4>Don't have an Account ?</h4>
        <   FaLongArrowAltRight  className='arrow'/>
            <button type="button" className="signup-button">
              Sign Up 
            </button>
        </div>
        <div className="last">
            <h5>Or login with</h5>
            <div className="fb">
                <a href="https://www.facebook.com/"><img src="public/f.png" alt="fb" /></a>
                <a href="https://www.google.com/"><img src="public/G.png" alt="google" /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
