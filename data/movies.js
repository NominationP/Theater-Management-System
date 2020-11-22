const mongoCollections = require('../config/mongoCollections');
const movies = mongoCollections.movie;

let exportedMethods = {

    async getAllMovies() {
        const moviesCollection = await movies();
        const movieList = await moviesCollection.find({}).toArray();
        if (!movieList) throw 'No movie in system!';
        return movieList;
    },
};

module.exports = exportedMethods;
