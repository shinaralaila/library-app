const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/library");
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    title:String,
    genre:String,
    image:String

})
var authordata=mongoose.model('authordata',AuthorSchema);
module.exports=authordata;