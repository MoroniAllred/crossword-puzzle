const mongoose = require("mongoose")
const Schema = mongoose.Schema

const wordSchema = new Schema({
    word: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Word", wordSchema)