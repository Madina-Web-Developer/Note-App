import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import './LoginForm.css'; // Importing the CSS file
import { FaLongArrowAltRight } from "react-icons/fa";

const LoginForm = () => {











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
              {/* ===== Email input ========== */}
              <input
                type="email"
                placeholder="@Email or Username"
                className="login-input"
              />
            </div>

            {/* ====   Email Error ========= */}
            <h6></h6>

          </div>
          <div className="form-group">
            <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <AiFillEye className="password-icon" />
              
            </div>
            {/* ======= Password Error ========= */}
            <h6></h6>
          </div>
         
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
