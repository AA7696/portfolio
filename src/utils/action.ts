"use server"
import { dbConnect } from "@/libs/dbConnect";
import Client from "@/models/Client";
import { toast } from "react-toastify";

const submitClient = async (data: { name: FormDataEntryValue | null; email: FormDataEntryValue | null; message: FormDataEntryValue | null; }): Promise<void> =>{
    try {
        await dbConnect()      
        await Client.create(data)
        

    } catch (error) {
        console.error(error)
        
    }
}

export default submitClient;