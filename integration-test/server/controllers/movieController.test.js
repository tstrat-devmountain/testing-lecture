const movieController = require('./movieController')
const testInit = require('../../test/init');

describe('integration tests', () => {
    var db;
    function clearDatabase() {
        return db.query('DELETE FROM movies');
    }

    beforeAll(() => {


        return testInit.initDb().then(database => {
        db = database;
        });
    });


    beforeEach(() => {
        return clearDatabase();
    });

    describe('creates movie correctly', () => {
        const name = 'Lotr'
        const genre= 'fantasy'
        it('responds with success', (done) => {
            const req = {
                app: {
                    get: () => db
                },
                body: { name, genre }
            }

            const res = {
                status: num => {
                    // check if num is 200
                    expect(num).toEqual(200)
                    return {
                        send(data) {
                            // finish the controller
                            done()
                        }
                    }
                }
            }

            // THIS IS WHERE THE TEST RUNS
            movieController.createMovie(req, res);

        })
        it('creates movie with new date', (done) => {
            const req = {
                app: {
                    get: () => db
                },
                body: { name, genre }
            }

            const res = {
                status: num => {
                    // check if num is 200
                    expect(num).toEqual(200)
                    return {
                        send(data) {
                            // finish the controller
                            console.log(data);
                            expect(data.name).toEqual(name)
                            expect(data.genre).toEqual(genre)
                            expect(data.date).toEqual(expect.any(Date))
                            done()
                        }
                    }
                }
            }

            // THIS IS WHERE THE TEST RUNS
            movieController.createMovie(req, res);

        })
    })
})
