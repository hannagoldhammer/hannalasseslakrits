const mocha = require('mocha');
const request = require('supertest');
const router = require('../router/router');

describe('Using express', () => {

    it('Should respond to /', (done) => {
        request(router)
            .get('/')
            .expect(200)
            .expect(/Lasses Lakrits/, done())
    })
    it('Should do 200 on /allproducts', (done) => {
        request(router)
            .get('/allproducts')
            .send({})
            .expect(200)
        done()
    })
    it('Should test post', (done) => {
        request(router)
            .post('/allproducts')
            .then(res => {
                const body = res.body
                expect(res.status).toEqual(200)
            })
            .catch(err => done(err))
        done()
    })

})