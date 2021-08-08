'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('my Server', ()=> {
    it(' Not Found Request', async () => {
        const response = await request.get('/asd');
        expect(response.status).toEqual(404);
    });

    it('My Internal Server Errors', async () => {
        const response = await request.post('/bad');
        expect(response.status).toEqual(500);
    });
    
    it('Get Data From /data ', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });
    
    it('/ route works', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('Hello World');
    });
});
