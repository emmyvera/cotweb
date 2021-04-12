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

module.exports = route