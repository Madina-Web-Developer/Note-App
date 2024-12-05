import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './LoginForm.css'; // Importing the CSS file
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { toast, Zoom } from 'react-toastify';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    // ========= Custom State =========== // 

    const [show, setshow] = useState(true)
    const [ formData , setFormData ] = useState({userName:'', email:'', password:''})
    const [error, setError] = useState({userError:'', emailError:'', passwordError:''})
    



    // ================ Function Part ================ //

       const Submit = (e)=>{
       e.preventDefault()

       if(formData.userName == ''){
        setError((preve)=>({...preve, userError:'Please Enter Your UserName'}))
       }

       else if (!/^[a-zA-Z\s]*$/.test(formData.userName)) {
        setError((preve) => ({ ...preve, userError: 'Name cannot contain symbols or numbers' }))}

       if(formData.email == ''){
        setError((preve)=>({...preve, emailError:'Please Enter Your Mail'}))
       }

       else if (!formData.email.includes('@')) {
        setError((preve) => ({ ...preve, emailError: 'Enter a valid email address' }))}

       if(formData.password == ''){
        setError((preve)=>({...preve, passwordError:'Please Enter Your Password'}))
       }

       else if(formData.password.length <8){
        setError((preve)=>({...preve, passwordError:'Password must be 8 degits, you can make a strong password by using @$#%*12Msfd like this'}))
       }

       else{
        toast.success('Login Successful !', {
            position: "top-center",
            autoClose: 4659,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
       }

       }

  return (

    <>
    
    <div className="top"><img className='top' src="public/t.png" alt="h" /></div>
    
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Log In</h1>
        <p className="login-subtitle">
          Login here by using your username email and password
        </p>

        {/* ===========  Form Part Start ========= */}
        <form>
          <div className="form-group">
            <div className="input-container">
              <FaUserAlt className="input-icon" />

              {/* ===== User input start ========== */}
              <input  onChange={(e)=>{setFormData((preve)=>({...preve,userName:e.target.value})) ,setError((preve)=>({...preve,userError:''})) } }
                type="text"
                placeholder="UserName"
                className="login-input"
              />
            </div>

            {/* ====   User Error ========= */}
            <h6><i>{error.userError}</i></h6>
          </div>

          {/*  ========  User Input End ======= */}

          {/* --------- Email Input Start--------- */}

          <div className="form-group">
            <div className="input-container">
            <MdAttachEmail className="input-icon" />

              {/* ===== Email input ========== */}
              <input onChange={(e)=>{setFormData((preve)=>({...preve, email:e.target.value})) , setError((preve)=>({...preve,emailError:''}))}}
                type="email"
                placeholder="@Email"
                className="login-input"
              />
            </div>

            {/* ====   Email Error ========= */}
            <h6><i>{error.emailError}</i></h6>

          </div>

          {/*  ------- Email Input End ------- */}


          {/*  -------- Password Input Start ----- */}

          <div className="form-group">
            <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input onChange={(e)=>{setFormData((preve)=>({...preve, password:e.target.value})), setError((preve)=>({...preve,passwordError:''}))}}
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
            <h6  ><i>{error.passwordError}</i></h6>
          </div>

          {/* ------------ Password Input End -------- */}
         
        <div className="ff">
        <a href="#" className="forgot-password">
              <i>Forgot Password ?</i>
            </a>
        </div>
          <button onClick={Submit} type="submit" className="login-button">
            <span>Log In</span>
          </button>
        </form>

        <div className="sn">
        <h4>Don't have an Account ?</h4>
            <button type="button" className="signup-button">
             <Link to={'/'}> Sign Up </Link>
            </button>
        </div>
       
      </div>
    </div>
    
    
    </>
  );
};

export default LoginForm;


