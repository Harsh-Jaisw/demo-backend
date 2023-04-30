const express =require("express")
const router=express.Router()
const {createUser} =require("../Controller/userController")
router.post("/register",createUser)

module.exports=router
