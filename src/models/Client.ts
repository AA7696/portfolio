import mongoose ,{Document, Schema} from "mongoose";

export interface Client extends Document{
    name: string;
    email: string;
    message: string,
}

const ClientScheema:Schema<Client> = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},

})

const ClientModel = (mongoose.models.Client as mongoose.Model<Client>) || mongoose.model<Client>("Client", ClientScheema)

export default ClientModel