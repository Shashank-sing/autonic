var mongoose = require("mongoose"),
    Article = require("./models/articles.js"),
    Blog = require("./models/blogs.js"),
    Comment = require("./models/comments.js");

var count = 0;

var articleData = [
    {
        title: "Fast Cars",
        author: "Steve Novak",
        company: "AthLead",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "New Design",
        author: "Kevin Garnett",
        company: "Revoos",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

var commentData = [
    {
        body: "I really love the new design",
        author: "Mark Cuban"
    },
    {
        body: "This is hitting my funny bone",
        author: "Lisa Jones"
    }
];

var blogData = [
    {
        title: "Car Review",
        author: "Mike Peterson",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Suspension Review",
        author: "Angela Schrute",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

]

function seedDB() {
    // Comment.deleteMany({}, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     Article.deleteMany({}, function (err) {
    //         if (err) {
    //             console.log(err);
    //         }

    //         Blog.deleteMany({}, function (err) {
    //             if (err) {
    //                 console.log(err)
    //             }

    //             articleData.forEach(function (article) {
    //                 Article.create(article, function (err, article) {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                             Comment.create(commentData[0], function (err, comment) {
    //                                 if (err)
    //                                     console.log(err);
    //                                 else {
    //                                     article.comments.push(comment);
    //                                     article.save();
    //                                 }
    //                             })
    //                     }
    //                 });
    //             });

    //             blogData.forEach(function (blog) {
    //                 Blog.create(blog, function (err, blog) {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                         Comment.create(commentData[0], function (err, comment) {
    //                             if (err)
    //                                 console.log(err);
    //                             else {
    //                                 blog.comments.push(comment);
    //                                 blog.save();
    //                             }
    //                         })
    //                     }
    //                 });
    //             });


    //         });


    //     });
    // });

    // Blog.findById("5e29796fe737253118ff4179", function(err, article){
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         Comment.create({
    //             author: "Jeb Binks",
    //             body: "You must be an expert or something"
    //         }, function(err, comment){
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 article.comments.push(comment);
    //                 article.save();
    //             }
    //         });
    //     }
    // });

    // console.log("Database Reset");
}



module.exports = seedDB;