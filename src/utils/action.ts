"use server"
import { dbConnect } from "@/libs/dbConnect";
import Client from "@/models/Client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API)

const submitClient = async (data: { name: FormDataEntryValue | null; email: FormDataEntryValue | null; message: FormDataEntryValue | null; }): Promise<void> =>{

    try {
        await dbConnect()      
        await Client.create(data)
        await resend.emails.send({
              from: 'Acme <onboarding@resend.dev>',
              to: 'achmanagarwal7696@gmail.com',
              subject: 'New Client',
              html: `
                <h1>New Client</h1>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong> ${data.message}</p>
              `,
            });
      
        

    } catch (error) {
        console.error(error)
        
    }
}

export default submitClient;