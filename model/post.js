const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    details: {
        type: String,
        required: true,
        trim: true
    },

    pic: {
        type: String,
        default: "cotpics.jpg"
    },

    author: {
        type: String,
        default: "Admin"
    },

    category: {
        type: String,
        default: "Admin"
    },

});

PostSchema.plugin(timestamp);
module.exports = mongoose.model("home", PostSchema);