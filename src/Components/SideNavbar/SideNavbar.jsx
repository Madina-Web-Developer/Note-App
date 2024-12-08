import React from 'react'
import './SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { SlPin } from "react-icons/sl";
import { MdNoteAlt } from "react-icons/md";
import { ImBin } from "react-icons/im";

const SideNavbar = () => {
  return (
    <nav className='Sidenav'>

        <div className="sidemain">
            <div className="Side_text">
            <h1 className='all_notes'>All Notes</h1>
            </div>
        </div>

        <ul>
            <li>
        
             <NavLink
            to="/"
            className={({ isActive }) => [isActive ? "bg-BrandColor p-5 w-full flex gap-2 text-[18px] font-serif font-semibold text-gray-700  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-600"
                ,
            
            ].join(" ")
  }
              >
            <MdNoteAlt className='text-[27px] text-gray-900'/> All Notes
             </NavLink>


             <NavLink
            to="/"
            className={({ isActive }) => [isActive ? "bg-BrandColor p-5 w-full flex gap-2 text-[18px] font-serif font-semibold text-gray-700  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-600"
                ,
            
            ].join(" ")
  }
              >
             <SlPin className='text-[24px] text-green-700'/>  Pin Notes
             </NavLink>



             <NavLink
            to="/"
            className={({ isActive }) => [isActive ? "bg-BrandColor p-5 w-full  flex gap-2 text-[18px] font-serif font-semibold text-gray-700  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-600"
                ,
            
            ].join(" ")
  }
              >
             <ImBin className='text-[22px] text-red-600' />  Bin
             </NavLink>

            </li>
        </ul>


    </nav>
  )
}

export default SideNavbar