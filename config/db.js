import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rajbengade:raj010101@cluster0.sm60u.mongodb.net/').then(()=>console.log("DB Connected"));
   
}
// mongodb+srv://rajbengade:mr__rajbengade@cluster0.shav7.mongodb.net/
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error

