const mongoose = require('mongoose')

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
        lowercase: true
    },
    price: Number,
    published_date: Date
})

module.exports = mongoose.model('book', bookSchema)