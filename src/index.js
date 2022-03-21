const express = require('express')

const connect = require('./configs/db1')
const {login,register} = require('./controllers/auth.controllers')
const app = express()

const userController= require("./controllers/book.controllers")

const bookController= require("./controllers/user.controllers")


const commentController= require("./controllers/commet.controllers")

app.use(express.json())

app.use("/register",register)

app.use("/login",login)

app.use("/book",bookController)


app.use("user",userController)

app.use("comment",commentController)

app.listen(4000,async()=>{
    try {
        await connect()
        console.log('listening on port 4000')
    } catch (err) {
        console.log("Something went wrong")
    }
})
