const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true.valueOf,
        lowercase: true,
        validator: [isEmail, "please enter a valid email address"]
    
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model ('user', userSchema)