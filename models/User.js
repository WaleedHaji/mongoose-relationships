const mongoose = require('mongoose')
const { applyTimestamps } = require('../../../../Lectures/mongoose-relationships/models/Authors')

const userSchema = new mongoose.schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 6,
        maxLength: 16,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User