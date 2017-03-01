process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');



chai.use(chaiHttp);

describe('API Routes', function() {

    beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('GET /api/v1/meals', function() {
    it('should return all meals', function(done) {
      chai.request(server)
      .get('/api/v1/meals')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(3);
      res.body[0].should.have.property('mealName');
      res.body[0].mealName.should.equal('special #1');
      res.body[0].should.have.property('proteinId');
      res.body[0].proteinId.should.equal(2);
      done();
      });
    });
  });

  describe('GET /api/v1/meals/:id', function() {
    it('should return a single meal', function(done) {
      chai.request(server)
      .get('/api/v1/meals/2')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('mealName');
        res.body.mealName.should.equal('special #2');
        done();
      });
    });
  });

  describe('GET /api/v1/sides/:id', function() {
    it('should return the sides of a meal', function(done) {
      chai.request(server)
      .get('/api/v1/sides/3')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(3);
        res.body[0].should.have.property('sideName')
        res.body[0].sideName.should.equal('potatoes');
        done();
      })
    })
  })

  describe('GET /api/v1/protein/:id', function() {
    it('should return the protein of a meal', function(done) {
      chai.request(server)
      .get('/api/v1/protein/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('proteinName')
        res.body.proteinName.should.equal('chicken');
        done();
      })
    })
  })
});