var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Comment = require("./models/comments"),
    Article = require("./models/articles"),
    Blog = require("./models/blogs"),
    seedDB =require("./seeds.js")

mongoose.connect("mongodb://localhost:27017/autonic", { useNewUrlParser: true, useUnifiedTopology: true });

seedDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/updates", function(req, res){
    Article.find({}).populate("comments").exec(function(err, articles){
        if(err) {
            console.log(err);
        } else { 
            Blog.find({}).populate("comments").exec(function(err, blogs){
                if(err) {
                    console.log(err);
                } else {
                    res.render("updates", {
                        blogs: blogs,
                        articles: articles
                    });
                }
            });
        }
    })
});

app.get("/updates/article/:id", function(req, res) {
    Article.findById(req.params.id).populate("comments").exec(function(err, article) {
        if(err) {
            console.log(err);
        } else {
            res.render("articles/show", {article: article});
        }
    });
});

app.get("/updates/blog/:id", function(req, res) {
    Blog.findById(req.params.id).populate("comments").exec(function(err, blog) {
        if(err) {
            console.log(err);
        } else {
            res.render("blogs/show", {blog: blog});
        }
    });
});


app.listen("8080", "localhost", function(){
    console.log("Server Started on port 8080   AUTONIC");
});