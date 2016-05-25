const mocha = require('mocha');
const request = require('supertest');
const chai = require('chai');
const assert = chai.assert;
const server = require('../../server/index.es6');

const port = process.env.PORT || 3000;

mocha.describe('API v2', () => {
  mocha.describe('GET /api/v2', () => {
    let app;

    mocha.before((done) => {
      app = server.listen(port);
      done();
    });

    mocha.it('returns status code 200', (done) => {
      request(app)
        .get('/api/v2/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.isTrue(res.body.success);
          assert.equal(res.body.api, 'v2');
          done();
        });
    });

    mocha.after((done) => {
      app.close();
      done();
    });
  });
});
