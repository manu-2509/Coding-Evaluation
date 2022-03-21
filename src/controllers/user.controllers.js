const User = require('../models/user.models')

const express = require('express')

const router = express.Router()

router.get("",async(req, res)=>{


    try {
        const page =+ req.query.page
        const number =+ req.query.number
    
    const user = await User.find().skip((page-1)*number).limit(number).lean().exec();
    const page_num = await (User.find().countdocuments().lean().exec())/number
    return res.status(200).send(user,page_num)
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router