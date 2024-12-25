import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './LoginForm.css'; // Importing the CSS file
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Bounce, Slide, toast, Zoom } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userData } from '../Slice/UserSlice';

const LoginForm = () => {

    // ========= Custom State =========== // 

    const [show, setshow] = useState(true)
    const [ formData , setFormData ] = useState({userName:'', email:'', password:''})
    const [error, setError] = useState({userError:'', emailError:'', passwordError:''})

    const navigate = useNavigate()

    const dispatch = useDispatch()
    
    // ============ Firebase Varible ==============


    const auth = getAuth();

    // ================ Function Part ================ //

       const Submit = (e)=>{
       e.preventDefault()

     

       if(formData.email == ''){
        setError((preve)=>({...preve, emailError:'Please Enter Your Mail'}))
       }

       

       if(formData.password == ''){
        setError((preve)=>({...preve, passwordError:'Please Enter Your Password'}))
       }

       else{

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {

              const user = userCredential.user;

              if(user.emailVerified == true ){

                //  ------------- Navigate login to Home Page ------------
                      navigate('/')

                      
                toast.success('Login Successful', {
                  position: "bottom-right",
                  autoClose:3500,
                  hideProgressBar:false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition:Slide,
                  });


                  // ------------Store User Data -----------
                    dispatch(userData (user))

                    localStorage.setItem('currentUser', JSON.stringify(user))



                      
                  // ------------- Error 
              }else{

                toast.warning('Email is not Verified !', {
                  position: "top-center",
                  autoClose:4500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition:Bounce,
                  });

              }

              // ------------------- Catch Path ---------
            
            })
            .catch((error) => {
             const errorCode = error.code;

             if(errorCode){

               toast.error('Something with Wrong !', {
                   position: "top-center",
                   autoClose: 4500,
                   hideProgressBar: true,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "colored",
                   transition:Bounce,
                   });

             }

             
            });
       }

       }

  return (

    <>
    
   
    
    <div className="login-container">
      <div className="login-box_l">
        <h1 className="login-title">Log In</h1>
        <p className="login-subtitle">
          Login here by using your username email and password
        </p>

        {/* ===========  Form Part Start ========= */}
        <form>
         
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
        
          <button onClick={Submit} type="submit" className="login-button">
            <span>Log In</span>
          </button>
        </form>

        <div className="sn">
        <h4>Don't have an Account ?</h4>
            <button type="button" className="">
             <Link to={'/register'}> 
             
             <button
        class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-600/60  px-2 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-green-400/60"
      >
        <span class="text-md font-bold font-Poppins lg:text-[14px] text-[10px]">Sign Up</span>
        <div
          class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div class="relative h-full w-10 bg-white/30"></div>
        </div>
                </button>
             
              </Link>
            </button>
        </div>
       
      </div>
    </div>
    
    
    </>
  );
};

export default LoginForm;


