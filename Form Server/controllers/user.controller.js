import {User} from "../model/user.model.js"
import {errorHandler} from "../utils/error.handle.js"
import bcryptjs from "bcryptjs";

export const UserCreate = async (req,res,next) =>{
   try {
    const {name,email,password} = req.body

    const IsUser = await User.findOne({email});
    if(IsUser) return next(errorHandler(400,"Email already existed"))

    const hashPass = bcryptjs.hashSync(password,10);

    await User.create({name,email,password : hashPass});
    
   //  res.status(201).json({success : true,msg : "User successfully created"});
   res.render("index",{
      path : "/api/user/logout",
      btn : "logout"
   })

   } catch (error) {
    next(error)
   }
}

export const UserLogin = async (req,res,next) =>{
    try {
     const {email,password} = req.body
 
     const IsExist = await User.findOne({email});
     if(!IsExist) return next(errorHandler(404,"Email not found"))
        
     const PassMatch = bcryptjs.compareSync(password,IsExist.password);

     if(!PassMatch) return next(errorHandler(400,"Incorrect password"));
 
   //   res.status(201).json({success : true,msg : `Welcome ${IsExist.name}`})
   res.render("index",{
      path : "/api/user/logout",
      btn : "Logout"
   })
 
    } catch (error) {
     next(error)
    }
 }
