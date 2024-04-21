import mongoose from "mongoose"

export const databaseConnection = ()=>{
    mongoose.connect(process.env.Db_URI,{DbName : "APICOM"})
    .then(()=>console.log(`Database successfully connected`))
    .catch((err)=>console.log(`error while generated : ${err}`))
}