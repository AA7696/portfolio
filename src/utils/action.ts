"use server"
import { dbConnect } from "@/libs/dbConnect";
import Client from "@/models/Client";

interface Data {
    name: string;
    email: string;
    message: string

}
const submitClient = async (data:any): Promise<void> =>{
    try {
        await dbConnect()      
        await Client.create(data)
        console.log('Client created')

    } catch (error) {
        console.error(error)
        
    }
}

export default submitClient;