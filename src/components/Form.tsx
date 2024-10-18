'use client'
import submitClient from '@/utils/action';
import { useFormState, useFormStatus } from 'react-dom';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const {pending} = useFormStatus()
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
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          
        } catch (error) {
          console.error(error);
          toast('Something went wrong', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
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
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
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
      <button className="btn btn-error text-white" disabled={pending} >
        {pending? 'submiting...': 'Submit' }
      </button>
    </div>
  </form>

  )
}

export default Form