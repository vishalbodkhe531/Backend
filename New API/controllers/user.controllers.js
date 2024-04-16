import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.handler.js";


export const createUser=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body

    const user = await User.findOne({email})
    if (user) return next(errorHandler(400,"user already existed"))

    const hashedPassword= bcryptjs.hashSync(password,10)

    await User.create({
        name,email,password:hashedPassword
    })

    res.status(201).json({message:"User created"})
    } catch (error) {
        next(error)
    }
    
}


export const loginUser=async(req,res,next)=>{
    try {
        const {email,password}=req.body

    const user=await User.findOne({email})

    if (!user) {
        return next(errorHandler(404,"user not found"))
    }
    const isPasswordMatch = bcryptjs.compareSync(password,user.password)

    if (!isPasswordMatch) {
        return next(errorHandler(400,"Incorrect password"))
    }

    res.status(202).json({
        message:`Welcome ,${user.name}`
    })
    } catch (error) {
      next(error)  
    }
}