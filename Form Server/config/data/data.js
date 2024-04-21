import mongoose from "mongoose";

export const DatabaseConnection = ()=>{
    mongoose.connect(process.env.DB_URI,{DbName : "FORMAPI"})
    .then(()=>console.log(`Database successfully connected`))
    .catch((err) =>console.log(`error while generat ${err}`))
}