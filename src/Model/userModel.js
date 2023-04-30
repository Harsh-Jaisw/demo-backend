const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    "name":{
        type:String,
        required:true,
        unique:true 
    },
    "email":{
        type:String 
    },
    "phone":{
        type:Number
    }
},{timestamps:true})
module.exports=mongoose.model("user",userSchema)