const homeController = {
    index: (req, res) => {
        res.render('index.handlebars');
    },
    about: (req, res) => {
        res.render('about.handlebars');
    }
};



module.exports = homeController;