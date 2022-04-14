const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({
breed: String,
age: Number,
name: String
})

module.exports = mongoose.model("dog", dogSchema) 