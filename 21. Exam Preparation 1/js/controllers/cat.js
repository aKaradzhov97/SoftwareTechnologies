const Cat = require('../models').Cat;

module.exports = {
    index: (req, res) => {
        // TODO
        Cat.findAll()
            .then((cats) => {
                res.render('cat/index.hbs', {"cats": cats});
            });

    },

    createGet: (req, res) => {
        // TODO
        res.render("cat/create.hbs");
    },

    createPost: (req, res) => {
        // TODO
        let args = req.body;
        let cat = args.cat;
        //Check the view, if it's not cat[prop], we do not take the cat with .cat!!!
        Cat.create(cat)
            .then(() => {
                res.redirect("/");
            });
    },

    editGet: (req, res) => {
        // TODO
        let catId = req.params.id;
        Cat.findById(catId)
            .then((cat) => {
                res.render("cat/edit.hbs", {"cat": cat});
            });
    },

    editPost: (req, res) => {
        // TODO
        let catId = req.params.id;
        let updatedCat = req.body.cat;

        Cat.findById(catId)
            .then((cat) => {
                cat.updateAttributes(updatedCat)
                    .then(() => {
                        res.redirect("/");
                    })
            })
    },

    deleteGet: (req, res) => {
        // TODO
        let catId = req.params.id;
        Cat.findById(catId)
            .then((cat) => {
                res.render("cat/delete.hbs", {"cat": cat});
            });
    },

    deletePost: (req, res) => {
        // TODO
        Cat.findById(req.params.id)
            .then((cat) => {
                cat.destroy()
                    .then(() => {
                        res.redirect("/");
                    });
            })
    }
};
