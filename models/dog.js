const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({
    breed:{

type: String,
minLength: 1,
maxLength: 7
    },
age: Number,
name: String
})

module.exports = mongoose.model("dog", dogSchema) 