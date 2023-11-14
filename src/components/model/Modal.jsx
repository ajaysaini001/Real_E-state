import React from 'react'
import {AiOutlineClose} from "react-icons/ai";
import "./style.css";
import { createPortal } from 'react-dom';
const Modal = ({isOpen,isClose,children}) => {
  return createPortal(  <>  {isOpen && (
  <>
  <div className='modal'>
  
    <div className='closicon'>
    {children}
      <AiOutlineClose onClick={isClose}/>
      
      
    </div>
  </div>
  <div className='blur' onClick={isClose}/>
  </>
  )}
   </>,
   document.getElementById("modal-root")
  
  )

  
}

export default Modal