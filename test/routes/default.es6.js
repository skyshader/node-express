const mocha = require('mocha');
const request = require('supertest');
const chai = require('chai');
const assert = chai.assert;
const server = require('../../server/index.es6');

const port = process.env.PORT || 3000;

mocha.describe('API default', () => {
  mocha.describe('GET /', () => {
    let app;

    mocha.before((done) => {
      app = server.listen(port);
      done();
    });

    mocha.it('returns status code 200', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.isTrue(res.body.success);
          assert.equal(res.body.api, 'default');
          done();
        });
    });

    mocha.it('returns status code 404', (done) => {
      request(app)
        .get('/abc')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
          if (err) throw err;
          assert.isFalse(res.body.success);
          assert.equal(res.body.api, 'default');
          done();
        });
    });

    mocha.it('returns status code 500', (done) => {
      request(app)
        .get('/error')
        .expect('Content-Type', /json/)
        .expect(500)
        .end((err, res) => {
          if (err) throw err;
          assert.isFalse(res.body.success);
          assert.equal(res.body.api, 'default');
          done();
        });
    });

    mocha.after((done) => {
      app.close();
      done();
    });
  });
});
