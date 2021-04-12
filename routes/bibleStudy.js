const router = require("express").Router();
const BibleStudy = require("../model/bibleStudy");

//Get BibleStudy
router.get("/", async (req, res) => {
    try {
        const result = await BibleStudy.find({});

        res.render("bibleStudy", {
            result
        })

    } catch (err) {
        console.log(err)
    }
});

router.get("/add-study", (req, res) => {
    res.render("add-study")
})
router.get("/list", async (req, res) => {
    try {
        const studyInfo = await BibleStudy.find({});
        res.json(
            studyInfo
        );
    } catch (err) {

    }
})

// Get Single BibleStudy
router.get("/:id", async (req, res) => {
    try {
        const bibleStudyInfo = await BibleStudy.findOne({
            _id: req.params.id
        }, (err) => {
            if (err) {
                res.sendStatus(404)
            }
        })
        res.json({
            success: true,
            BibleStudy: bibleStudyInfo,
            message: "Welcome And Stay Blessed!"
        })
    } catch (err) {
        console.log(err)
    }
});

// Post New BibleStudy
router.post("/", async (req, res) => {
    const {
        topic,
        bibleText,
        aim,
        introduction,
        discussion,
        personalApp,
        conclusion,
        gVerse,
        category,
        fileLink
    } = req.body;

    //FIXME Updating Files
    const bibleInfo = new BibleStudy({
        topic,
        bibleText,
        aim,
        introduction,
        discussion,
        personalApp,
        conclusion,
        gVerse,
        category,
        fileLink
    })

    try {
        const bibleStudySave = await bibleInfo.save((err) => {
            if (err) {
                res.send("Not Created")
            }
        });
        res.send(201);
    } catch (err) {
        console.log(err)
    }
});

// Update BibleStudy
router.put("/:id", async (req, res) => {

    try {
        const bibleStudySave = await BibleStudy.findOneAndUpdate({
                _id: req.params.id
            },
            req.body, (err) => {
                if (err) {
                    res.send("Not Created")
                }
            });
        res.send(200);
    } catch (err) {
        console.log(err)
    }
});

// Delete BibleStudy
router.delete("/:id", async (req, res) => {
    try {
        const bibleStudyDel = await BibleStudy.findOneAndDelete({
            _id: req.params.id
        }, (err) => {
            if (err) {
                res.sendStatus(404)
            }
        });
        res.send(200);
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;