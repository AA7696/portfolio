'use client'
import submitClient from '@/utils/action';
import React, { useRef } from 'react'

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
          
        } catch (error) {
          console.error(error);
          
        }
      }
    
  return (
    <form ref={formRef} className="card-body w-full md:w-[50%] flex flex-col gap-4 mt-6" action={handelSubmit}>
    <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Message</span>
      </label>
      <textarea
      className="textarea textarea-bordered h-24" placeholder="Your message" name='message' required
      rows={12}

      />
    </div>

    <div className="form-control mt-6">
      <button className="btn btn-error text-white" >Submit</button>
    </div>
  </form>

  )
}

export default Form