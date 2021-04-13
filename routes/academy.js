const route = require("express").Router()
const Academy = require("../model/academy")

route.get("/", async (req, res) => {
    try {
        const result = await Academy.find({})

        res.render("academy", {
            result
        })
    } catch (err) {
        console.log(err)
    }
})

route.get("/add-academy", (req, res) => {
    res.render("add-academy")
})

module.exports = route