const userController = {
    loginGet: (req, res) => {
        res.render('login.handlebars');
    },

    loginPost: (req, res) => {
        //res.redirect('/');
        let body = req.body;
        res.render('index.handlebars', body);
    }
};

module.exports = userController;