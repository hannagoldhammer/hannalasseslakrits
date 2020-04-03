const mocha = require('mocha');
const request = require('supertest')
const server = require('../router/router')

describe('Using express', () => {

    it('Should respond to /', (done) => {
        request(server)
            .get('/')
            .expect(200, done)
    })

    it('Should do 200 on /allproducts', (done) => {
        request(server)
            .get('/allproducts')
            .expect(200, done)
    })
})