const Film = require('../models').Film;

module.exports = {
	index: (req, res) => {
        // TODO
        Film.findAll()
            .then((films) => {
                res.render('film/index.hbs', {"films": films});
            });
	},

	createGet: (req, res) => {
        // TODO
		res.render("film/create.hbs");
	},

	createPost: (req, res) => {
        // TODO
        let film = req.body;

        //let film = req.body.film;
        //Check the view, if it's film[prop], we have to take the film with .film!!!
        Film.create(film)
            .then(() => {
                res.redirect("/");
            });
	},

	editGet: (req, res) => {
        // TODO
        let filmId = req.params.id;
        Film.findById(filmId)
            .then((film) => {
                res.render("film/edit.hbs", film.dataValues);
            });
	},

	editPost: (req, res) => {
        // TODO
        let filmId = req.params.id;
        let updatedFilm = req.body;

        Film.findById(filmId)
            .then((film) => {
                film.updateAttributes(updatedFilm)
                    .then(() => {
                        res.redirect("/");
                    })
            })
	},

	deleteGet: (req, res) => {
        // TODO
		let filmId = req.params.id;

		Film.findById(filmId)
			.then((film) => {
				res.render("film/delete.hbs", film.dataValues)
			})
	},

	deletePost: (req, res) => {
        // TODO
		Film.findById(req.params.id)
			.then((film) => {
				film.destroy()
					.then(() => {
						res.redirect("/");
					})
			})
	}
};