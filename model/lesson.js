const mongoose = require("mongoose")
const { Schema } = mongoose

const LessonSchema = new Schema({
    lesson: { type: Number, require: true },
    content: { type: Array, require: true }
})

module.exports = mongoose.model('lesson', LessonSchema)
