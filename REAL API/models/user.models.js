import mongoose from 'mongoose'

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        unique:true,
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    // profileURL:{
    //     type:String,
    //     required:true,
    //     default:"imageURL"
    // }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)