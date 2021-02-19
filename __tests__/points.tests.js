const { app } = require('../app.js');
const { quotesCreek } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('it should respond with all quotes',
    async done => {
        const expectation =
        {
            quotesCreek: quotesCreek
        };
        const response = await request.get('/quotesCreek');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });

it('it should respond with one quote',
    async done => {
        const expectation = {
            results: {
                image: 1940,
                id: 1,
                name: 'David',
                price: 65,
                quote: 'red',
            }
        };
        const response = await request.get('/quotesCreek/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });