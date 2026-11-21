import mongoose from "mongoose";

const connectToDb =async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully !");
    }catch(error){
        console.log("mongoDb connection failed", error);
    }
   
}

export default connectToDb;