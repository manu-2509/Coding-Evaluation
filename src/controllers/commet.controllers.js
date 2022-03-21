const Comment = require('../models/commet.model')



const express = require('express')

const router = express.Router()

router.post("",async(req,res)=>{
try {
    const comment =await Book.create(req.body)

    return res.status(201).send(comment);
} catch (err) {
    return res.status(500).send(err)
}

})

module.exports = router