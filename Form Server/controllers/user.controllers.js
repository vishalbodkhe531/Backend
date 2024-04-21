import {User} from "../model/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/user.error.js";

export const UserCreate = async (req,res,next) =>{
    try {
        console.log(req.body);
        const {name,email,password} = req.body

    const IsUser = await User.findOne({email});
    if(IsUser) return next(errorHandler(400,"Email already existed"));
    
    const hashPass = bcryptjs.hashSync(password,10)

    await User.create({name,email,password : hashPass});
    
    // res.render("login")
    res.status(202).json({success : "User successfully created"});
    } catch (error) {
        next(error)
    }
}

export const UserLogin = async (req,res,next) =>{
    try {
        const {email,password} = req.body

    const Isable = await User.findOne({email});
    if(!Isable) return next(errorHandler(404,"User not found !!"));
    
    const IsPassMatch = bcryptjs.compareSync(password,Isable.password);

    if(!IsPassMatch) return next(errorHandler(400,"Incorrect Password"));   

    // res.status(202).json({suceess : "User succesfully login"})
    res.render("index")
    } catch (error) {
        next(error)
    }
}