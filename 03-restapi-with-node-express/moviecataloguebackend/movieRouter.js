const express = require('express');
const router = express.Router();
const movies = require('./movies');



// GET list of all movies
router.get('/', (req, res) => {
    res.send(movies);
});

// GET A movie by id
router.get('/:id', (req, res) => {
    let movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).send("Movie with the given id not found");
    }
    return res.send(movie);
});


// PUT update a movie
router.put('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let movie = movies.find(m => m.id === id);

        if (!movie) {
            console.log(movie);
            return res.status(404).send("Movie with the given id not found");
        } else {
            movie.name = req.body.name;
            movie.year = req.body.year;
            movie.genre = req.body.genre;

            res.send(movie);
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }

});


// POST Create a new movie
router.post('/', (req, res) => {
    try {
        const newMovie = {
            id: movies.length + 1,
            name: req.body.name,
            genre: req.body.genre,
            year: req.body.year
        }
        movies.push(newMovie);

        return res.send(newMovie);

    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const movie = movies.find(m => m.id === parseInt(req.params.id));

        if (!movie) {
            return res.status(404).send("Movie with the given id not found");
        } else {
            const index = movies.indexOf(movie);
            movies.splice(index, 1);
            res.send(movies);
        }
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
});


module.exports = router;