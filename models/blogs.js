var mongoose = require("mongoose"),
    Comment = require("./comments");

var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
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

module.exports = mongoose.model("Blog", blogSchema);