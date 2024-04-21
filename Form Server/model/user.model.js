import mongoose from "mongoose"

const UserScema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true,
        unique : true
    },
    
    password : {
        type : String,
        required : true
    }
},{timestaps : true});

export const User = mongoose.model("User",UserScema);