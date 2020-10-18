const router = require('express').Router()
const User = require("../model/user")

router.post("/api/user", async (req, res, next) => {
    const { firstname, lastname, age } = req.body
    try {
        if (firstname && lastname && age) {
            await User.create({
                firstname: firstname,
                lastname: lastname,
                age: age
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