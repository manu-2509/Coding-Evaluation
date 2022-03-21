const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
 firstName:{type:String, required:true,minLength:3,maxLength:30},
 lastName:{type:String, required:true,minLength:3,maxLength:30},
 age:{type:String, required:true},
 email:{type:String, required:true,unique:true},
 profile:{type:String, required:true},
 password:{type:String, required:true}
 },
 {timestamp:true})


 userSchema.pre("save", function(next){
     const hash = bcrypt.hashSync(this.password,8);
     this.password = hash;
     return next();
 })

 userSchema.methods.checkPass=function(password){
     return bcrypt.compareSync(this.password,password)

 }



 module.exports = mongoose.model("user",userSchema)