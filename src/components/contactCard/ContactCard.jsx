import React, { useState } from 'react'
import {FiSearch,FiPlusCircle} from "react-icons/fi";
import {IoIosContact} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import { db } from '../configure/firebase'
import { doc, deleteDoc } from 'firebase/firestore' 
import AddUpdate from '../addupdate/AddUpdate';
import useDisclose from '../../hooks/useDisclose';
import "./style.css";
const ContactCard = ({ contacts }) => {
  // const [isUpdate,setIsUpdate]=useState(true)
  const {isOpen,isClose,onOpen}=useDisclose();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts1", id));
    } catch (error) {
      console.log("error"); 
    }
  }




  return (
    <>   <div>
    <div className="search">
          <FiSearch className='icon'/>
          <input
          type='text'
          placeholder='search'
          />
          <FiPlusCircle className='button' onClick={onOpen}/>
        </div>
        {
          contacts.map((item)=>(
            <div key={item.id} className='firebase'>
              <div className='firebase-data'>
                <IoIosContact className='contacticon'/>
                <div className='contact-data'>
                  <h1>{item.name}</h1>
                  <p>{item.email}</p>
                
              </div>
              <div className='contact-icons'>
                <RiEditCircleLine  onClick={onOpen} className='contacticon'/>
                <MdDelete 
                onClick={() => deleteContact(item.id)} className='contacticon'/>
              </div>
            </div>
            </div>
    
          ))
        
        }
        </div>
        <AddUpdate isUpdate contacts={contacts} isOpen={isOpen} isClose={isClose} />
        </>
 )
}

export default ContactCard