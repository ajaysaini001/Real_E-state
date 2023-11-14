import { useEffect, useState } from 'react'


import { db } from './components/configure/firebase'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import ContactCard from './components/contactCard/ContactCard';
import Modal from './components/model/Modal';
import AddUpdate from './components/addupdate/AddUpdate';
import useDisclose from './hooks/useDisclose';

function App() {
  const[contacts,setContacts]=useState([]);
  const {isClose,isOpen,onOpen}=useDisclose();
  useEffect(()=>{
    getFireFunction();

  },[])

  // const onOpen=()=>{
  //   setIsOpen(true);
  // }
  // const isClose=()=>{
  //   setIsOpen(false);
  // }

  const getFireFunction=async()=>{
    const ref=collection(db,"contacts1");
    onSnapshot(ref,(snapshot)=>{

      // const res= await getDocs(ref);
    const dataList=snapshot.docs.map((doc)=>{
      return{
        id:doc.id,
        ...doc.data()
      }
    })
    console.log(dataList)
    setContacts(dataList);
    return dataList;
    })
    
  }

    
  return (
    <>
   
      <div className="div">
        
        <Navbar/>
        
        <ContactCard contacts={contacts} onOpen={onOpen}/>
        </div>
        <AddUpdate isOpen={isOpen} isClose={isClose}/>
        
     
      </>
   
  )
}

export default App
