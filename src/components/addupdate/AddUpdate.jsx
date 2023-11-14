import React from 'react'
import Modal from '../model/Modal'
import { Field, Form, Formik } from 'formik'
import "./style.css"
import { db } from '../configure/firebase'
import { addDoc, collection, updateDoc,doc } from 'firebase/firestore'
// import { validate } from 'webpack'

const AddUpdate = ({isClose,isOpen,isUpdate,contacts}) => {

    const addContact=async(contact)=>{
        try{
        const ref=collection(db,"contacts1");
        await addDoc(ref,contact)
        }
        catch(error){
            console.log("Erorr is coming")
        }
    }
// Update
    // const updateContact=async(contact,id)=>{
    //     try{
    //     const ref=doc(db,"contacts1",id);
    //     await updateDoc(ref,contact)
    //     }
    //     catch(error){
    //         console.log("Erorr is coming")
    //     }
    // }
  return (
    <div>
        <Modal isOpen={isOpen} isClose={isClose}> 
        
        <Formik
            initialValues={
                // isUpdate ?
                // {
                //     name:contacts.name,
                //     email:contacts.email
                // }:
                {
                name:"",
                email:""
            }}
            onSubmit={(values)=>{
                console.log(values);
                // isUpdate ? updateContact(values,contacts.id):
                addContact(values);
            }}
        >
            <Form className='form'>
                <div className="filed">
                    <label htmlFor='name'>Name</label>
                    <Field name="name" className="input"/>
                </div>
                <div className="filed">
                    <label htmlFor='name'>Email</label>
                    <Field type="email" name="email" className="input"/>
                </div>
                
                <button className='btn'>
                    {isUpdate ? ("add") : ("update")} contact
                </button>

            </Form>
        </Formik>
        
        </Modal>
    </div>
  )
}

export default AddUpdate