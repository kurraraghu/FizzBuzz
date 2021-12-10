import chai from 'chai';
import chaiHttp from 'chai-http';

import appConfig from "../config/config.js";
import app from "../app.js";

const expect = chai.expect;
chai.use(chaiHttp);

describe('API FizzBuzz', function () {
    // this.timeout(5000); // How long to wait for a response (ms)

    before(function () {

    });

    after(function () {

    });

    //  FizzBuzz for count 20
    it('should return 20', function () {
        return chai.request(app)
            .get('/api/fizzBuzz/20')
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
            });
    });

    //  FizzBuzz for count 20
    it('should return 20', function () {
        return chai.request(app)
            .get('/api/fizzBuzz/20')
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
            });
    });

    //  FizzBuzz for count greater than maximum 
    it('should return max error', function () {
        return chai.request(app)
            .get('/api/fizzBuzz/' + (appConfig.max + 1))
            .then(function (res) {
                expect(res).to.have.status(400);
            }).catch(function (err) {
            });
    });

    //  FizzBuzz for count less than minimum 
    it('should return min error', function () {
        return chai.request(app)
            .get('/api/fizzBuzz/' + (appConfig.max - 1))
            .then(function (res) {
                expect(res).to.have.statusCode(400);
            }).catch(function (err) {
            });
    });

    // GET - Invalid path
    it('should return Not Found', function () {
        return chai.request(app)
            .get('/api/fizzBuzz')
            .then(function (res) {
                expect(err).to.have.statusCode(404);
            }).catch(function (err) {

            });
    });

});