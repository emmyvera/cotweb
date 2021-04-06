const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.listen(5050, ()=>{
    console.log(`This Webapp is available on the right port...`)
})