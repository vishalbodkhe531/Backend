import { User } from "../models/user.models.js"
import bcryptjs from "bcryptjs"
export const userHome=(req,res)=>{
    res.send("User home")
}

export const register = async(req,res)=>{
    const {name,email,password}=req.body
    const user = await User.find({email})
    console.log(user);
    if(user) return res.status(400).json({success:false,message:"email already taken"})

    const hashedPassword=bcryptjs.hashSync(password,10)
    
    const newUser = new User({name,email,password:hashedPassword})
    await newUser.save()
    res.status(201).json({message:"User created"})
}