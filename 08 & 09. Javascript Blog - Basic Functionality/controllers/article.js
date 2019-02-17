const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },
    createPost: (req, res) => {
        let articleBody = req.body;
        let errorMsg = "";

        if (!req.isAuthenticated()) {
            errorMsg = "You must be logged to create articles!";
        } else if (!articleBody.title) {
            errorMsg = "Invalid title!";
        } else if (!articleBody.content) {
            errorMsg = "Invalid content!";
        }

        if (errorMsg) {
            res.render('article/create', {
                error: errorMsg,
                title: articleBody.title,
                content: articleBody.content
            });

            return;
        }

        articleBody.authorId = req.user.id;

        Article
            .create(articleBody)
            .then((article) => {
                res.redirect("/");
            });
    },
    details: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId, {
                include: [{
                    model: User
                }]
            })
            .then((article) => {
                res.render('article/details', article.dataValues);
            })
    },
    editGet: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then((article) => {
                res.render('article/edit', article.dataValues);
            });
    },
    editPost: (req, res) => {
        let articleBody = req.body;
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then((article) => {
                article
                    .update(articleBody)
                    .then(() => {
                        res.redirect('/articles/my-articles');
                    });
            });
    },
    deleteGet: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then((article) => {
                res.render('article/delete', article.dataValues);
            })
    },
    deletePost: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then((article) => {
                article
                    .destroy()
                    .then(() => {
                        res.redirect('/');
                    });
            });
    },
};