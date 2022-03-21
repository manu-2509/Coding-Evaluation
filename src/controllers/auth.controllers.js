require("dotenv").config()
const User = require('../models/user.models')
const jwt = require("jsonwebtoken")


generateToken = (user)=>{
    return jwt.sign({user},process.env.secret_key)
}



const register = async (req, res) => {
try {
    let user = await User.findOne({ email:req.body.email})
    
    if(user){
        return res.status(400).send("User already exists")
    }
    
    user = await User.create(req.body)
    token = generateToken(user)
    return res.status.send({user,token})
} catch (err) {
    return res.status(500).send(err.message)
}
}


const login = async (req, res) => {
    try {
        let user = await User.findOne({ email:req.body.email})
        
        if(!user){
            return res.status(400).send("Wrong email or password")
        }
        let match = checkPassword(req.body.password)
        if(!match){
            return res.status.send("Wrong email or password")
        }
        token = generateToken(user)
        return res.status.send({user,token})
    } catch(err) {
       return res.status(500).send(err.message)
    }
    }


    module.exports={login,register}