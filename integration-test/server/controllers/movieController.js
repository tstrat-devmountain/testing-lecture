module.exports = {
    getMovies: (req, res) => {
        req.app.get('db').get_movies().then(movies => {
            res.status(200).send(movies);
        })
    },
    createMovie: (req, res) => {
        const { name, genre } = req.body;
        const db = req.app.get('db')
        const now = new Date()

        db.create_movie({ name, genre, date:now }).then(newMovie => {
            res.status(200).send(newMovie[0]);
        })

    }
}
