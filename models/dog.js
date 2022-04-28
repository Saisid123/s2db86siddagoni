const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({
breed:{
type: String,
minLength: 1,
maxLength: 13
},
age:{
    type:Number,
    min:1

},
name: String
})

module.exports = mongoose.model("dog", dogSchema) 