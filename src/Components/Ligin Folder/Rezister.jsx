import React, { useState } from 'react'

import { FaUserAlt, FaLock } from 'react-icons/fa';
import './Rezister.css'; // Importing the CSS file
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, validatePassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Slide, toast, Zoom } from 'react-toastify';


const Rezister = () => {

// =============== Custom Dom part ====================

const [show, setShow] = useState(true)
const [ formData , setFormData ] = useState({userName:'', email:'', password:'', cpassword:''})
const [error, setError] = useState({userError:'', emailError:'', passwordError:'', cpasswordError:''})

// ================= Firebase Varible ==================================

const auth = getAuth();

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

    else if(formData.cpassword == ''){
    setError((preve)=>({...preve, cpasswordError:'Please Enter Your Password'}))
   }

  //  else if(formData.password.length <6){
  //   setError((preve)=>({...preve, passwordError:'Password must be 6 degits, you can make a strong password by using @$#%*12Msfd like this'}))
  //  }

   if(formData.cpassword == ''){
    setError((preve)=>({...preve, passwordError:'Please Enter Your Password'}))
   }

   
   
   else if(formData.password != formData.cpassword){
    setError((preve)=>({...preve, cpasswordError:'Password dose not match'}))
   }


   //  ================= Register Successs part Start  ============== //
   else{


    createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    const user = userCredential.user;

   console.log(user)
// =============== User name and Profile ==========

    updateProfile(auth.currentUser, {
      displayName: formData.userName, photoURL: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    }).then(() => {


      // =========== Email Verifacation ===================//

      sendEmailVerification(auth.currentUser)
      .then(() => {
        
    // ---------- Tost
        toast.info('Email verification send', {
          position: "top-center",
          autoClose: 4659,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
          });
      });



     
    })


     

      // ============== Email Verification End =========== // 
    
      
  })


  //  ================== Register Success part End ============= // 



// ------------- Catch Path Start ----------------- //
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)

    // -------------- Email Used Error -------------------//

    if(errorCode == 'auth/email-already-in-use'){

      toast.error('Email has already used', {
        position: "top-center",
        autoClose: 4659,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition:Slide ,
        });
    }

   

    if(errorCode == 'auth/password-does-not-meet-requirements'){

      setError((preve)=>({...preve, passwordError:'password must be required special Characters and numbers like- 123@%mina '}))

      setError((preve)=>({...preve, cpasswordError:'password must be required special Characters and numbers like- 123@%mina '}))
    }else{
      
      console.log('not done')

    }


  });

   }



  }

  return (
    <>
    
    <div className="w"><img className='w' src="public/w.png" alt="h" /></div>
    
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
              <input onChange={(e)=>{setFormData((preve)=>({...preve, userName:e.target.value})) , setError((preve)=>({...preve,userError:''}))}}
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
              <input onChange={(e)=>{setFormData((preve)=>({...preve, password:e.target.value})) , setError((preve)=>({...preve,passwordError:''}))}}
                type={show? 'password':'text'}
                placeholder="Password"
                className="login-input"
              />
                
               </div>
              
               {/* ======= Password Error ========= */}
                  <h6  ><i>{error.passwordError}</i></h6>
                </div>

          {/* ------------ Password Input End -------- */}



          {/*  -------- CONFERM Password Input Start ----- */}

          <div className="form-group">
               <div className="input-container">
              <FaLock className="input-icon" />
              
              {/* ====== Pass Input  */}
              <input onChange={(e)=>{setFormData((preve)=>({...preve, cpassword:e.target.value})) , setError((preve)=>({...preve,cpasswordError:''}))}}
                type={show? 'password':'text'}
                placeholder="Confirm your Password"
                className="login-input"
              />

              
               </div>
              
               {/* ======= Password Error ========= */}
                  <h6  ><i>{error.cpasswordError}</i></h6>
                </div>

          {/* ------------CONFERM Password Input End -------- */}

            {/* --------------- CheckBox -------------- */}

          <div className="checkbox1">
        

          {

            show?

            <input onClick={()=>setShow(!show)} className='sp'type='checkbox' />

            :

            <input onClick={()=>setShow(!show)} className='sp' type="checkbox" />

          }
          <div className="remember2"><h3>Show Password</h3></div>
          </div>


       
          {/* =========== Submit Button ============== */}
          <button onClick={Submit} type="submit" className="login-button">
            <span>Register</span>
          </button>

          {/* =========== Submit Button End ========= */}

        </form>

        {/* ======= Form End ================================================================== */}

       
            <h5 className='back'>OR</h5>

       
            <div className="login_b">
           
           <Link  className='login_back' to={'/login'}>Login</Link>
           
            </div>
           
      </div>
      {/* ================  Login Box End ============================== */}
    </div>
    
    
    </>
  )
}

export default Rezister