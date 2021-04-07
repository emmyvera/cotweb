const express = require("express")
const app = express()
const mongoose = require("mongoose")
const config = require("./config")

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));

const dashboard = require("./routes/dashboard")
app.use("/dashboard", dashboard)

const bibleStudy = require("./routes/bibleStudy")
app.use("/bibleStudy", bibleStudy)

app.listen(5050, () => {
    try {
        mongoose.connect(config.MONGODB_URI,
            //{user: config.user,
            //pass: config.pass,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    } catch (err) {
        console.log(err)
    }

    console.log(`This Webapp is available on the right port...`)
})