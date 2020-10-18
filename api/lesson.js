const router = require('express').Router()
const Lesson = require("../model/lesson")

router.get("/api/lesson", async (req, res, next) => {
    try {
        await Lesson.find({}).then((result) => {
            console.log("result", result);
            res.status(200).json(result)
        })
    } catch (err) {
        next(err)
    }
})

router.post("/api/lesson", async (req, res, next) => {
    const { lesson, content } = req.body
    try {
        if (lesson && content) {
            await Lesson.create({
                lesson: lesson,
                content: content
            }).then((result) => {
                console.log("result", result);
            })
            res.status(200).send("create success")
        } else {
            res.status(400).send("data incomplete")
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router