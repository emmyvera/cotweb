const route = require("express").Router();
const Post = require("../model/post");

//Get BibleStudy
route.get("/", async (req, res) => {
    try {
        const result = await Post.find({});

        res.render("post", {
            result
        })

    } catch (err) {
        console.log(err)
    }
});

route.get("/add-post", (req, res) => {
    res.render("add-post")
})

module.exports = route