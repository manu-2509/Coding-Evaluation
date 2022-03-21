const mongoose = require('mongoose')
 const commentSchema = new mongoose.Schema({
 body:{type:String, required:true},
 commentId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"comment",
     required:true
 }

 },
 {timestamp:true})

 module.exports = mongoose.model("comment",commentSchema)