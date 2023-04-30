const userModel=require("../Model/userModel")


exports.createUser=async(req,res)=>{
   try{
    let data=req.body  
    let users=await userModel.create(data)
    res.status(201).send({status:true,data:users,message:"user created succesfully"})
   }
   catch(err){
    res.status(500).send({status:false,message:err.message})
   }
}