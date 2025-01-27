import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongo-url').then(()=>console.log("DataBase Connected"));
}