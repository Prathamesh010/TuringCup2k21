const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    prn: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 75
    },
    college: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    uploadedAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Response',formSchema)
