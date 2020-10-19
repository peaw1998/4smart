const express = require("express")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
const app = express()


mongoose.connect(
    "mongodb+srv://Somporn:maapeaw5500@4smart.hz8li.mongodb.net/4smart?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function callback() {
    console.log("connect database success")
})

app.use(express.json())
app.get("/", (req, res) => {
    res.send("test")
})

app.use(require("./api/user"))
app.use(require("./api/lesson"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server on port:", PORT)
})
