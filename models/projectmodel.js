const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    },
    ranking:{
        type:Number,
        required:true,
     
    }
})
const projectmodel=mongoose.model('Alien',projectSchema)

module.exports=projectmodel