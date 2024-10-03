import exp from "constants";
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const conection: ConnectionObject = {}

export async function dbConnect(): Promise<void> {
    try {
        if (conection.isConnected) {
            console.log('Database is already connected')
        }
        else {
            const db = await mongoose.connect(process.env.MONGODB_URI || '')
            conection.isConnected = db.connections[0].readyState
            console.log('Database connected')
        }

        
    } catch (error) {
        console.error(error)
        process.exit(1)
        
    }
    
}
