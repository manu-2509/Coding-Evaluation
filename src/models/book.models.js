const mongoose = require('mongoose')
 const bookSchema = new mongoose.Schema({
 likes:{type:Number, default:0},
 coverImage:{type:String, required:true},
 content:{type:String, required:true},
 userId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"user",
     required:true
 }, 
 publicationId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"publication",
     required:true,
    }
 },
 {timestamp:true})

 module.exports = mongoose.model("book",bookSchema)