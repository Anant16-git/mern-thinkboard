import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNRECTED SUCCESSFULLY");

    }catch(error){
        console.log("Error to connectiong to MONGODB",error);
    }
}