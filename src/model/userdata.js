const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/library");
mongoose.connect("mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority");
const Schema= mongoose.Schema
const userschema=new Schema({
    NAME:String,
    PASSWORD:String,
    CONFIRMPASSWORD:String


})
var userdata=mongoose.model("userdata",userSchema);
module.exports=userdata;