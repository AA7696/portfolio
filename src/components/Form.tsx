'use client'
import submitClient from '@/utils/action';
import {  useFormStatus } from 'react-dom';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubmitButton() {
  const {pending} = useFormStatus()
  return(
    <button className="btn btn-error text-white" disabled={pending} >
    {pending? 'submiting...': 'Submit' }
  </button>


  )
  
}

function Form() {
    const formRef = useRef<HTMLFormElement>(null)
    const handelSubmit = async (formData: FormData): Promise<void> =>{
    
        try {
           await submitClient({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
          })
          formRef.current?.reset();
          toast('Submited', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          
        } catch (error) {
          console.error(error);
          toast('Something went wrong', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

          
        }
      }
    
  return (
    <form ref={formRef} className="card-body w-full md:w-[50%] flex flex-col gap-4 mt-6" action={handelSubmit}>
    <ToastContainer
    position="bottom-center"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="dark"
    />

    <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
  <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Name</span>
      </label>
      <input type="text" placeholder="Name" className="input input-bordered bg-[#212429] border-gray-300" name='name' required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Email</span>
      </label>
      <input type="email" placeholder="Email" name='email' className="input input-bordered bg-[#212429] border-gray-300" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Message</span>
      </label>
      <textarea
      className="textarea textarea-bordered h-24 bg-[#212429] border-gray-300" placeholder="Your message" name='message' required
      rows={12}

      />
    </div>

    <div className="form-control mt-6">
      <SubmitButton />
    </div>
  </form>

  )
}

export default Form