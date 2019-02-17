const Lab = require('../models').Lab;

module.exports = {
    index: (req, res) => {
        //TODO: Implement me
        Lab.findAll()
            .then((labs) => {
                res.render('lab/index.hbs', {"labs": labs});
            });
    },

    createGet: (req, res) => {
        //TODO: Implement me
        res.render("lab/create.hbs");
    },

    createPost: (req, res) => {
        //TODO: Implement me
        let args = req.body;

        //Check the view, if it's not lab[prop], we do not take the lab with .lab!!!
        let lab = args.lab;

        Lab.create(lab)
            .then(() => {
                res.redirect("/");
            });
    },

    editGet: (req, res) => {
        //TODO: Implement me
        let labId = req.params.id;
        Lab.findById(labId)
            .then((lab) => {
                res.render("lab/edit.hbs", {"lab": lab})
            });
    },

    editPost: (req, res) => {
        //TODO: Implement me
        let labId = req.params.id;
        let updatedLab = req.body.lab;

        Lab.findById(labId)
            .then((lab) => {
                lab.updateAttributes(updatedLab)
                    .then(() => {
                        res.redirect("/");
                    })
            })
    },

    deleteGet: (req, res) => {
        //TODO: Implement me
        Lab.findById(req.params.id)
            .then((lab) => {
                res.render("lab/delete.hbs", {"lab": lab});
            });
    },

    deletePost: (req, res) => {
        //TODO: Implement me
        Lab.findById(req.params.id)
            .then((lab) => {
                lab.destroy()
                    .then(() => {
                        res.redirect("/");
                    });
            })
    }
};