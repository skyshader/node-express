const mocha = require('mocha');
const request = require('supertest');
const chai = require('chai');
const assert = chai.assert;
const server = require('../../server/index.es6');

const port = process.env.PORT || 3000;

mocha.describe('API v1', () => {
  mocha.describe('GET /api/v1', () => {
    let app;

    mocha.before((done) => {
      app = server.listen(port);
      done();
    });

    mocha.it('returns status code 200', (done) => {
      request(app)
        .get('/api/v1/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.isTrue(res.body.success);
          assert.equal(res.body.api, 'v1');
          assert.equal(res.body.message, 'This is index action of base controller!');
          done();
        });
    });

    mocha.after((done) => {
      app.close();
      done();
    });
  });
});
