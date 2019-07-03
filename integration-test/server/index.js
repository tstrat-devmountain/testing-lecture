const express = require('express')
const massive = require('massive')
const { getMovies, createMovie } = require('./controllers/movieController');
require('dotenv').config()
const app = express()
app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    dbInstance.init()
    app.set('db', dbInstance)
    console.log('Successfully Connected to Database')
})


//endpoints here
app.get('/api/movies', getMovies)
app.post('/api/movies', createMovie)

app.listen(SERVER_PORT || 4000, () => console.log(`Server started, port: SERVER_PORT
Don't spook the monkey 🙈`))
