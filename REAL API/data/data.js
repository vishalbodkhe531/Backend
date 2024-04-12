import mongoose from "mongoose"

export const mongoConnection=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"REALAPI"})
    .then(()=>console.log(`Database Connect`))
    .catch((e)=>console.log(`Error while connection : ${e}`))
}


