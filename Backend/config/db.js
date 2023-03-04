const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true
})
const con = mongoose.connection;
module.exports=con;