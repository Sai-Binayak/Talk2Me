import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const link = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is connected: ${link.connection.host}`)
    }catch(error){
        console.log(`MongoDB connection error`, error)
    }
}