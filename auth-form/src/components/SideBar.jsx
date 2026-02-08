import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function SideBar({userName}) {

  const [open, setOpen] = useState(false);
  const navigate  = useNavigate()

  function navigateTo (path){
    navigate(path)
    setOpen(false);
  }

  return (
    <>
      {/* Toggle Button */}
     <div className={userName ? '':'d-none'}>
         <FontAwesomeIcon 
        icon={faBars} 
        className="open-btn"
        onClick={() => setOpen(true)}
      />
     </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? 'expanded' : 'collapsed'}`}>
        
        {/* Close Button */}
        <FontAwesomeIcon 
          icon={faXmark} 
          className="close-btn" 
          onClick={() => setOpen(false)}  
        />

        <div className='sidebar-navigator'>
          <span className='menu-items' onClick={()=>navigateTo('/')}>Home</span>
          <span className='menu-items' onClick={()=>navigateTo('/all-goals')}>Your Goals</span>
          <span className='menu-items' onClick={()=>navigateTo('/weekly')}>Your Weekly Goals</span>
          <span className='menu-items' onClick={()=>navigateTo('/completed')}>Your Completed Goals</span>
        </div>
      </div>
    </>
  )
}

export default SideBar;
