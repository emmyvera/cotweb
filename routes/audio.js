const route = require("express").Router()
const Audio = require("../model/audio")

route.get("/", async (req, res) => {
    try {
        const result = await Audio.find({})

        res.render("audio", {
            result
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = route