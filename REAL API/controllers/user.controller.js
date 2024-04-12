import { User } from "../models/user.models.js"
export const userHome=(req,res)=>{
    res.send("User home")
}

export const register = async(req,res)=>{
    const {name,email,password}=req.body
    const user = User.findOne({email})
    if(user) return res.status(400).json({success:false,message:"email already taken"})
    const newUser = new User({name,email,password})
    await newUser.save()
    res.status(201).json({message:"User created"})
}