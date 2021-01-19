"use strict"
const express = require("express")
const cors = require("cors")

const PORT = 3333
const HOST = "0.0.0.0"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        title: "Express serving...",
        message: "Hello World from Node container!"
    })
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)