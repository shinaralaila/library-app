const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/library");
mongoose.connect("mongodb+srv://userone:<password>@cluster0.elmop.mongodb.net/test");
const Schema= mongoose.Schema
const userschema=new Schema({
    NAME:String,
    PASSWORD:String,
    CONFIRMPASSWORD:String


})
var userdata=mongoose.model("userdata",userSchema);
module.exports=userdata;