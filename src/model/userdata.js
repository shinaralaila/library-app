const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/library");
const Schema= mongoose.Schema
const userschema=new Schema({
    NAME:String,
    PASSWORD:String,
    CONFIRMPASSWORD:String


})
var userdata=mongoose.model("userdata",userSchema);
module.exports=userdata;