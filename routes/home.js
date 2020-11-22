const express = require('express');
const router = express.Router();
const moviesData = require('../data/movies');

router.get('/', async (req, res) => {
    try {
        let movieList = await moviesData.getAllMovies();
        res.render('pages/home', { movieList: movieList, title: "Home"});
    } catch (e) {
        res.status(404).json({ message: e });
    }
});

module.exports = router;