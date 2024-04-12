import express from "express"
import { register, userHome } from "../controllers/user.controller.js"

const router=express.Router()
router.get('/',userHome)
router.post('/register',register)
export default router