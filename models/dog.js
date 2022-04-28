const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
breed:{
    type: String,
    minLength: 1,
    maxLength:13
} ,
age: Number,
name: {
    type: String,
    min: 1,
    max: 7}
})
module.exports = mongoose.model("dog", dogSchema)