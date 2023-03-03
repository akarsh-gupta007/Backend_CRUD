const express = require("express")
const connection =require("./config/db.js")
const app = express();

connection.on("open", () => {
    console.log("conected")
})
app.use(express.json())
const alienRouter=require('./router/userdetails')

app.use("/api/data",alienRouter)

app.listen(9000,()=>{
    console.log("server started")
})