const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    age: { type: Number, require: true }
})

module.exports = mongoose.model('user', UserSchema)
