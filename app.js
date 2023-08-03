const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post("/" , async(req , res)=>{
    const {msg} = req.body
    console.log(msg);
    const data={
        msg:msg
    }
    await collection.insertMany([data])
    res.send("data saved")
})

app.listen(8000 , ()=>{
    console.log("port connected")
})