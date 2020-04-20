var mongoose = require("mongoose");
var Comment = require("./comments.js");

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    company: String,
    body: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = mongoose.model("article", articleSchema);